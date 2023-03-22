import { ChatCompletionRequestMessage } from "openai";

export const PIE_CHART_PROMPTS: ChatCompletionRequestMessage[] = [
  /* -------------------------------------------------------------------------- */
  /*                         SINGLE CATEGORY HIGHLIGHTS                         */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "Based on the pie chart, the smallest section with any disruption was only 8%"`,
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
                    {"percentage": {"EQUAL": "8"}},
                ]
            }
        }
    }`,
  },
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "Based on the pie chart, nearly 90% of the respondents said they suffered massive or moderate disruptions to their source, supplies and ability to conduct business operations"`,
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
                    {"name": {"EQUAL": "massive"}},
                    {"name": {"EQUAL": "moderate"}}
                ]
            }
        }
    }`,
  },
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "Based on the pie chart, the largest section consisted of businesses experiencing minor disruption"`,
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
                    {"name": {"EQUAL": "minor"}},
                ]
            }
        }
    }`,
  },
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "Based on the pie chart, nearly all the respondents mentioned that they suffered some sort of pain in their lives, be it minor, moderate or extreme pain"`,
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
                    {"name": {"EQUAL": "minor"}},
                    {"name": {"EQUAL": "moderate"}},
                    {"name": {"EQUAL": "extreme"}},
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
    content: `Convert the following text into a VQL schema: "Based on the pie chart, 5% of the respondents characterized the pain as extreme"`,
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
                    {"name": {"EQUAL": "minor"}},
                    {"percentage": {"EQUAL": "5"}},
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
    content: `Convert the following text into a VQL schema: "The legend shows that this pie chart is made up of 3 categories"`,
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
