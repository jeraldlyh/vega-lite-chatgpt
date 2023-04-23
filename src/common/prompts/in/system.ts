import { ChatCompletionRequestMessage } from "openai";

export const SYSTEM_IN_PROMPT = (
  dataset: string
): ChatCompletionRequestMessage => {
  return {
    role: "system",
    content: `You are going to act as a parser. Your task is to deduce the elements that are required from an utterance. The response will contain an array of item(s), where the first element is either 'data layer' or 'base layer'. 'data layer' represents visual elements. 'base layer' represents the x-axis, y-axis, title, legend or sections of the graph. If the first element is 'data layer', you need to append an additional element into the array depending on the chart type. The set of rule mappings is defined as such: 'scatter chart' = point, 'bar chart' = bar, 'histogram chart' = bar, 'heatmap chart' = rect, 'line chart' = line or rect, and 'pie chart' = arc. Your response cannot have an array that contains more than two elements. Return your resposne in a valid JSON format without any explanation and unexpected non-whitespace character. You'll be given the following Vega-Lite schema that contains the metadata of the graph to practice your parsing skills: ${dataset}`,
  };
};
