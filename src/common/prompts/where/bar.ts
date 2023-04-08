import { ChatCompletionRequestMessage } from "openai";
import data from "../../data/bar.json";

export const BAR_CHART_WHERE_PROMPTS: ChatCompletionRequestMessage[] = [
  {
    role: "user",
    content: `This is the dataset used for the bar graph: ${data}. Infer the predicate(s) from this utterance: "The lowest values are 449.5 and 455.8"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {"electricity": {"EQUAL": "449.5"}},
            {"electricity": {"EQUAL": "455.8"}}
        ]
    }`,
  },
  {
    role: "user",
    content: `This is the dataset used for the bar graph: ${data}. Infer the predicate(s) from this utterance: "The top values are 5398 and 5322"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {"electricity": {"EQUAL": "5398"}},
            {"electricity": {"EQUAL": "5322"}}
        ]
    }`,
  },
  {
    role: "user",
    content: `This is the dataset used for the bar graph: ${data}. Infer the predicate(s) from this utterance: "China has shown good results across the years"`,
  },
  {
    role: "assistant",
    content: `{
        "AND": [
            {"country": {"EQUAL": "China"}},
            {"type": {"EQUAL": "production"}}
        ]
    }`,
  },
  {
    role: "user",
    content: `This is the dataset used for the bar graph: ${data}. Infer the predicate(s) from this utterance: "Production in all the countries exceeded consumption except Germany"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {
                "AND": [
                    {"country": {"EQUAL": "Germany"}},
                    {"type": {"EQUAL": "production"}}
                ]
            },
            {
                "AND": [
                    {"country": {"EQUAL": "Germany"}},
                    {"type": {"EQUAL": "consumption"}}
                ]
            }
        ]
    }`,
  },
  {
    role: "user",
    content: `This is the dataset used for the bar graph: ${data}. Infer the predicate(s) from this utterance: "Both China and US led in production"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {
                "AND": [
                    {"country": {"EQUAL": "China"}},
                    {"type": {"EQUAL": "production"}}
                ]
            },
            {
                "AND": [
                    {"country": {"EQUAL": "US"}},
                    {"type": {"EQUAL": "production"}}
                ]
            }
        ]
    }`,
  },
  {
    role: "user",
    content: `This is the dataset used for the bar graph: ${data}. Infer the predicate(s) from this utterance: "Most of the countries produced between 485 to 1057 electricity"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {"electricity": {"BETWEEN": ["485", "1057"]}}
        ]
    }`,
  },
  {
    role: "user",
    content: `This is the dataset used for the bar graph: ${data}. Infer the predicate(s) from this utterance: "The production for all the countries ranges between 495.1 to 5398"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {"electricity": {"BETWEEN": ["495.1", "5398"]}}
        ]
    }`,
  },
  {
    role: "user",
    content: `This is the dataset used for the bar graph: ${data}. Infer the predicate(s) from this utterance: "The largest production and consumption is China"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {"country": {"EQUAL": "China"}}
        ]
    }`,
  },
  {
    role: "user",
    content: `This is the dataset used for the bar graph: ${data}. Infer the predicate(s) from this utterance: "India has the highest excess in electrity other than China"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {"country": {"EQUAL": "India"}}
        ]
    }`,
  },
  {
    role: "user",
    content: `This is the dataset used for the bar graph: ${data}. Infer the predicate(s) from this utterance: "There was only one country which had both readings that were more than 4500"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {"electricity": {"BETWEEN": ["4500", "5398"]}}
        ]
    }`,
  },
  {
    role: "user",
    content: `This is the dataset used for the bar graph: ${data}. Infer the predicate(s) from this utterance: "Most countries had electricity values less than 1000"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {"electricity": {"BETWEEN": ["0", "1000"]}}
        ]
    }`,
  },
  {
    role: "user",
    content: `This is the dataset used for the bar graph: ${data}. Infer the predicate(s) from this utterance: "Overall, China and the US led in both electricity output and use"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {
                "AND": [
                    {"country": {"EQUAL": "China"}},
                    {"type": {"EQUAL": "production"}}
                ]
            },
            {
                "AND": [
                    {"country": {"EQUAL": "China"}},
                    {"type": {"EQUAL": "consumption"}}
                ]
            },
            {
                "AND": [
                    {"country": {"EQUAL": "US"}},
                    {"type": {"EQUAL": "production"}}
                ]
            },
            {
                "AND": [
                    {"country": {"EQUAL": "US"}},
                    {"type": {"EQUAL": "consumption"}}
                ]
            }
        ]
    }`,
  },
  {
    role: "user",
    content: `This is the dataset used for the bar graph: ${data}. Infer the predicate(s) from this utterance: "The 2nd and 3rd country's production were between 4000 and 5400"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {"electricity": {"BETWEEN": ["4000", "5400"]}}
        ]
    }`,
  },
  {
    role: "user",
    content: `This is the dataset used for the bar graph: ${data}. Infer the predicate(s) from this utterance: "One of the countries where generation exceeded consumption is Japan"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {"country": {"EQUAL": "Japan"}}
        ]
    }`,
  },
  /* -------------------------------------------------------------------------- */
  /*                              COMMON HIGHLIGHTS                             */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `This is the dataset used for the bar graph: ${data}. Infer the predicate(s) from this utterance: "The legend indicates that this bar chart has two categories"`,
  },
  {
    role: "assistant",
    content: `{}`,
  },
  {
    role: "user",
    content: `This is the dataset used for the bar graph: ${data}. Infer the predicate(s) from this utterance: "The countries are displayed along the y-axis"`,
  },
  {
    role: "assistant",
    content: `{}`,
  },
];
