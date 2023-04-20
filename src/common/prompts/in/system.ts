import { ChatCompletionRequestMessage } from "openai";

export const SYSTEM_IN_PROMPT = (
  dataset: string
): ChatCompletionRequestMessage => {
  return {
    role: "system",
    content: `You are going to act as a parser. Your task is to deduce the elements that are required from an utterance. The response will contain an array of item(s), where the first element is either 'data layer' or 'base layer'. 'data layer' represents visual elements like points in a scatter plot and bars in bar charts and histograms. 'base layer' represents the axes, title, legend or sections of the graph. If the first element is 'data layer', you need to append an additional element into the array depending on the chart type. The set of rule mappings is defined as such: 'scatter chart' = point, 'bar chart' = bar, 'histogram' = bar, 'heatmap chart' = rect, 'line chart' = line or rect, and 'pie chart' = arc. You can only return the response containing the array of element(s) and the array cannot have more than two elements. You'll use the following dataset as an example to practice your parsing skills: ${dataset}`,
  };
};
