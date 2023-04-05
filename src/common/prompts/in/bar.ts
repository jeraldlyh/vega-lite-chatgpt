import { ChatCompletionRequestMessage } from "openai";

export const BAR_CHART_IN_PROMPTS: ChatCompletionRequestMessage[] = [
  /* -------------------------------------------------------------------------- */
  /*                         SINGLE CATEGORY HIGHLIGHTS                         */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `'X', 'Y', and 'Z' are placeholder texts. Obtain the elements from this utterance: "Based on the bar graph, the lowest values are X and Y"`,
  },
  {
    role: "assistant",
    content: `["data layer", "bar"]`,
  },
  {
    role: "user",
    content: `'X' and 'Y' are placeholder texts. Obtain the elements from this utterance: "Based on the bar chart, the top values are X and Y"`,
  },
  {
    role: "assistant",
    content: `["data layer", "bar"]`,
  },
  {
    role: "user",
    content: `'X' is a placeholder text. Obtain the elements from this utterance: "As shown in the bar chart, X has shown good results across the years"`,
  },
  {
    role: "assistant",
    content: `["data layer", "bar"`,
  },
  {
    role: "user",
    content: `'X', 'Y', and 'Z' are placeholder texts. Obtain the elements from this utterance: "Based on the bar chart, both X and Y are the Z"`,
  },
  {
    role: "assistant",
    content: `["data layer", "bar"]`,
  },
  {
    role: "user",
    content: `'X', 'Y', and 'Z' are placeholder texts. Obtain the elements from this utterance: "Based on the bar chart, most X were between Y and Z"`,
  },
  {
    role: "assistant",
    content: `["data layer", "bar"]`,
  },
  {
    role: "user",
    content: `'A', 'B', 'C', 'D' and 'E' are placeholder texts. Obtain the elements from this utterance: "As shown in the bar chart, some bars that such as B, C and D represents E"`,
  },
  {
    role: "assistant",
    content: `["data layer", "bar"]`,
  },
  /* -------------------------------------------------------------------------- */
  /*                        MULTIPLE CATEGORY HIGHLIGHTS                        */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `'A', 'B', 'C', 'D' and 'E' are placeholder texts. Obtain the elements from this utterance: "Based on the bar chart, from year A to B, C ranged from D percent to E percent"`,
  },
  {
    role: "assistant",
    content: `["data layer", "bar"]`,
  },
  {
    role: "user",
    content: `'X' and 'Y' are placeholder texts. Obtain the elements from this utterance: "As shown in the bar chart, the largest value is X in Y"`,
  },
  {
    role: "assistant",
    content: `["data layer", "bar"]`,
  },
  {
    role: "user",
    content: `'A', 'B', 'C' and 'D' are placeholder texts. Obtain the elements from this utterance: "As shown in the bar chart, A exceeded B in all the C except D"`,
  },
  {
    role: "assistant",
    content: `["data layer", "bar"]`,
  },
  {
    role: "user",
    content: `'X', 'Y', and 'Z' are placeholder texts. Obtain the elements from this utterance: "Based on the bar chart, X and Y were the lowest Z"`,
  },
  {
    role: "assistant",
    content: `["data layer", "bar"]`,
  },
  {
    role: "user",
    content: `'A', 'B', 'C' and 'D' are placeholder texts. Obtain the elements from this utterance: "The bar chart shows that A has a number of B which have C less than D"`,
  },
  {
    role: "assistant",
    content: `["data layer", "bar"]`,
  },
  {
    role: "user",
    content: `'X' and 'Y' are placeholder texts. Obtain the elements from this utterance: "The bar chart shows that X has the lowest number of Y"`,
  },
  {
    role: "assistant",
    content: `["data layer", "bar"]`,
  },
  {
    role: "user",
    content: `'X', 'Y', 'Z' are placeholder texts. Obtain the elements from this utterance: "The bar chart shows that X has the lowest number of Y while Z has the lowest"`,
  },
  {
    role: "assistant",
    content: `["data layer", "bar"]`,
  },
  {
    role: "user",
    content: `'A', 'B', 'C', 'D' and 'E' are placeholder texts. Obtain the elements from this utterance: "From the bar chart, A is the most B as it has the highest number of C while D is the least B with E"`,
  },
  {
    role: "assistant",
    content: `["data layer", "bar"]`,
  },
  {
    role: "user",
    content: `'A', 'B', 'C' and 'D' are placeholder texts. Obtain the elements from this utterance: "From the bar chart, A has B which is C more than D"`,
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
    content: `'X' is a placeholder text. Obtain the elements from this utterance: "The legend indicates that this bar chart has X categories"`,
  },
  {
    role: "assistant",
    content: `["base layer"]`,
  },
  {
    role: "user",
    content: `'X' is a placeholder text. Obtain the elements from this utterance: "The X are displayed along the y-axis in the bar chart"`,
  },
  {
    role: "assistant",
    content: `["base layer"]`,
  },
  {
    role: "user",
    content: `'X' is a placeholder text. Obtain the elements from this utterance: "There's about 3 categories of X in this bar chart"`,
  },
  {
    role: "assistant",
    content: `["base layer"]`,
  },
];
