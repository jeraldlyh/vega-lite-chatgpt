import { ChatCompletionRequestMessage } from "openai";

export const LINE_CHART_IN_PROMPTS: ChatCompletionRequestMessage[] = [
  {
    role: "user",
    content: `The utterance is: "From 1999 to 2011, the figures for Germany grew about 4 percent"`,
  },
  {
    role: "assistant",
    content: `["data layer", "line"]`,
  },
  {
    role: "user",
    content: `The utterance is: "The values for Belgium were relatively consistent other than the year 1999"`,
  },
  {
    role: "assistant",
    content: `["data layer", "line"]`,
  },
  {
    role: "user",
    content: `The utterance is: "From 2000 to 2008, the figures for Belgium, France, Italy and Germany just went up gradually"`,
  },
  {
    role: "assistant",
    content: `["data layer", "line"]`,
  },
  {
    role: "user",
    content: `The utterance is: "From 2000 to 2012, let's look at the range from 20% to 30%"`,
  },
  {
    role: "assistant",
    content: `["base layer"]`,
  },
  {
    role: "user",
    content: `The utterance is: "Germany and Italy had relatively closer numbers of about 35% and 33% respectively in 2008"`,
  },
  {
    role: "assistant",
    content: `["data layer", "rect"]`,
  },
  {
    role: "user",
    content: `The utterance is: "Now, let's look at the trends from 2000 to 2004"`,
  },
  {
    role: "assistant",
    content: `["base layer"]`,
  },
  {
    role: "user",
    content: `The utterance is: "Let's look at Italy in 2000"`,
  },
  {
    role: "assistant",
    content: `["data layer", "line"]`,
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
    content: `["base layer"]`,
  },
  {
    role: "user",
    content: `The utterance is: "The legend shows 5 countries"`,
  },
  {
    role: "assistant",
    content: `["base layer"]`,
  },
];
