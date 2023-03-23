import { ChatCompletionRequestMessage } from "openai";

export const BAR_CHART_PROMPTS: ChatCompletionRequestMessage[] = [
  /* -------------------------------------------------------------------------- */
  /*                          COUNTRY RANGE HIGHLIGHTS                          */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "As shown in the bar chart, generation exceeded consumption in all the countries except Singapore"`,
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
                            {"type": {"EQUAL": "production"}},
                            {"country": {"EQUAL": "Singapore"}}
                        ]
                    },
                    {
                        "AND": [
                            {"type": {"EQUAL": "consumption"}},
                            {"country": {"EQUAL": "Singapore"}}
                        ]
                    }
                ]
            }
        }
    }`,
  },
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "Based on the bar chart, both Singapore and Switzerland are the leading countries"`,
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
                    {"country": {"EQUAL": "Singapore"}},
                    {"country": {"EQUAL": "Switzerland"}}
                ]
            }
        }
    }`,
  },
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "As shown in the bar chart, the largest electricity value is production in Singapore"`,
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
                    {"type": {"EQUAL": "production"}},
                    {"country": {"EQUAL": "Singapore"}}
                ]
            }
        }
    }`,
  },
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "As shown in the bar chart, the largest electricity value is production in Singapore"`,
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
                    {"type": {"EQUAL": "production"}},
                    {"country": {"EQUAL": "Singapore"}}
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
    content: `Convert the following text into a VQL schema: "Based on the histogram, most meals were between 100 and 1000 calories"`,
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
                    {"value": {"BETWEEN": ["500", "1500"]}}
                ]
            }
        }
    }`,
  },
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "As shown in the histogram, some bars that at the 5% range include 5.05%, 5.11% and 5.15%"`,
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
                    {"value": {"EQUAL": "5.05"}},
                    {"value": {"EQUAL": "5.11"}},
                    {"value": {"EQUAL": "5.15"}}
                ]
            }
        }
    }`,
  },
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "Based on the bar chart, from 2008 to 2012, Germany's growth ranged from 2% to 6%"`,
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
                    {"percentage": {"BETWEEN": ["2", "6"]}},
                    {"year": {"BETWEEN": ["2008", "2012"]}}
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
    content: `Convert the following text into a VQL schema: "Based on the bar chart, Singapore and Malaysia were the lowest producers of electricity"`,
  },
  // TODO: Clarify if conditions (i.e. type and country) should be merged in OR
  {
    role: "assistant",
    content: `
    {
        "VQL": {
            "highlight": "visual element",
            "in": ["data layer", "bar"],
            "where": {
                "AND": [
                    {
                        "OR": [
                            {"country": "Singapore"},
                            {"country": "Malaysia"}
                        ]
                    },
                    {
                        "type": {"EQUAL": "consumption"}
                    }
                ]
            }
        }
    }`,
  },
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "Based on the bar graph, the lowest values are 2 and 3"`,
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
                    {"value": {"EQUAL": "2"}},
                    {"value": {"EQUAL": "3"}}
                ]
            }
        }
    }`,
  },
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "Based on the bar chart, the top values are 400 and 900"`,
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
                    {"value": {"EQUAL": "400"}},
                    {"value": {"EQUAL": "900"}}
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
    content: `Convert the following text into a VQL schema: "The legend indicates that this bar chart has two categories"`,
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
    content: `Convert the following text into a VQL schema: "The countries are displayed along the y-axis"`,
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
