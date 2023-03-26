import { ChatCompletionRequestMessage } from "openai";

export const PIE_CHART_PROMPTS: ChatCompletionRequestMessage[] = [
  /* -------------------------------------------------------------------------- */
  /*                         SINGLE CATEGORY HIGHLIGHTS                         */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `'X' and 'Y' are placeholder texts. Convert the following text into a VQL schema: "Based on the pie chart, the smallest section with any X was only Y percent"`,
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
                    {"value": {"EQUAL": "Y"}}
                ]
            }
        }
    }`,
  },
  {
    role: "user",
    content: `'X', 'Y', and 'Z' are placeholder texts. Convert the following text into a VQL schema: "Based on the pie chart, nearly X percent of the respondents mentioned Y and Z"`,
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
    content: `'X' and 'Y' are placeholder texts, Convert the following text into a VQL schema: "The largest section in the pie chart consisted of X that mentioned Y"`,
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
                    {"name": {"EQUAL": "X"}}
                ]
            }
        }
    }`,
  },
  {
    role: "user",
    content: `'X', 'Y', and 'Z' are placeholder texts. Convert the following text into a VQL schema: "Nearly all the respondents in the pie chart mentioned X, Y or Z"`,
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
                    {"name": {"EQUAL": "Z"}}
                ]
            }
        }
    }`,
  },
  {
    role: "user",
    content: `'X' is a placeholder text. Convert the following text into a VQL schema: "A big proportion of the pie chart represents X"`,
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
                    {"name": {"EQUAL": "Z"}}
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
    content: `'X', 'Y', and 'Z' are placeholder texts. Convert the following text into a VQL schema: "As shown in the pie chart, X percent of the data characterized the Y as Z"`,
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
                    {"value": {"EQUAL": "X"}}
                ]
            }
        }
    }`,
  },
  {
    role: "user",
    content: `'X' and 'Y' are placeholder texts. Convert the following text into a VQL schema: "Based on the pie chart, X is Y percent"`,
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
                    {"value": {"EQUAL": "Y"}}
                ]
            }
        }
    }`,
  },
  {
    role: "user",
    content: `'X', 'Y', and 'Z' are placeholder texts. Convert the following text into a VQL schema: "Based on the pie chart, X takes up Y percent of Z"`,
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
                    {"value": {"EQUAL": "Y"}}
                ]
            }
        }
    }`,
  },
  {
    role: "user",
    content: `'X' and 'Y' are placeholder texts. Convert the following text into a VQL schema: "In this pie chart, X is the least Y with Z percentage"`,
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
    content: `'X' is a placeholder text. Convert the following text into a VQL schema: "The legend shows that this pie chart is made up of X categories"`,
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
    content: `'X' and 'Y' are placeholder texts. Convert the following text into a VQL schema: "This pie chart describes X number of Y"`,
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
