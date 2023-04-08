import { ChatCompletionRequestMessage } from "openai";
import data from "../../data/bar.json";

export const BAR_CHART_HIGHLIGHT_PROMPTS: ChatCompletionRequestMessage[] = [
  {
    role: "user",
    content: `This is the dataset used for the bar graph: ${data}. Infer the type of element from this utterance: "The lowest values are 449.5 and 455.8"`,
  },
  {
    role: "assistant",
    content: `visual element`,
  },
  {
    role: "user",
    content: `This is the dataset used for the bar graph: ${data}. Infer the type of element from this utterance: "The top values are 5398 and 5322"`,
  },
  {
    role: "assistant",
    content: `visual element`,
  },
  {
    role: "user",
    content: `This is the dataset used for the bar graph: ${data}. Infer the type of element from this utterance: "China has shown good results across the years"`,
  },
  {
    role: "assistant",
    content: `visual element`,
  },
  {
    role: "user",
    content: `This is the dataset used for the bar graph: ${data}. Infer the type of element from this utterance: "Production in all the countries exceeded consumption except Germany"`,
  },
  {
    role: "assistant",
    content: `visual element`,
  },
  {
    role: "user",
    content: `This is the dataset used for the bar graph: ${data}. Infer the type of element from this utterance: "Both China and US led in production"`,
  },
  {
    role: "assistant",
    content: `visual element`,
  },
  {
    role: "user",
    content: `This is the dataset used for the bar graph: ${data}. Infer the type of element from this utterance: "Most of the countries produced between 485 to 1057 electricity"`,
  },
  {
    role: "assistant",
    content: `data range`,
  },
  {
    role: "user",
    content: `This is the dataset used for the bar graph: ${data}. Infer the type of element from this utterance: "The production for all the countries ranges between 495.1 to 5398"`,
  },
  {
    role: "assistant",
    content: `data range`,
  },
  {
    role: "user",
    content: `This is the dataset used for the bar graph: ${data}. Infer the type of element from this utterance: "The largest production and consumption is China"`,
  },
  {
    role: "assistant",
    content: `visual element`,
  },
  {
    role: "user",
    content: `This is the dataset used for the bar graph: ${data}. Infer the type of element from this utterance: "India has the highest excess in electrity other than China"`,
  },
  {
    role: "assistant",
    content: `visual element`,
  },
  {
    role: "user",
    content: `This is the dataset used for the bar graph: ${data}. Infer the type of element from this utterance: "There was only one country which had both readings that were more than 4500"`,
  },
  {
    role: "assistant",
    content: `data range`,
  },
  {
    role: "user",
    content: `This is the dataset used for the bar graph: ${data}. Infer the type of element from this utterance: "Most countries had electricity values less than 1000"`,
  },
  {
    role: "assistant",
    content: `data range`,
  },
  {
    role: "user",
    content: `This is the dataset used for the bar graph: ${data}. Infer the type of element from this utterance: "Overall, China and the Korea led in both electricity output and use"`,
  },
  {
    role: "assistant",
    content: `visual element`,
  },
  {
    role: "user",
    content: `This is the dataset used for the bar graph: ${data}. Infer the type of element from this utterance: "The 2nd and 3rd country's production were between 4000 and 5400"`,
  },
  {
    role: "assistant",
    content: `data range`,
  },
  {
    role: "user",
    content: `This is the dataset used for the bar graph: ${data}. Infer the type of element from this utterance: "One of the countries where generation exceeded consumption is Japan"`,
  },
  {
    role: "assistant",
    content: `visual element`,
  },
  /* -------------------------------------------------------------------------- */
  /*                              COMMON HIGHLIGHTS                             */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `This is the dataset used for the bar graph: ${data}. Infer the type of element from this utterance: "The legend indicates that this bar chart has two categories"`,
  },
  {
    role: "assistant",
    content: `legend`,
  },
  {
    role: "user",
    content: `This is the dataset used for the bar graph: ${data}. Infer the type of element from this utterance: "The countries are displayed along the y-axis"`,
  },
  {
    role: "assistant",
    content: `y-axis`,
  },
];
