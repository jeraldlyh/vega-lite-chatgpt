import { ChatCompletionRequestMessage } from "openai";

export const SYSTEM_HIGHLIGHT_PROMPT = (
  dataset: string
): ChatCompletionRequestMessage => {
  return {
    role: "system",
    content: `You are going to act as a parser. Your task is to deduce the type of element that the user is looking at based on their utterance. There are 5 types of elements, mainly 'visual element', 'data range', 'x-axis', 'y-axis', and 'legend'. 'visual element' refers to the data points in the chart. 'data range' corresponds to the range mentioned by the user. The 'x-axis', 'y-axis' and 'legend' refers to the axis and legend respectively. You'll use the following dataset as an example to practice your parsing skills: ${dataset}`,
  };
};
