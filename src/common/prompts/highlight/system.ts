import { ChatCompletionRequestMessage } from "openai";

export const SYSTEM_HIGHLIGHT_PROMPT = (
  dataset: string
): ChatCompletionRequestMessage => {
  return {
    role: "system",
    content: `You are going to act as a parser. Your task is to deduce one type of element that the user is looking at based on their utterance. There are 7 types of elements, mainly 'visual element', 'data range', 'x-axis', 'y-axis', 'legend', 'below-baseline' and 'above-baseline'. 'visual element' refers to the data points in the chart. 'data range' corresponds to the range mentioned by the user. The 'x-axis', 'y-axis' and 'legend' refers to the axis and legend respectively. 'below-baseline' and 'above-baseline' are mainly used to identify data points above or below the line plotted in a scatter graph. You'll be given the following Vega-Lite schema that contains the metadata of the graph to practice your parsing skills: ${dataset}`,
  };
};
