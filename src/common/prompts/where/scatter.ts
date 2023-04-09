import { ChatCompletionRequestMessage } from "openai";

export const SCATTER_CHART_WHERE_PROMPTS: ChatCompletionRequestMessage[] = [
  {
    role: "user",
    content: `'A', 'B', 'C' and 'D' are placeholder texts. Infer the type of element from this utterance: "Jobs such as A, B, C, and D are common in the work employment survey"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {"name": {"EQUAL": "A"}},
            {"name": {"EQUAL": "B"}},
            {"name": {"EQUAL": "C"}},
            {"name": {"EQUAL": "D"}}
        ]
    }`,
  },
  {
    role: "user",
    content: `'A', 'B', 'C', 'D', 'E', 'F', 'G' and 'H' are placeholder texts. Infer the type of element from this utterance: "In both A and B, jobs with less than C percent women included jobs like D, E, F, G and H"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {"A": {"BETWEEN": ["0", "C"]}},
            {"B": {"BETWEEN": ["0", "C"]}}
        ]
    }`,
  },
  {
    role: "user",
    content: `'X' is a placeholder text. Infer the type of element from this utterance: "We can observe that the points above the line has X across the years"`,
  },
  {
    role: "assistant",
    content: `{}`,
  },
  {
    role: "user",
    content: `X' is a placeholder text. Infer the type of element from this utterance: "Let's take a look at the jobs X the line"`,
  },
  {
    role: "assistant",
    content: `{}`,
  },
  {
    role: "user",
    content: `'X', 'Y' and 'Z' are placeholder texts. Infer the type of element from this utterance: "In X, we can roughly identify the jobs that have Y to Z percent women involvement"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {"X": {"BETWEEN": ["Y", "Z"]}}
        ]
    }`,
  },
  {
    role: "user",
    content: `'X', 'Y' and 'Z' are placeholder texts. Infer the type of element from this utterance: "The amount of women that took up the role of a X actually decreased from Y to Z"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {"name": {"EQUAL": "X"}}
        ]
    }`,
  },
  {
    role: "user",
    content: `'A', 'B', 'C', 'D' and 'E' are placeholder texts. Infer the type of element from this utterance: "Jobs such as A, B and C increased drastically from D to E"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {"name": {"EQUAL": "A"}},
            {"name": {"EQUAL": "B"}},
            {"name": {"EQUAL": "C"}}
        ]
    }`,
  },

  {
    role: "user",
    content: `X', 'Y' and 'Z' are placeholder texts. Infer the type of element from this utterance: "In both X and Y, jobs with over Z percent women included a lot of technological roles"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {"X": {"BETWEEN": ["0", "Z"]}},
            {"Y": {"BETWEEN": ["0", "Z"]}}
        ]
    }`,
  },

  /* -------------------------------------------------------------------------- */
  /*                              COMMON HIGHLIGHTS                             */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `X' and 'Y' are placeholder texts. Infer the type of element from this utterance: "The legend displays the scale from X to Y"`,
  },
  {
    role: "assistant",
    content: `{}`,
  },
  {
    role: "user",
    content: `X' is a placeholder text. Infer the type of element from this utterance: "The y-axis represents the percentage of women in the workplace in X"`,
  },
  {
    role: "assistant",
    content: `{}`,
  },
];
