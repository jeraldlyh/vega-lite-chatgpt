import { ChatCompletionRequestMessage } from "openai";

export const HEATMAP_CHART_HIGHLIGHT_PROMPTS: ChatCompletionRequestMessage[] = [
  {
    role: "user",
    content: `The utterance is: "People aged 30 plus are experiencing relatively low rates of infection"`,
  },
  {
    role: "assistant",
    content: `data range`,
  },
  {
    role: "user",
    content: `The utterance is: "Those of working age from 20 to 29 are being been hit quite badly"`,
  },
  {
    role: "assistant",
    content: `data range`,
  },
  {
    role: "user",
    content: `The utterance is: "People aged 60 and above are affected too"`,
  },
  {
    role: "assistant",
    content: `data range`,
  },
  {
    role: "user",
    content: `The utterance is: "Let's look at the cases in the week Aug 31 to Sep 06 to find out the root cause"`,
  },
  {
    role: "assistant",
    content: `data range`,
  },
  {
    role: "user",
    content: `The utterance is: "Let's look at the cases in the week 03 Aug to 09 Aug for age group between 20 to 29"`,
  },
  {
    role: "assistant",
    content: `visual element`,
  },
  {
    role: "user",
    content: `The utterance is: "Interestingly, the cases for aged 9 and below were generally below 10 cases"`,
  },
  {
    role: "assistant",
    content: `data range`,
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
    content: `y-axis`,
  },
];
