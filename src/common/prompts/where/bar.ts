import { ChatCompletionRequestMessage } from "openai";

export const BAR_CHART_WHERE_PROMPTS: ChatCompletionRequestMessage[] = [
  /* -------------------------------------------------------------------------- */
  /*                         SINGLE CATEGORY HIGHLIGHTS                         */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `'X', 'Y', and 'Z' are placeholder texts. Obtain the predicate(s) from this utterance: "Based on the bar graph, the lowest values are X and Y"`,
  },
  {
    role: "assistant",
    content: `{
                "OR": [
                    {"value": {"EQUAL": "X"}},
                    {"value": {"EQUAL": "Y"}}
                ]
            }`,
  },
  {
    role: "user",
    content: `'X' and 'Y' are placeholder texts. Obtain the predicate(s) from this utterance: "Based on the bar chart, the top values are X and Y"`,
  },
  {
    role: "assistant",
    content: `{
                "OR": [
                    {"value": {"EQUAL": "X"}},
                    {"value": {"EQUAL": "Y"}}
                ]
            }`,
  },
  {
    role: "user",
    content: `'X' is a placeholder text. Obtain the predicate(s) from this utterance: "As shown in the bar chart, X has shown good results across the years"`,
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
    content: `'X', 'Y', and 'Z' are placeholder texts. Obtain the predicate(s) from this utterance: "Based on the bar chart, both X and Y are the Z"`,
  },
  {
    role: "assistant",
    content: `{
                "OR": [
                    {"name": {"EQUAL": "X"}},
                    {"name": {"EQUAL": "Y"}}
                ]
            }`,
  },
  {
    role: "user",
    content: `'X', 'Y', and 'Z' are placeholder texts. Obtain the predicate(s) from this utterance: "Based on the bar chart, most X were between Y and Z"`,
  },
  {
    role: "assistant",
    content: `{
                "OR": [
                    {"value": {"BETWEEN": ["Y", "Z"]}}
                ]
            }`,
  },
  {
    role: "user",
    content: `'A', 'B', 'C', 'D' and 'E' are placeholder texts. Obtain the predicate(s) from this utterance: "As shown in the bar chart, some bars that such as B, C and D represents E"`,
  },
  {
    role: "assistant",
    content: `{
                "OR": [
                    {"value": {"EQUAL": "B"}},
                    {"value": {"EQUAL": "C"}},
                    {"value": {"EQUAL": "D"}}
                ]
            }`,
  },
  /* -------------------------------------------------------------------------- */
  /*                        MULTIPLE CATEGORY HIGHLIGHTS                        */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `'A', 'B', 'C', 'D' and 'E' are placeholder texts. Obtain the predicate(s) from this utterance: "Based on the bar chart, from year A to B, C ranged from D percent to E percent"`,
  },
  {
    role: "assistant",
    content: `{
                "AND": [
                    {"name": {"EQUAL": "C"}},
                    {"year": {"BETWEEN": ["A", "B"]}}
                    {"value": {"BETWEEN": ["D", "E"]}},
                ]
            }`,
  },
  {
    role: "user",
    content: `'X' and 'Y' are placeholder texts. Obtain the predicate(s) from this utterance: "As shown in the bar chart, the largest value is X in Y"`,
  },
  {
    role: "assistant",
    content: `{
                "AND": [
                    {"type": {"EQUAL": "X"}},
                    {"name": {"EQUAL": "Y"}}
                ]
            }`,
  },
  {
    role: "user",
    content: `'A', 'B', 'C' and 'D' are placeholder texts. Obtain the predicate(s) from this utterance: "As shown in the bar chart, A exceeded B in all the C except D"`,
  },
  {
    role: "assistant",
    content: `{
                "OR": [
                    {
                        "AND": [
                            {"type": {"EQUAL": "A"}},
                            {"name": {"EQUAL": "D"}}
                        ]
                    },
                    {
                        "AND": [
                            {"type": {"EQUAL": "B"}},
                            {"name": {"EQUAL": "D"}}
                        ]
                    }
                ]
            }`,
  },
  {
    role: "user",
    content: `'X', 'Y', and 'Z' are placeholder texts. Obtain the predicate(s) from this utterance: "Based on the bar chart, X and Y were the lowest Z"`,
  },
  {
    role: "assistant",
    content: `{
                "OR": [
                    {
                        "AND": [
                            {"value": {"EQUAL": "X"}},
                            {"type": {"EQUAL": "Z"}}
                        ]
                    },
                    {
                        "AND": [
                            {"value": {"EQUAL": "Y"}},
                            {"type": {"EQUAL": "Z"}}
                        ]
                    }
                ]
            }`,
  },
  {
    role: "user",
    content: `'A', 'B', 'C' and 'D' are placeholder texts. Obtain the predicate(s) from this utterance: "The bar chart shows that A has a number of B which have C less than D"`,
  },
  {
    role: "assistant",
    content: `{
                "OR": [
                    {
                        "AND": [
                            {"name": {"EQUAL": "B"}},
                            {"value": {"EQUAL": "A"}}
                        ]
                    },
                    {
                        "AND": [
                            {"name": {"EQUAL": "D"}},
                            {"value": {"EQUAL": "A + C"}}
                        ]
                    }
                ]
            }`,
  },
  {
    role: "user",
    content: `'X' and 'Y' are placeholder texts. Obtain the predicate(s) from this utterance: "The bar chart shows that X has the lowest number of Y"`,
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
    content: `'X', 'Y', 'Z' are placeholder texts. Obtain the predicate(s) from this utterance: "The bar chart shows that X has the lowest number of Y while Z has the lowest"`,
  },
  {
    role: "assistant",
    content: `{
                "OR": [
                    {"name": {"EQUAL": "X"}},
                    {"name": {"EQUAL": "Z"}}
                ]
            }`,
  },
  {
    role: "user",
    content: `'A', 'B', 'C', 'D' and 'E' are placeholder texts. Obtain the predicate(s) from this utterance: "From the bar chart, A is the most B as it has the highest number of C while D is the least B with E"`,
  },
  {
    role: "assistant",
    content: `{
                "OR": [
                    {
                        "AND": [
                            {"name": {"EQUAL": "A"}},
                            {"value": {"EQUAL": "C"}}
                        },
                    ]
                    {
                        "AND": [
                            {"name": {"EQUAL": "D"}}
                            {"value": {"EQUAL": "E"}}
                        ]
                    }
                ]
            }`,
  },
  {
    role: "user",
    content: `'A', 'B', 'C' and 'D' are placeholder texts. Obtain the predicate(s) from this utterance: "From the bar chart, A has B which is C more than D"`,
  },
  {
    role: "assistant",
    content: `{
                "OR": [
                    {
                        "AND": [
                            {"name": {"EQUAL": "A"}},
                            {"value": {"EQUAL": "B"}}
                        },
                    ]
                    {
                        "AND": [
                            {"name": {"EQUAL": "D"}}
                            {"value": {"EQUAL": "B + C"}}
                        ]
                    }
                ]
            }`,
  },
  /* -------------------------------------------------------------------------- */
  /*                              COMMON HIGHLIGHTS                             */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `'X' is a placeholder text. Obtain the predicate(s) from this utterance: "The legend indicates that this bar chart has X categories"`,
  },
  {
    role: "assistant",
    content: `{}`,
  },
  {
    role: "user",
    content: `'X' is a placeholder text. Obtain the predicate(s) from this utterance: "The X are displayed along the y-axis in the bar chart"`,
  },
  {
    role: "assistant",
    content: `{}`,
  },
  {
    role: "user",
    content: `'X' is a placeholder text. Obtain the predicate(s) from this utterance: "There's about 3 categories of X in this bar chart"`,
  },
  {
    role: "assistant",
    content: `{}`,
  },
];
