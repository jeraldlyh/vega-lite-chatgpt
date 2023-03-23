import { ChatCompletionRequestMessage } from "openai";

export const LINE_CHART_PROMPTS: ChatCompletionRequestMessage[] = [
  /* -------------------------------------------------------------------------- */
  /*                         SINGLE CATEGORY HIGHLIGHTS                         */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "Based on the line chart, let's take a look at the trends from X to Y"`,
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
                        {"name": {"BETWEEN": ["X", "Y"]}}
                    ]
                }
            }
        }`,
  },
  /* -------------------------------------------------------------------------- */
  /*                         MULTI CATEGORY HIGHLIGHTS                          */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "Based on the line chart, let's take a look at X with Y percent in Z"`,
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
                    {"percentage": {"EQUAL": "Y"}},
                    {"year": {"EQUAL": "Z"}}
                ]
            }
        }
    }`,
  },
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "Based on the line chart, from A to B, the figures for C showed a growth of D percent"`,
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
    content: `Convert the following text into a VQL schema: "Based on the line chart, from A to B, the figures for C, D, E and F increased"`,
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
  /* -------------------------------------------------------------------------- */
  /*                              COMMON HIGHLIGHTS                             */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "Based on the line chart, the y-axis displays the X of Y"`,
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
    content: `Convert the following text into a VQL schema: "Based on the line chart, the legend represents X"`,
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
