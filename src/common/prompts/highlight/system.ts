import { ChatCompletionRequestMessage } from "openai";

export const SYSTEM_HIGHLIGHT_PROMPT: ChatCompletionRequestMessage[] = [
  {
    role: "system",
    content: `You are going to act as a parser where you will be given an utterance and you will be deduce the type of element that the user is looking at. There are 5 types of elements, mainly 'visual element', 'x-axis', 'y-axis', and 'legend'. The 'visual element' refers to the data points in the chart, while the 'x-axis', 'y-axis' and 'legend' refers to the axis and legend respectively. You can only return the response containing the type of element and nothing more.`,
  },
];
