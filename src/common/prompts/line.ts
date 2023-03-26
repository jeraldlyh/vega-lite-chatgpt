import { ChatCompletionRequestMessage } from "openai";

export const LINE_CHART_PROMPTS: ChatCompletionRequestMessage[] = [
  /* -------------------------------------------------------------------------- */
  /*                         SINGLE CATEGORY HIGHLIGHTS                         */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `'X' and 'Y' are placeholder texts. Convert the following text into a VQL schema: "Let's take a look at the trends from X to Y in the line chart"`,
  },
  {
    role: "assistant",
    content: `
        {
            "VQL": {
                "highlight": "data range",
                "in": ["base layer"],
                "where": {
                    "OR": [
                        {"value": {"BETWEEN": ["X", "Y"]}}
                    ]
                }
            }
        }`,
  },
  {
    role: "user",
    content: `'X' and 'Y' are placeholder texts. Convert the following text into a VQL schema: "The line chart tells us that the figures has decreased from X to Y"`,
  },
  {
    role: "assistant",
    content: `
        {
            "VQL": {
                "highlight": "data range",
                "in": ["base layer"],
                "where": {
                    "OR": [
                        {"value": {"BETWEEN": ["X", "Y"]}}
                    ]
                }
            }
        }`,
  },
  {
    role: "user",
    content: `'X', 'Y', and 'Z' are placeholder texts. Convert the following text into a VQL schema: "We are able to tell from the line chart that X and Y has the highest Z"`,
  },
  {
    role: "assistant",
    content: `
        {
            "VQL": {
                "highlight": "visual element",
                "in": ["data layer", "line"],
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
    content: `'X', 'Y', and 'Z' are placeholder texts. Convert the following text into a VQL schema: "Based off the line chart, X has the highest growth while Y has the lowest growth"`,
  },
  {
    role: "assistant",
    content: `
    {
        "VQL": [
            {
                "highlight": "visual element",
                "in": ["data layer", "line"],
                "where": {
                    "OR": [
                        {"name": {"EQUAL": "X"}},
                        {"name": {"EQUAL": "Y"}}
                    ]
                }
            }
        ]
    }`,
  },
  /* -------------------------------------------------------------------------- */
  /*                         MULTI CATEGORY HIGHLIGHTS                          */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `'X', 'Y', and 'Z' are placeholder texts. Convert the following text into a VQL schema: "Based on the line chart, let's take a look at X with Y percent in the year Z"`,
  },
  {
    role: "assistant",
    content: `
    {
        "VQL": {
            "highlight": "visual element",
            "in": ["data layer", "line"],
            "where": {
                "AND": [
                    {"name": {"EQUAL": "X"}},
                    {"value": {"EQUAL": "Y"}},
                    {"year": {"EQUAL": "Z"}}
                ]
            }
        }
    }`,
  },
  {
    role: "user",
    content: `'A', 'B', 'C' and 'D' are placeholder texts. Convert the following text into a VQL schema: "As shown in the line chart, from year A to B, the figures for C showed a growth of D percent"`,
  },
  {
    role: "assistant",
    content: `
    {
        "VQL": [
            {
                "highlight": "data range",
                "in": ["base layer"],
                "where": {
                    "OR": [
                        {"year": {"BETWEEN": ["A", "B"]}}
                    ]
                }
            },
            {
                "highlight": "visual element",
                "in": ["data layer", "line"],
                "where": {
                    "OR": [
                        {"name": {"EQUAL": "C"}}
                    ]
                }
            }
        ]
    }`,
  },
  {
    role: "user",
    content: `'A', 'B', 'C', 'D', 'E' and 'F' are placeholder texts. Convert the following text into a VQL schema: "From year A to B, the figures for C, D, E and F increased in the line chart"`,
  },
  {
    role: "assistant",
    content: `
    {
        "VQL": [
            {
                "highlight": "data range",
                "in": ["base layer"],
                "where": {
                    "OR": [
                        {"year": {"BETWEEN": ["A", "B"]}}
                    ]
                }
            },
            {
                "highlight": "visual element",
                "in": ["data layer", "line"],
                "where": {
                    "OR": [
                        {"name": {"EQUAL": "C"}},
                        {"name": {"EQUAL": "D"}},
                        {"name": {"EQUAL": "E"}},
                        {"name": {"EQUAL": "F"}}
                    ]
                }
            }
        ]
    }`,
  },
  {
    role: "user",
    content: `'X', 'Y', and 'Z' are placeholder texts. Convert the following text into a VQL schema: "As seen in the line chart, X has increased from Y to Z"`,
  },
  {
    role: "assistant",
    content: `
    {
        "VQL": [
            {
                "highlight": "data range",
                "in": ["base layer"],
                "where": {
                    "OR": [
                        {"value": {"BETWEEN": ["Y", "Z"]}
                    ]
                }
            },
            {
                "highlight": "visual element",
                "in": ["data layer", "line"],
                "where": {
                    "OR": [
                        {"name": {"EQUAL": "X"}}
                    ]
                }
            }
        ]
    }`,
  },
  {
    role: "user",
    content: `'X', 'Y', and 'Z' are placeholder texts. Convert the following text into a VQL schema: "Based off the line chart, X and Y has the highest number of Z"`,
  },
  {
    role: "assistant",
    content: `
    {
        "VQL": [
            {
                "highlight": "visual element",
                "in": ["data layer", "line"],
                "where": {
                    "OR": [
                        {
                            "AND": [
                                {"name": {"EQUAL": "X"}},
                                {"value": {"EQUAL": "Z"}}
                            ]
                        },
                        {
                            "AND": [
                                {"name": {"EQUAL": "Y"}},
                                {"value": {"EQUAL": "Z"}}
                            ]
                        }
                    ]
                }
            }
        ]
    }`,
  },
  {
    role: "user",
    content: `'A', 'B', 'C', 'D' and 'E' are placeholder texts. Convert the following text into a VQL schema: "We are able to tell from the line chart that A and B has the highest C of D in year E"`,
  },
  {
    role: "assistant",
    content: `
    {
        "VQL": {
            "highlight": "visual element",
            "in": ["data layer", "rect"],
            "where": {
                "OR": [
                    {
                        "AND": [
                            {"name": {"EQUAL": "A"}},
                            {"value": {"EQUAL": "D"}},
                            {"year": {"EQUAL": "E"}}
                        ]
                    },
                    {
                        "AND": [
                            {"name": {"EQUAL": "B"}},
                            {"value": {"EQUAL": "D"}},
                            {"year": {"EQUAL": "E"}}
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
    content: `'X', 'Y', and 'Z' are placeholder texts. Convert the following text into a VQL schema: "The y-axis displays the X of Y in the line chart"`,
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
    content: `Convert the following text into a VQL schema: "The legend represents X in the line chart below"`,
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
