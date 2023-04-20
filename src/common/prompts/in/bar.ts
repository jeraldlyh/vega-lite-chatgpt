import { ChatCompletionRequestMessage } from "openai";
import { DATASET } from "../../data";

const DATA = DATASET["bar"];

export const BAR_CHART_IN_PROMPTS: ChatCompletionRequestMessage[] = [
  {
    role: "user",
    content: `The utterance is: "The lowest values are 449.5 and 455.8"`,
  },
  {
    role: "assistant",
    content: `["data layer", "bar"]`,
  },
  {
    role: "user",
    content: `The utterance is: "The top values are 5398 and 5322"`,
  },
  {
    role: "assistant",
    content: `["data layer", "bar"]`,
  },
  {
    role: "user",
    content: `The utterance is: "China has shown good results across the years"`,
  },
  {
    role: "assistant",
    content: `["data layer", "bar"]`,
  },
  {
    role: "user",
    content: `The utterance is: "Production in all the countries exceeded consumption except Germany"`,
  },
  {
    role: "assistant",
    content: `["data layer", "bar"]`,
  },
  {
    role: "user",
    content: `The utterance is: "Both China and US led in production"`,
  },
  {
    role: "assistant",
    content: `["data layer", "bar"]`,
  },
  {
    role: "user",
    content: `The utterance is: "Most of the countries produced between 485 to 1057 electricity"`,
  },
  {
    role: "assistant",
    content: `["base layer"]`,
  },
  {
    role: "user",
    content: `The utterance is: "The production for all the countries ranges between 495.1 to 5398"`,
  },
  {
    role: "assistant",
    content: `["base layer"]`,
  },
  {
    role: "user",
    content: `The utterance is: "The largest production and consumption is China"`,
  },
  {
    role: "assistant",
    content: `["data layer", "bar"]`,
  },
  {
    role: "user",
    content: `The utterance is: "India has the highest excess in electrity other than China"`,
  },
  {
    role: "assistant",
    content: `["data layer", "bar"]`,
  },
  {
    role: "user",
    content: `The utterance is: "There was only one country which had both readings that were more than 4500"`,
  },
  {
    role: "assistant",
    content: `["base layer"]`,
  },
  {
    role: "user",
    content: `The utterance is: "Most countries had electricity values less than 1000"`,
  },
  {
    role: "assistant",
    content: `["base layer"]`,
  },
  {
    role: "user",
    content: `The utterance is: "Overall, China and the Korea led in both electricity output and use"`,
  },
  {
    role: "assistant",
    content: `["data layer", "bar"]`,
  },
  {
    role: "user",
    content: `The utterance is: "The 2nd and 3rd country's production were between 4000 and 5400"`,
  },
  {
    role: "assistant",
    content: `["base layer"]`,
  },
  {
    role: "user",
    content: `The utterance is: "One of the countries where generation exceeded consumption is Japan"`,
  },
  {
    role: "assistant",
    content: `["data layer", "bar"]`,
  },
  /* -------------------------------------------------------------------------- */
  /*                              COMMON HIGHLIGHTS                             */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `The utterance is: "The legend indicates that this bar chart has two categories"`,
  },
  {
    role: "assistant",
    content: `["base layer"]`,
  },
  {
    role: "user",
    content: `The utterance is: "The countries are displayed along the y-axis"`,
  },
  {
    role: "assistant",
    content: `["base layer"]`,
  },
];
