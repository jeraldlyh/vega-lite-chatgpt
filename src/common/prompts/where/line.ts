import { ChatCompletionRequestMessage } from "openai";

export const LINE_CHART_WHERE_PROMPTS: ChatCompletionRequestMessage[] = [
  {
    role: "user",
    content: `The utterance is: "From 2000 to 2012, the figures for Germany grew about 8 percent"`,
  },
  {
    role: "assistant",
    content: `{
        "AND": [
            {"name": {"EQUAL": "Germany"}},
            {"date": {"BETWEEN": ["2000", "2012"]}}
        ]
    }`,
  },
  {
    role: "user",
    content: `The utterance is: "The values for Belgium were relatively consistent other than the year 1999"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {"name": {"EQUAL": "Belgium"}}
        ]
    }`,
  },
  {
    role: "user",
    content: `The utterance is: "From 2000 to 2008, the figures for Belgium, France, Italy and Germany just went up gradually"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {
                "AND": [
                    {"date": {"BETWEEN": ["2000", "2008"]}},
                    {"name": {"EQUAL": "Belgium"}}
                ]
            },
            {
                "AND": [
                    {"date": {"BETWEEN": ["2000", "2008"]}},
                    {"name": {"EQUAL": "France"}}
                ]
            },
            {
                "AND": [
                    {"date": {"BETWEEN": ["2000", "2008"]}},
                    {"name": {"EQUAL": "Italy"}}
                ]
            },
            {
                "AND": [
                    {"date": {"BETWEEN": ["2000", "2008"]}},
                    {"name": {"EQUAL": "Germany"}}
                ]
            }
        ]
    }`,
  },
  {
    role: "user",
    content: `The utterance is: "From 2000 to 2012, let's look at the range from 20% to 30%"`,
  },
  {
    role: "assistant",
    content: `{
        "AND": [
            {"date": {"BETWEEN": ["2000", "2012"]}},
            {"percentage": {"BETWEEN": ["20", "30"]}}
        ]
    }`,
  },
  {
    role: "user",
    content: `The utterance is: "Germany and Italy had relatively closer numbers of about 35% and 33% respectively in 2008"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {
                "AND": [
                    {"name": {"EQUAL": "Germany"}},
                    {"date": {"EQUAL": "2008"}},
                    {"percentage": {"EQUAL": "35"}}
                ]
            },
            {
                "AND": [
                    {"name": {"EQUAL": "Italy"}},
                    {"date": {"EQUAL": "2008"}},
                    {"percentage": {"EQUAL": "33"}}
                ]
            }
        ]
    }`,
  },
  {
    role: "user",
    content: `The utterance is: "Now, let's look at the trends from 2000 to 2004"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {"date": {"BETWEEN": ["2008", "2012"]}}
        ]
    }`,
  },
  {
    role: "user",
    content: `The utterance is: "Let's look at Italy in 2000"`,
  },
  {
    role: "assistant",
    content: `{
        "AND": [
            {"name": {"EQUAL": "Italy"}},
            {"date": {"EQUAL": "2000"}}
        ]
    }`,
  },
  /* -------------------------------------------------------------------------- */
  /*                              COMMON HIGHLIGHTS                             */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `The utterance is: "The y-axis displays the number of male in the country"`,
  },
  {
    role: "assistant",
    content: `{}`,
  },
  {
    role: "user",
    content: `The utterance is: "The legend shows 5 countries"`,
  },
  {
    role: "assistant",
    content: `{}`,
  },
];
