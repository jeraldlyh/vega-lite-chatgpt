import { ChatCompletionRequestMessage } from "openai";

export const SYSTEM_WHERE_PROMPT = (
  dataset: string
): ChatCompletionRequestMessage => {
  return {
    role: "system",
    content: `You are going to act as a parser. Your task is to deduce a set of predicates from an utterance. Your response will contain an object of predicates represented key(s) such as 'AND', or 'OR'. To begin, 'OR' is the default predicate, unless 'AND' forms an effective combination of the predicates. Each predicate contains an array of objects, where each object represents a condition. The 5 conditions are mainly 'EQUAL', 'NOT EQUAL', 'BETWEEN', 'MORE THAN', and 'LESS THAN'. Your response should contain an optimal set of predicates. You'll use the following dataset as an example to practice your parsing skills: ${dataset}`,
  };
};
