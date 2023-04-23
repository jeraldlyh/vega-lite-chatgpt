import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";
import { PROMPT_MAPPING, SYSTEM_PROMPTS, TGraph } from "../common";
import { DATASET } from "../common/data";

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  //   organization: process.env.NEXT_PUBLIC_OPENAI_ORG_ID,
});
const openAi = new OpenAIApi(configuration);

const initialise = async (
  //   data: PlainObject | unknown,
  text: string,
  graphType: TGraph
) => {
  if (!text) {
    return;
  }

  const data = DATASET[graphType];

  /* -------------------------------------------------------------------------- */
  /*                                  HIGHLIGHT                                 */
  /* -------------------------------------------------------------------------- */
  const highlightPrompts: ChatCompletionRequestMessage[] = [
    SYSTEM_PROMPTS.HIGHLIGHT(data),
    ...PROMPT_MAPPING[graphType].HIGHLIGHT,
    {
      role: "user",
      content: `This is the dataset used for the ${graphType} chart: ${data}. Infer the type of element from this utterance: "${text}"`,
    },
  ];
  const highlightResponse = openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: highlightPrompts,
  });

  /* -------------------------------------------------------------------------- */
  /*                                     IN                                     */
  /* -------------------------------------------------------------------------- */
  const inPrompts: ChatCompletionRequestMessage[] = [
    SYSTEM_PROMPTS.IN(data),
    ...PROMPT_MAPPING[graphType].IN,
    {
      role: "user",
      content: `This is the dataset used for the ${graphType} chart: ${data}. Infer the type of element from this utterance: "${text}"`,
    },
  ];
  const inResponse = openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: inPrompts,
  });

  /* -------------------------------------------------------------------------- */
  /*                                    WHERE                                   */
  /* -------------------------------------------------------------------------- */
  const wherePrompts: ChatCompletionRequestMessage[] = [
    SYSTEM_PROMPTS.WHERE(data),
    ...PROMPT_MAPPING[graphType].WHERE,
    {
      role: "user",
      content: `This is the dataset used for the ${graphType} chart: ${data}. Infer the predicate(s) from this utterance: "${text}"`,
    },
  ];
  const whereResponse = openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: wherePrompts,
  });

  const responses = await Promise.all([
    highlightResponse,
    inResponse,
    whereResponse,
  ]);

  try {
    return {
      highlight: responses[0].data.choices[0].message?.content,
      in: JSON.parse(responses[1].data.choices[0].message!.content),
      where: JSON.parse(responses[2].data.choices[0].message!.content),
    };
  } catch (error) {
    console.log(error);
    return {
      error: JSON.stringify((error as Error).message),
    };
  }
};

export const ChatGPTService = {
  initialise,
};
