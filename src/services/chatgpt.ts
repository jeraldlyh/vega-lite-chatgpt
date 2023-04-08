import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";
import { PROMPT_MAPPING, TGraph } from "../common";
import data from "../common/data/bar.json";

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
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

  /* -------------------------------------------------------------------------- */
  /*                                  HIGHLIGHT                                 */
  /* -------------------------------------------------------------------------- */
  const highlightPrompts: ChatCompletionRequestMessage[] = [
    ...PROMPT_MAPPING["system"].HIGHLIGHT,
    ...PROMPT_MAPPING[graphType].HIGHLIGHT,
    {
      role: "user",
      content: `This is the dataset used for the bar graph: ${data}. Infer the type of element from this utterance: "${text}"`,
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
    ...PROMPT_MAPPING["system"].IN,
    ...PROMPT_MAPPING[graphType].IN,
    {
      role: "user",
      content: `This is the dataset used for the bar graph: ${data}. Infer the type of element from this utterance: "${text}"`,
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
    ...PROMPT_MAPPING["system"].WHERE,
    ...PROMPT_MAPPING[graphType].WHERE,
    {
      role: "user",
      content: `This is the dataset used for the bar graph: ${data}. Infer the predicate(s) from this utterance: "${text}"`,
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
    return {
      highlight: JSON.stringify(error),
      in: JSON.stringify(error),
      where: JSON.stringify(error),
    };
  }
};

export const ChatGPTService = {
  initialise,
};
