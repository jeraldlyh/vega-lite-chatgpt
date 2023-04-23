import { ChatCompletionRequestMessage } from "openai";

export const SCATTER_CHART_HIGHLIGHT_PROMPTS: ChatCompletionRequestMessage[] = [
  {
    role: "user",
    content: `The utterance is: "Jobs such as secretary, hygienist, nurse, and housekeeper are common in the work employment survey"`,
  },
  {
    role: "assistant",
    content: `visual element`,
  },
  {
    role: "user",
    content: `The utterance is: "In both 1980 and 2010, jobs with less than 10 percent women included jobs like Mech Engineer, Welder, Pilot, Electrician and Auto Mechanic"`,
  },
  {
    role: "assistant",
    content: `data range`,
  },
  {
    role: "user",
    content: `The utterance is: "We can observe that the points above the line has increased across the years"`,
  },
  {
    role: "assistant",
    content: `above-baseline`,
  },
  {
    role: "user",
    content: `The utterance is: "Let's take a look at the jobs below the line"`,
  },
  {
    role: "assistant",
    content: `below-baseline`,
  },
  {
    role: "user",
    content: `The utterance is: "Let's take a look at the jobs with women more than 30% in 1980"`,
  },
  {
    role: "assistant",
    content: `data range`,
  },
  {
    role: "user",
    content: `The utterance is: "In 2010, we can roughly identify the jobs that have 50 to 70 percent women involvement"`,
  },
  {
    role: "assistant",
    content: `data range`,
  },
  {
    role: "user",
    content: `The utterance is: "The amount of women that took up the role of a CEO actually decreased from 1980 to 2010"`,
  },
  {
    role: "assistant",
    content: `visual element`,
  },
  {
    role: "user",
    content: `The utterance is: "Jobs such as HR Manager, Accountants and Education Manager increased drastically from 1980 to 2010"`,
  },
  {
    role: "assistant",
    content: `visual element`,
  },
  {
    role: "user",
    content: `The utterance is: "In both 1980 and 2010, jobs with over 30% women included jobs like Education Manager"`,
  },
  {
    role: "assistant",
    content: `data range`,
  },
  {
    role: "user",
    content: `The utterance is: "In both 1980 and 2010, jobs with over 20% women included a lot of technology and social roles"`,
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
    content: `The utterance is: "The legend displays the scale from large gains to large losses"`,
  },
  {
    role: "assistant",
    content: `legend`,
  },
  {
    role: "user",
    content: `The utterance is: "The y-axis represents the percentage of women in the workplace in 2010"`,
  },
  {
    role: "assistant",
    content: `y-axis`,
  },
];
