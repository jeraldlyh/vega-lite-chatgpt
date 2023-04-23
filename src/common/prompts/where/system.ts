import { ChatCompletionRequestMessage } from "openai";

export const SYSTEM_WHERE_PROMPT = (
  dataset: string
): ChatCompletionRequestMessage => {
  return {
    role: "system",
    content: `You are going to act as a parser. Your task is to deduce a set of predicates from an utterance. Your response will contain an object of predicates represented key(s) such as 'AND', or 'OR'. 'OR' is the default predicate, unless 'AND' forms an effective combination of the predicates. Each predicate contains an array of objects, where each object represents a condition. You can infer the key based on the dataset provided. The 5 conditions are mainly 'EQUAL', 'NOT EQUAL', 'BETWEEN', 'MORE THAN', and 'LESS THAN'. You'll be given the following Vega-Lite schema that contains the metadata of the graph to practice your parsing skills: ${dataset}`,
  };
};
