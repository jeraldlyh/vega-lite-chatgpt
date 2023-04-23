import { ChatCompletionRequestMessage } from "openai";

export const PIE_CHART_IN_PROMPTS: ChatCompletionRequestMessage[] = [
  {
    role: "user",
    content: `The utterance is: "The smallest section with any disruption was only 2.2 percent"`,
  },
  {
    role: "assistant",
    content: `["data layer", "arc]`,
  },
  {
    role: "user",
    content: `The utterance is: "Nearly 35 percent of the respondents mentioned that they expierenced minor and massive disruption in their businesses"`,
  },
  {
    role: "assistant",
    content: `["data layer", "arc]`,
  },
  {
    role: "user",
    content: `The utterance is: "The largest section consisted of mainly moderate disruption"`,
  },
  {
    role: "assistant",
    content: `["data layer", "arc]`,
  },
  {
    role: "user",
    content: `The utterance is: "Nearly all the respondents mentioned they experienced some disruption"`,
  },
  {
    role: "assistant",
    content: `["data layer", "arc]`,
  },
  {
    role: "user",
    content: `The utterance is: "A small proportion of the respondents mentioned that they did not experienced any disruptions due to available resources"`,
  },
  {
    role: "assistant",
    content: `["data layer", "arc]`,
  },
  {
    role: "user",
    content: `The utterance is: "Nearly 13.2% of respondents said they experienced no or minor disruption."`,
  },
  {
    role: "assistant",
    content: `["data layer", "arc]`,
  },
  {
    role: "user",
    content: `The utterance is: "11 percent of the respondents characterized the disruption as minor"`,
  },
  {
    role: "assistant",
    content: `["data layer", "arc]`,
  },
  {
    role: "user",
    content: `The utterance is: "98 percent of the respondents expressed their concern regarding minor, moderate and massive disruptions"`,
  },
  {
    role: "assistant",
    content: `["data layer", "arc]`,
  },
  {
    role: "user",
    content: `The utterance is: "Based on the pie chart, moderate disruption is 62.5 percent"`,
  },
  {
    role: "assistant",
    content: `["data layer", "arc]`,
  },
  {
    role: "user",
    content: `The utterance is: "After obtaining the survey, our team has found out that 11 percent of the respondents characterized the disruption as minor"`,
  },
  {
    role: "assistant",
    content: `["data layer", "arc]`,
  },
  /* -------------------------------------------------------------------------- */
  /*                              COMMON HIGHLIGHTS                             */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `The utterance is: "The legend shows that there's 4 categories"`,
  },
  {
    role: "assistant",
    content: `["base layer"]`,
  },
];
