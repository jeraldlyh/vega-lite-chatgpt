import { ChatCompletionRequestMessage } from "openai";

export const BAR_PROMPTS: ChatCompletionRequestMessage[] = [
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
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "Based on the bar chart, both Singapore and Switzerland led in both electricity output and usage."`,
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
    content: `Convert the following text into a VQL schema: "Based on the histogram, most meals were between 100 and 1000 calories."`,
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
    content: `Convert the following text into a VQL schema: "As shown in the histogram, some bars that at the 5% range include 5.05%, 5.11% and 5.15%."`,
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
];
