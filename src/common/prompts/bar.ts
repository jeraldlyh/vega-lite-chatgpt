import { ChatCompletionRequestMessage } from "openai";

export const BAR_CHART_PROMPTS: ChatCompletionRequestMessage[] = [
  /* -------------------------------------------------------------------------- */
  /*                         SINGLE CATEGORY HIGHLIGHTS                         */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `'X', 'Y', and 'Z' are placeholder texts. Convert the following text into a VQL schema: "Based on the bar graph, the lowest values are X and Y"`,
  },
  {
    role: "assistant",
    content: `
    {
        "VQL": {
            "highlight": "visual element",
            "in": ["data layer", "bar"],
            "where": {
                "OR": [
                    {"value": {"EQUAL": "X"}},
                    {"value": {"EQUAL": "Y"}}
                ]
            }
        }
    }`,
  },
  {
    role: "user",
    content: `'X' and 'Y' are placeholder texts. Convert the following text into a VQL schema: "Based on the bar chart, the top values are X and Y"`,
  },
  {
    role: "assistant",
    content: `
    {
        "VQL": {
            "highlight": "visual element",
            "in": ["data layer", "bar"],
            "where": {
                "OR": [
                    {"value": {"EQUAL": "X"}},
                    {"value": {"EQUAL": "Y"}}
                ]
            }
        }
    }`,
  },
  {
    role: "user",
    content: `'X' is a placeholder text. Convert the following text into a VQL schema: "As shown in the bar chart, X has shown good results across the years"`,
  },
  {
    role: "assistant",
    content: `
    {
        "VQL": {
            "highlight": "visual element",
            "in": ["data layer", "bar"],
            "where": {
                "OR": [
                    {"name": {"EQUAL": "X"}}
                ]
            }
        }
    }`,
  },
  {
    role: "user",
    content: `'X', 'Y', and 'Z' are placeholder texts. Convert the following text into a VQL schema: "Based on the bar chart, both X and Y are the Z"`,
  },
  {
    role: "assistant",
    content: `
    {
        "VQL": {
            "highlight": "visual element",
            "in": ["data layer", "bar"],
            "where": {
                "OR": [
                    {"name": {"EQUAL": "X"}},
                    {"name": {"EQUAL": "Y"}}
                ]
            }
        }
    }`,
  },
  {
    role: "user",
    content: `'X', 'Y', and 'Z' are placeholder texts. Convert the following text into a VQL schema: "Based on the bar chart, most X were between Y and Z"`,
  },
  {
    role: "assistant",
    content: `
    {
        "VQL": {
            "highlight": "visual element",
            "in": ["data layer", "bar"],
            "where": {
                "OR": [
                    {"value": {"BETWEEN": ["Y", "Z"]}}
                ]
            }
        }
    }`,
  },
  {
    role: "user",
    content: `'A', 'B', 'C', 'D' and 'E' are placeholder texts. Convert the following text into a VQL schema: "As shown in the bar chart, some bars that such as B, C and D represents E"`,
  },
  {
    role: "assistant",
    content: `
    {
        "VQL": {
            "highlight": "visual element",
            "in": ["data layer", "bar"],
            "where": {
                "OR": [
                    {"value": {"EQUAL": "B"}},
                    {"value": {"EQUAL": "C"}},
                    {"value": {"EQUAL": "D"}}
                ]
            }
        }
    }`,
  },
  /* -------------------------------------------------------------------------- */
  /*                        MULTIPLE CATEGORY HIGHLIGHTS                        */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `'A', 'B', 'C', 'D' and 'E' are placeholder texts. Convert the following text into a VQL schema: "Based on the bar chart, from year A to B, C ranged from D percent to E percent"`,
  },
  {
    role: "assistant",
    content: `
    {
        "VQL": {
            "highlight": "visual element",
            "in": ["data layer", "bar"],
            "where": {
                "AND": [
                    {"name": {"EQUAL": "C"}},
                    {"year": {"BETWEEN": ["A", "B"]}}
                    {"value": {"BETWEEN": ["D", "E"]}},
                ]
            }
        }
    }`,
  },
  {
    role: "user",
    content: `'X' and 'Y' are placeholder texts. Convert the following text into a VQL schema: "As shown in the bar chart, the largest value is X in Y"`,
  },
  {
    role: "assistant",
    content: `
    {
        "VQL": {
            "highlight": "visual element",
            "in": ["data layer", "bar"],
            "where": {
                "AND": [
                    {"type": {"EQUAL": "X"}},
                    {"name": {"EQUAL": "Y"}}
                ]
            }
        }
    }`,
  },
  {
    role: "user",
    content: `'A', 'B', 'C' and 'D' are placeholder texts. Convert the following text into a VQL schema: "As shown in the bar chart, A exceeded B in all the C except D"`,
  },
  {
    role: "assistant",
    content: `
    {
        "VQL": {
            "highlight": "visual element",
            "in": ["data layer", "bar"],
            "where": {
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
            }
        }
    }`,
  },
  {
    role: "user",
    content: `'X', 'Y', and 'Z' are placeholder texts. Convert the following text into a VQL schema: "Based on the bar chart, X and Y were the lowest Z"`,
  },
  {
    role: "assistant",
    content: `
    {
        "VQL": {
            "highlight": "visual element",
            "in": ["data layer", "bar"],
            "where": {
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
            }
        }
    }`,
  },
  {
    role: "user",
    content: `'A', 'B', 'C' and 'D' are placeholder texts. Convert the following text into a VQL schema: "The bar chart shows that A has a number of B which have C less than D"`,
  },
  {
    role: "assistant",
    content: `
    {
        "VQL": {
            "highlight": "visual element",
            "in": ["data layer", "bar"],
            "where": {
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
            }
        }
    }`,
  },
  {
    role: "user",
    content: `'X' and 'Y' are placeholder texts. Convert the following text into a VQL schema: "The bar chart shows that X has the lowest number of Y"`,
  },
  {
    role: "assistant",
    content: `
    {
        "VQL": {
            "highlight": "visual element",
            "in": ["data layer", "bar"],
            "where": {
                "OR": [
                    {"name": {"EQUAL": "X"}}
                ]
            }
        }
    }`,
  },
  {
    role: "user",
    content: `'X', 'Y', 'Z' are placeholder texts. Convert the following text into a VQL schema: "The bar chart shows that X has the lowest number of Y while Z has the lowest"`,
  },
  {
    role: "assistant",
    content: `
    {
        "VQL": {
            "highlight": "visual element",
            "in": ["data layer", "bar"],
            "where": {
                "OR": [
                    {"name": {"EQUAL": "X"}},
                    {"name": {"EQUAL": "Z"}}
                ]
            }
        }
    }`,
  },
  {
    role: "user",
    content: `'A', 'B', 'C', 'D' and 'E' are placeholder texts. Convert the following text into a VQL schema: "From the bar chart, A is the most B as it has the highest number of C while D is the least B with E"`,
  },
  {
    role: "assistant",
    content: `
    {
        "VQL": {
            "highlight": "visual element",
            "in": ["data layer", "bar"],
            "where": {
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
            }
        }
    }`,
  },
  {
    role: "user",
    content: `'A', 'B', 'C' and 'D' are placeholder texts. Convert the following text into a VQL schema: "From the bar chart, A has B which is C more than D"`,
  },
  {
    role: "assistant",
    content: `
    {
        "VQL": {
            "highlight": "visual element",
            "in": ["data layer", "bar"],
            "where": {
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
            }
        }
    }`,
  },
  /* -------------------------------------------------------------------------- */
  /*                              COMMON HIGHLIGHTS                             */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `'X' is a placeholder text. Convert the following text into a VQL schema: "The legend indicates that this bar chart has X categories"`,
  },
  {
    role: "assistant",
    content: `
    {
        "VQL": {
            "highlight": "legend",
            "in": ["base layer"],
            "where": {}
        }
    }`,
  },
  {
    role: "user",
    content: `'X' is a placeholder text. Convert the following text into a VQL schema: "The X are displayed along the y-axis in the bar chart"`,
  },
  {
    role: "assistant",
    content: `
    {
        "VQL": {
            "highlight": "y-axis",
            "in": ["base layer"],
            "where": {}
        }
    }`,
  },
  {
    role: "user",
    content: `'X' is a placeholder text. Convert the following text into a VQL schema: "There's about 3 categories of X in this bar chart"`,
  },
  {
    role: "assistant",
    content: `
    {
        "VQL": {
            "highlight": "legend",
            "in": ["base layer"],
            "where": {}
        }
    }`,
  },
];
