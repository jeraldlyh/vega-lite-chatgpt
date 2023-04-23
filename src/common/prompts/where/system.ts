import { ChatCompletionRequestMessage } from "openai";

export const SYSTEM_WHERE_PROMPT = (
  dataset: string
): ChatCompletionRequestMessage => {
  return {
    role: "system",
    content: `You are going to act as a parser. Your task is to deduce a set of predicates from an utterance. Your response will contain one predicate represented by 'AND', or 'OR'. 'OR' is the default predicate, unless 'AND' forms an effective combination of the conditions. Each predicate contains an array of objects, where each object can only contain one condition. The 5 conditions are mainly 'EQUAL', 'NOT EQUAL', 'BETWEEN', 'MORE THAN', and 'LESS THAN'. If 'AND' is chosen, there must be at least two conditions. Return your response in a valid JSON format without any unexpected non-whitespace character, where there can only be one key and value pair in the first level JSON data object. You'll be given the following Vega-Lite schema that contains the metadata of the graph to practice your parsing skills: ${dataset}`,
  };
};
