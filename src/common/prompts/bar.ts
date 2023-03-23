import { ChatCompletionRequestMessage } from "openai";

export const BAR_CHART_PROMPTS: ChatCompletionRequestMessage[] = [
  /* -------------------------------------------------------------------------- */
  /*                          COUNTRY RANGE HIGHLIGHTS                          */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "As shown in the bar chart, A exceeded B in all the C except D"`,
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
    content: `Convert the following text into a VQL schema: "Based on the bar chart, both X and Y are the Z"`,
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
    content: `Convert the following text into a VQL schema: "As shown in the bar chart, the largest value is X in Y"`,
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
  /* -------------------------------------------------------------------------- */
  /*                             X RANGE HIGHLIGHTS                             */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "Based on the histogram, most X were between Y and Z"`,
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
    content: `Convert the following text into a VQL schema: "As shown in the histogram, some bars that at the A percent range include B percent, C percent and D percent"`,
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
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "As shown in the histogram, some bars such as A percent, B percent and C percent represents D"`,
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
                    {"value": {"EQUAL": "A"}},
                    {"value": {"EQUAL": "B"}},
                    {"value": {"EQUAL": "C"}}
                ]
            }
        }
    }`,
  },
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "Based on the bar chart, from A to B, C ranged from D percent to E percent"`,
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
                    {"value": {"BETWEEN": ["A", "B"]}}
                    {"value": {"BETWEEN": ["D", "E"]}},
                ]
            }
        }
    }`,
  },
  /* -------------------------------------------------------------------------- */
  /*                         SINGLE CATEGORY HIGHLIGHTS                         */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "Based on the bar chart, X and Y were the lowest Z"`,
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
                            "value": {"EQUAL": "X"},
                            "type": {"EQUAL": "Z"}
                        ]
                    },
                    {
                        "AND": [
                            "value": {"EQUAL": "Y"},
                            "type": {"EQUAL": "Z"}
                        ]
                    }
                ]
            }
        }
    }`,
  },
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "Based on the bar graph, the lowest values are X and Y"`,
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
    content: `Convert the following text into a VQL schema: "Based on the bar chart, the top values are X and Y"`,
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
  /* -------------------------------------------------------------------------- */
  /*                              COMMON HIGHLIGHTS                             */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "The legend indicates that this bar chart has X categories"`,
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
    content: `Convert the following text into a VQL schema: "The X are displayed along the y-axis"`,
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
