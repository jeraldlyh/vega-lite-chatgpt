import { ChatCompletionRequestMessage } from "openai";

export const HEATMAP_CHART_WHERE_PROMPTS: ChatCompletionRequestMessage[] = [
  {
    role: "user",
    content: `The utterance is: "People aged 30 plus are experiencing relatively low rates of infection"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {"age": {"EQUAL": "30 to 39"}},
            {"age": {"EQUAL": "40 to 49"}},
            {"age": {"EQUAL": "50 to 59"}},
            {"age": {"EQUAL": "60 to 69"}}
        ]
    }`,
  },
  {
    role: "user",
    content: `The utterance is: "Those of working age from 20 to 29 are being been hit quite badly"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {"age": {"EQUAL": "20 to 29"}},
        ]
    }`,
  },
  {
    role: "user",
    content: `The utterance is: "Those of working age from 20 to 59 suffered from this pandemic"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {"age": {"EQUAL": "20 to 29"}},
            {"age": {"EQUAL": "30 to 39"}},
            {"age": {"EQUAL": "40 to 49"}},
            {"age": {"EQUAL": "50 to 59"}},
        ]
    }`,
  },
  {
    role: "user",
    content: `The utterance is: "People aged 40 and above are affected too"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {"age": {"EQUAL": "40 to 49"}},
            {"age": {"EQUAL": "50 to 59"}},
            {"age": {"EQUAL": "60 to 69"}}
        ]
    }`,
  },
  {
    role: "user",
    content: `The utterance is: "Let's look at the cases in the week Aug 31 to Sep 06 to find out the root cause"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {"date": {"EQUAL": "31-Aug to 06-Sep"}}
        ]
    }`,
  },
  {
    role: "user",
    content: `The utterance is: "Let's look at the cases in the week 03 Aug to 09 Aug for age group between 20 to 29"`,
  },
  {
    role: "assistant",
    content: `{
        "AND": [
            {"date": {"EQUAL": "03-Aug to 09-Aug"}}
            {"age": {"EQUAL": "20 to 29"}},
        ]
    }`,
  },
  {
    role: "user",
    content: `The utterance is: "The highest number of cases in June was 12"`,
  },
  {
    role: "assistant",
    content: `{
        "AND": [
            {"date": {"EQUAL": "29-Jun to 05-Jul"}}
            {"cases": {"EQUAL": "12"}},
        ]
    }`,
  },
  {
    role: "user",
    content: `The utterance is: "Interestingly, the cases for aged 9 and below were generally below 10 cases"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {
                "AND": [
                    {"age": {"EQUAL": "5 to 9"}},
                    {"cases": {"LESS THAN": "10"}}
                ]
            },
            {
                "AND": [
                    {"age": {"EQUAL": "Under 5"}},
                    {"cases": {"LESS THAN": "10"}}
                ]
            }
        ]
    }`,
  },
  /* -------------------------------------------------------------------------- */
  /*                              COMMON HIGHLIGHTS                             */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `The utterance is: "The y-axis displays the age ranges"`,
  },
  {
    role: "assistant",
    content: `{}`,
  },
];
