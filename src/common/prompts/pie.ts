import { ChatCompletionRequestMessage } from "openai";

export const PIE_CHART_PROMPTS: ChatCompletionRequestMessage[] = [
  /* -------------------------------------------------------------------------- */
  /*                         SINGLE CATEGORY HIGHLIGHTS                         */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "Based on the pie chart, the smallest section with any X was only Y percent"`,
  },
  {
    role: "assistant",
    content: `
    {
        "VQL": {
            "highlight": "visual element",
            "in": ["data layer", "arc"],
            "where": {
                "OR": [
                    {"percentage": {"EQUAL": "Y"}},
                ]
            }
        }
    }`,
  },
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "Based on the pie chart, nearly X percent of the respondents mentioned Y, Z and Z"`,
  },
  {
    role: "assistant",
    content: `
    {
        "VQL": {
            "highlight": "visual element",
            "in": ["data layer", "arc"],
            "where": {
                "OR": [
                    {"name": {"EQUAL": "Y"}},
                    {"name": {"EQUAL": "Z"}}
                ]
            }
        }
    }`,
  },
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "Based on the pie chart, the largest section consisted of X experiencing Y"`,
  },
  {
    role: "assistant",
    content: `
    {
        "VQL": {
            "highlight": "visual element",
            "in": ["data layer", "arc"],
            "where": {
                "OR": [
                    {"name": {"EQUAL": "Y"}},
                ]
            }
        }
    }`,
  },
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "Based on the pie chart, nearly all the respondents mentioned X, Y or Z"`,
  },
  {
    role: "assistant",
    content: `
    {
        "VQL": {
            "highlight": "visual element",
            "in": ["data layer", "arc"],
            "where": {
                "OR": [
                    {"name": {"EQUAL": "X"}},
                    {"name": {"EQUAL": "Y"}},
                    {"name": {"EQUAL": "Z"}},
                ]
            }
        }
    }`,
  },
  /* -------------------------------------------------------------------------- */
  /*                          MULTI CATEGORY HIGHLIGHTS                         */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "Based on the pie chart, X percent of the respondents characterized the Y as Z"`,
  },
  {
    role: "assistant",
    content: `
    {
        "VQL": {
            "highlight": "visual element",
            "in": ["data layer", "arc"],
            "where": {
                "AND": [
                    {"name": {"EQUAL": "Z"}},
                    {"percentage": {"EQUAL": "X"}},
                ]
            }
        }
    }`,
  },
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "Based on the pie chart, X is Y percent"`,
  },
  {
    role: "assistant",
    content: `
    {
        "VQL": {
            "highlight": "visual element",
            "in": ["data layer", "arc"],
            "where": {
                "AND": [
                    {"name": {"EQUAL": "X"}},
                    {"percentage": {"EQUAL": "Y"}},
                ]
            }
        }
    }`,
  },
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "Based on the pie chart, X takes up Y percent of Z"`,
  },
  {
    role: "assistant",
    content: `
    {
        "VQL": {
            "highlight": "visual element",
            "in": ["data layer", "arc"],
            "where": {
                "AND": [
                    {"name": {"EQUAL": "X"}},
                    {"percentage": {"EQUAL": "Y"}},
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
    content: `Convert the following text into a VQL schema: "The legend shows that this pie chart is made up of X categories"`,
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
