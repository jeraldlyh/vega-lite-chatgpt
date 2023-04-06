import { ChatCompletionRequestMessage } from "openai";

export const PIE_CHART_HIGHLIGHT_PROMPTS: ChatCompletionRequestMessage[] = [
  /* -------------------------------------------------------------------------- */
  /*                         SINGLE CATEGORY HIGHLIGHTS                         */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `'X' and 'Y' are placeholder texts. Infer the type of element from this utterance: "Based on the pie chart, the smallest section with any X was only Y percent"`,
  },
  {
    role: "assistant",
    content: `visual element`,
  },
  {
    role: "user",
    content: `'X', 'Y', and 'Z' are placeholder texts. Infer the type of element from this utterance: "Based on the pie chart, nearly X percent of the respondents mentioned Y and Z"`,
  },
  {
    role: "assistant",
    content: `visual element`,
  },
  {
    role: "user",
    content: `'X' and 'Y' are placeholder texts, Infer the type of element from this utterance: "The largest section in the pie chart consisted of X that mentioned Y"`,
  },
  {
    role: "assistant",
    content: `visual element`,
  },
  {
    role: "user",
    content: `'X', 'Y', and 'Z' are placeholder texts. Infer the type of element from this utterance: "Nearly all the respondents in the pie chart mentioned X, Y or Z"`,
  },
  {
    role: "assistant",
    content: `visual element`,
  },
  {
    role: "user",
    content: `'X' is a placeholder text. Infer the type of element from this utterance: "A big proportion of the pie chart represents X"`,
  },
  {
    role: "assistant",
    content: `visual element`,
  },
  /* -------------------------------------------------------------------------- */
  /*                          MULTI CATEGORY HIGHLIGHTS                         */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `'X', 'Y', and 'Z' are placeholder texts. Infer the type of element from this utterance: "As shown in the pie chart, X percent of the data characterized the Y as Z"`,
  },
  {
    role: "assistant",
    content: `visual element`,
  },
  {
    role: "user",
    content: `'A', 'B', 'C', 'D' and 'E' are placeholder texts. Infer the type of element from this utterance: "As shown in the pie chart, A percent of the respondents mentioned C, D and E"`,
  },
  {
    role: "assistant",
    content: `visual element`,
  },
  {
    role: "user",
    content: `'X' and 'Y' are placeholder texts. Infer the type of element from this utterance: "Based on the pie chart, X is Y percent"`,
  },
  {
    role: "assistant",
    content: `visual element`,
  },
  {
    role: "user",
    content: `'X', 'Y', and 'Z' are placeholder texts. Infer the type of element from this utterance: "Based on the pie chart, X takes up Y percent of Z"`,
  },
  {
    role: "assistant",
    content: `visual element`,
  },
  {
    role: "user",
    content: `'X' and 'Y' are placeholder texts. Infer the type of element from this utterance: "In this pie chart, X is the least Y with Z percentage"`,
  },
  {
    role: "assistant",
    content: `visual element`,
  },
  /* -------------------------------------------------------------------------- */
  /*                              COMMON HIGHLIGHTS                             */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `'X' is a placeholder text. Infer the type of element from this utterance: "The legend shows that this pie chart is made up of X categories"`,
  },
  {
    role: "assistant",
    content: `legend`,
  },
  {
    role: "user",
    content: `'X' and 'Y' are placeholder texts. Infer the type of element from this utterance: "This pie chart describes X number of Y"`,
  },
  {
    role: "assistant",
    content: `legend`,
  },
];
