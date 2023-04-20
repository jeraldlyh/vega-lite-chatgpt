import { ChatCompletionRequestMessage } from "openai";

export const SCATTER_CHART_WHERE_PROMPTS: ChatCompletionRequestMessage[] = [
  {
    role: "user",
    content: `The utterance is: "Jobs such as secretary, hygienist, nurse, and housekeeper are common in the work employment survey"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {"name": {"EQUAL": "Secretary"}},
            {"name": {"EQUAL": "Hygienist"}},
            {"name": {"EQUAL": "Nurse"}},
            {"name": {"EQUAL": "Housekeeper"}}
        ]
    }`,
  },
  {
    role: "user",
    content: `The utterance is: "In both 1980 and 2010, jobs with less than 10 percent women included jobs like Mech Engineer, Welder, Pilot, Electrician and Auto Mechanic"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {"1980": {"BETWEEN": ["0", "10"]}},
            {"2010": {"BETWEEN": ["0", "10"]}}
        ]
    }`,
  },
  {
    role: "user",
    content: `The utterance is: "We can observe that the points above the line has increased across the years"`,
  },
  {
    role: "assistant",
    content: `{}`,
  },
  {
    role: "user",
    content: `The utterance is: "Let's take a look at the jobs below the line"`,
  },
  {
    role: "assistant",
    content: `{}`,
  },
  {
    role: "user",
    content: `The utterance is: "In 2010, we can roughly identify the jobs that have 50 to 70 percent women involvement"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {"2010": {"BETWEEN": ["50", "70"]}}
        ]
    }`,
  },
  {
    role: "user",
    content: `The utterance is: "The amount of women that took up the role of a CEO actually decreased from 1980 to 2010"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {"name": {"EQUAL": "CEO"}}
        ]
    }`,
  },
  {
    role: "user",
    content: `The utterance is: "Jobs such as HR Manager, Accountant and Education Manager increased drastically from 1980 to 2010"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {"name": {"EQUAL": "HR Manager"}},
            {"name": {"EQUAL": "Accountant"}},
            {"name": {"EQUAL": "Education Manager"}}
        ]
    }`,
  },

  {
    role: "user",
    content: `The utterance is: "In both 1980 and 2010, jobs with over 40% women included a lot of technological roles"`,
  },
  {
    role: "assistant",
    content: `{
        "OR": [
            {"1980": {"BETWEEN": ["0", "40"]}},
            {"2010": {"BETWEEN": ["0", "40"]}}
        ]
    }`,
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
    content: `{}`,
  },
  {
    role: "user",
    content: `The utterance is: "The y-axis represents the percentage of women in the workplace in 2010"`,
  },
  {
    role: "assistant",
    content: `{}`,
  },
];
