import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";
import { PROMPT_MAPPING, TGraph } from "../common";

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
      content: `Infer the type of element from this utterance: "${text}"`,
    },
  ];
  const highlightResponse = await openAi.createChatCompletion({
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
      content: `Obtain the elements from this utterance: "${text}"`,
    },
  ];
  const inResponse = await openAi.createChatCompletion({
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
      content: `Obtain the predicate(s) from this utterance: "${text}"`,
    },
  ];
  const whereResponse = await openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: wherePrompts,
  });

  try {
    return {
      highlight: highlightResponse.data.choices[0].message?.content,
      in: JSON.parse(inResponse.data.choices[0].message!.content),
      where: JSON.parse(whereResponse.data.choices[0].message!.content),
    };
  } catch (error) {
    return {
      highlight: highlightResponse.data.choices[0].message?.content,
      in: JSON.stringify(error),
      where: JSON.stringify(error),
    };
  }
};

export const ChatGPTService = {
  initialise,
};
