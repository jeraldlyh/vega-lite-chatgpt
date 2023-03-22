import { ChatCompletionRequestMessage } from "openai";

export const LINE_CHART_PROMPTS: ChatCompletionRequestMessage[] = [
  /* -------------------------------------------------------------------------- */
  /*                         SINGLE CATEGORY HIGHLIGHTS                         */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "Based on the line chart, let's take a look at the trends from 2001 to 2005."`,
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
                        {"year": {"BETWEEN": ["2001", "2005"]}}
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
    content: `Convert the following text into a VQL schema: "Based on the line chart, let's take a look at Singapore with 23% GDP in 2004."`,
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
                    {"name": {"EQUAL": "Singapore"}},
                    {"percentage": {"EQUAL": "23"}},
                    {"year": {"EQUAL": "2004"}}
                ]
            }
        }
    }`,
  },
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "Based on the line chart, from 2005 to 2006, the figures for Singapore showed a considerable growth of 20%."`,
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
                        {"year": {"BETWEEN": ["2005", "2006"]}}
                    ]
                }
            },
            {
                "highlight": "visual element",
                "in": ["data layer", "line"],
                "where": {
                    "OR": [
                        {"name": {"EQUAL": "Singapore"}}
                    ]
                }
            }
        ]
    }`,
  },
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "Based on the line chart, from 2010 to 2015, the figures for Singapore, Malaysia, France and Switzerland grew exponentially."`,
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
                        {"year": {"BETWEEN": ["2010", "2015"]}}
                    ]
                }
            },
            {
                "highlight": "visual element",
                "in": ["data layer", "line"],
                "where": {
                    "OR": [
                        {"name": {"EQUAL": "Singapore"}},
                        {"name": {"EQUAL": "Malaysia"}},
                        {"name": {"EQUAL": "France"}},
                        {"name": {"EQUAL": "Switzerland"}}
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
    content: `Convert the following text into a VQL schema: "The y-axis displays the percentage of GDP growth."`,
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
];
