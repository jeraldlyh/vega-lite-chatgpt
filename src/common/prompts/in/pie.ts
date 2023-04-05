import { ChatCompletionRequestMessage } from "openai";

export const PIE_CHART_IN_PROMPTS: ChatCompletionRequestMessage[] = [
  /* -------------------------------------------------------------------------- */
  /*                         SINGLE CATEGORY HIGHLIGHTS                         */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `'X' and 'Y' are placeholder texts. Obtain the elements from this utterance: "Based on the pie chart, the smallest section with any X was only Y percent"`,
  },
  {
    role: "assistant",
    content: `["data layer", "arc"]`,
  },
  {
    role: "user",
    content: `'X', 'Y', and 'Z' are placeholder texts. Obtain the elements from this utterance: "Based on the pie chart, nearly X percent of the respondents mentioned Y and Z"`,
  },
  {
    role: "assistant",
    content: `["data layer", "arc"]`,
  },
  {
    role: "user",
    content: `'X' and 'Y' are placeholder texts, Obtain the elements from this utterance: "The largest section in the pie chart consisted of X that mentioned Y"`,
  },
  {
    role: "assistant",
    content: `["data layer", "arc"]`,
  },
  {
    role: "user",
    content: `'X', 'Y', and 'Z' are placeholder texts. Obtain the elements from this utterance: "Nearly all the respondents in the pie chart mentioned X, Y or Z"`,
  },
  {
    role: "assistant",
    content: `["data layer", "arc"]`,
  },
  {
    role: "user",
    content: `'X' is a placeholder text. Obtain the elements from this utterance: "A big proportion of the pie chart represents X"`,
  },
  {
    role: "assistant",
    content: `["data layer", "arc"]`,
  },
  /* -------------------------------------------------------------------------- */
  /*                          MULTI CATEGORY HIGHLIGHTS                         */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `'X', 'Y', and 'Z' are placeholder texts. Obtain the elements from this utterance: "As shown in the pie chart, X percent of the data characterized the Y as Z"`,
  },
  {
    role: "assistant",
    content: `["data layer", "arc"]`,
  },
  {
    role: "user",
    content: `'X' and 'Y' are placeholder texts. Obtain the elements from this utterance: "Based on the pie chart, X is Y percent"`,
  },
  {
    role: "assistant",
    content: `["data layer", "arc"]`,
  },
  {
    role: "user",
    content: `'X', 'Y', and 'Z' are placeholder texts. Obtain the elements from this utterance: "Based on the pie chart, X takes up Y percent of Z"`,
  },
  {
    role: "assistant",
    content: `["data layer", "arc"]`,
  },
  {
    role: "user",
    content: `'X' and 'Y' are placeholder texts. Obtain the elements from this utterance: "In this pie chart, X is the least Y with Z percentage"`,
  },
  {
    role: "assistant",
    content: `["data layer", "arc"]`,
  },
  /* -------------------------------------------------------------------------- */
  /*                              COMMON HIGHLIGHTS                             */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `'X' is a placeholder text. Obtain the elements from this utterance: "The legend shows that this pie chart is made up of X categories"`,
  },
  {
    role: "assistant",
    content: `["base layer"]`,
  },
  {
    role: "user",
    content: `'X' and 'Y' are placeholder texts. Obtain the elements from this utterance: "This pie chart describes X number of Y"`,
  },
  {
    role: "assistant",
    content: `["base layer"]`,
  },
];
