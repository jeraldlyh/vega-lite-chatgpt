import { ChatCompletionRequestMessage } from "openai";

export const PIE_CHART_WHERE_PROMPTS: ChatCompletionRequestMessage[] = [
  /* -------------------------------------------------------------------------- */
  /*                         SINGLE CATEGORY HIGHLIGHTS                         */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `'X' and 'Y' are placeholder texts. Obtain the predicate(s) from this utterance: "Based on the pie chart, the smallest section with any X was only Y percent"`,
  },
  {
    role: "assistant",
    content: `{
                "OR": [
                    {"value": {"EQUAL": "Y"}}
                ]
            }`,
  },
  {
    role: "user",
    content: `'X', 'Y', and 'Z' are placeholder texts. Obtain the predicate(s) from this utterance: "Based on the pie chart, nearly X percent of the respondents mentioned Y and Z"`,
  },
  {
    role: "assistant",
    content: `{
                "OR": [
                    {"name": {"EQUAL": "Y"}},
                    {"name": {"EQUAL": "Z"}}
                ]
            }`,
  },
  {
    role: "user",
    content: `'X' and 'Y' are placeholder texts, Obtain the predicate(s) from this utterance: "The largest section in the pie chart consisted of X that mentioned Y"`,
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
    content: `'X', 'Y', and 'Z' are placeholder texts. Obtain the predicate(s) from this utterance: "Nearly all the respondents in the pie chart mentioned X, Y or Z"`,
  },
  {
    role: "assistant",
    content: `{
                "OR": [
                    {"name": {"EQUAL": "X"}},
                    {"name": {"EQUAL": "Y"}},
                    {"name": {"EQUAL": "Z"}}
                ]
            }`,
  },
  {
    role: "user",
    content: `'X' is a placeholder text. Obtain the predicate(s) from this utterance: "A big proportion of the pie chart represents X"`,
  },
  {
    role: "assistant",
    content: `{
                "OR": [
                    {"name": {"EQUAL": "X"}},
                    {"name": {"EQUAL": "Y"}},
                    {"name": {"EQUAL": "Z"}}
                ]
            }`,
  },
  /* -------------------------------------------------------------------------- */
  /*                          MULTI CATEGORY HIGHLIGHTS                         */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `'X', 'Y', and 'Z' are placeholder texts. Obtain the predicate(s) from this utterance: "As shown in the pie chart, X percent of the data characterized the Y as Z"`,
  },
  {
    role: "assistant",
    content: `{
                "AND": [
                    {"name": {"EQUAL": "Z"}},
                    {"value": {"EQUAL": "X"}}
                ]
            }`,
  },
  {
    role: "user",
    content: `'X' and 'Y' are placeholder texts. Obtain the predicate(s) from this utterance: "Judging from the pie chart, X percent of the data are considered as Y"`,
  },
  {
    role: "assistant",
    content: `{
                "AND": [
                    {"name": {"EQUAL": "Z"}},
                    {"value": {"EQUAL": "Y"}}
                ]
            }`,
  },
  {
    role: "user",
    content: `'X' and 'Y' are placeholder texts. Obtain the predicate(s) from this utterance: "Based on the pie chart, X is Y percent"`,
  },
  {
    role: "assistant",
    content: `{
                "AND": [
                    {"name": {"EQUAL": "X"}},
                    {"value": {"EQUAL": "Y"}}
                ]
            }`,
  },
  {
    role: "user",
    content: `'X', 'Y', and 'Z' are placeholder texts. Obtain the predicate(s) from this utterance: "Based on the pie chart, X takes up Y percent of Z"`,
  },
  {
    role: "assistant",
    content: `{
                "AND": [
                    {"name": {"EQUAL": "X"}},
                    {"value": {"EQUAL": "Y"}}
                ]
            }`,
  },
  {
    role: "user",
    content: `'X' and 'Y' are placeholder texts. Obtain the predicate(s) from this utterance: "In this pie chart, X is the least Y with Z percentage"`,
  },
  {
    role: "assistant",
    content: `{
                "AND": [
                    {"name": {"EQUAL": "X"}},
                    {"value": {"EQUAL": "Y"}}
                ]
            }`,
  },
  {
    role: "user",
    content: `'A', 'B', 'C' and 'D' are placeholder texts. Infer the type of element from this utterance: "As shown in the pie chart, A percent of the respondents mentioned B, C and D"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {"value": {"EQUAL": "C"}},
            {"value": {"EQUAL": "D"}},
            {"value": {"EQUAL": "E"}}
        ]
    }`,
  },
  /* -------------------------------------------------------------------------- */
  /*                              COMMON HIGHLIGHTS                             */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `'X' is a placeholder text. Obtain the predicate(s) from this utterance: "The legend shows that this pie chart is made up of X categories"`,
  },
  {
    role: "assistant",
    content: `{}`,
  },
  {
    role: "user",
    content: `'X' and 'Y' are placeholder texts. Obtain the predicate(s) from this utterance: "This pie chart describes X number of Y"`,
  },
  {
    role: "assistant",
    content: `{}`,
  },
];
