import { ChatCompletionRequestMessage } from "openai";

export const HISTOGRAM_CHART_WHERE_PROMPTS: ChatCompletionRequestMessage[] = [
  {
    role: "user",
    content: `The utterance is: "We can observe three percentage values such as 6.41%, 5.11% and 1.79%"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {"pct": {"EQUAL": "6.41"}},
            {"pct": {"EQUAL": "5.11"}},
            {"pct": {"EQUAL": "1.79"}}
        ]
    }`,
  },
  {
    role: "user",
    content: `The utterance is: "Values of the graph were between 0 and 6.5%"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {"pct": {"BETWEEN": ["0", "6.5"]}}
        ]
    }`,
  },
  {
    role: "user",
    content: `The utterance is: "If you order a meat burrito at Chipotle with these toppings, it's very likely to reach 1000 calories"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {"val": {"EQUAL": "1000"}}
        ]
    }`,
  },
  {
    role: "user",
    content: `The utterance is: "Few of the meals were between 1500 and 1700 calories"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {"val": {"BETWEEN": ["1500", "1700"]}}
        ]
    }`,
  },
  {
    role: "user",
    content: `The utterance is: "The lowest percentage other than 0 is 0.03"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {"pct": {"EQUAL": "0.03"}}
        ]
    }`,
  },

  /* -------------------------------------------------------------------------- */
  /*                              COMMON HIGHLIGHTS                             */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `The utterance is: "The x-axis represents the number of calories of each meal"`,
  },
  {
    role: "assistant",
    content: `{}`,
  },
];
