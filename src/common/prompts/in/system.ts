import { ChatCompletionRequestMessage } from "openai";

export const SYSTEM_IN_PROMPT: ChatCompletionRequestMessage[] = [
  {
    role: "system",
    content: `You are going to act as a parser where you will be given an utterance and you will be deduce the elements that are required. The response will contain an array of item(s), where the first element is either 'data layer' or 'base layer'. 'data layer' represents visual elements like points in a scatter plot and bars in bar charts and histograms. 'base layer' represents the axes, title and legend. If the first element is 'data layer', you need to append an additional element into the array depending on the chart type. The set of rule mappings is defined as such: 'scatter chart' = point, 'bar chart' = bar, 'histogram' = bar, 'heatmap chart' = rect, 'line chart' = line, and 'pie chart' = arc. You can only return the response containing the array of element(s) and nothing more.`,
  },
];
