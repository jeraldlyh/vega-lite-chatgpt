import { ChatCompletionRequestMessage } from "openai";

export const SCATTER_CHART_PROMPTS: ChatCompletionRequestMessage[] = [
  /* -------------------------------------------------------------------------- */
  /*                          MULTIPLE POINTS HIGHLIGHT                         */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "Based on the scatter chart, A, B, and C are primarily D"`,
  },
  {
    role: "assistant",
    content: `
        {
            "VQL": {
                "highlight": "visual element",
                "in": ["data layer", "point"],
                "where": {
                    "OR": [
                        {"name": {"EQUAL": "A"}},
                        {"name": {"EQUAL": "B"}},
                        {"name": {"EQUAL": "C"}},
                        {"name": {"EQUAL": "D"}}
                    ]
                }
            }
        }`,
  },
  /* -------------------------------------------------------------------------- */
  /*                            ROW/COLUMN HIGHLIGHTS                           */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "Based on the scatter chart, everything above X percent means Y"`,
  },
  {
    role: "assistant",
    content: `
        {
            "VQL": {
                "highlight": "data-range",
                "in": ["base layer"],
                "where": {
                    "OR": [
                        {"percentage": {"BETWEEN": ["X", None]}}
                    ]
                }
            }
        }`,
  },
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "Based on the scatter chart, the A with B lower than C percent means D"`,
  },
  {
    role: "assistant",
    content: `
        {
            "VQL": {
                "highlight": "data-range",
                "in": ["base layer"],
                "where": {
                    "OR": [
                        {"percentage": {"BETWEEN": ["C", None]}}
                    ]
                }
            }
        }`,
  },
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "Based on the scatter chart, we can notice that the A with B lower than C percent"`,
  },
  {
    role: "assistant",
    content: `
        {
            "VQL": {
                "highlight": "data-range",
                "in": ["base layer"],
                "where": {
                    "OR": [
                        {"percentage": {"BETWEEN": ["C", None]}}
                    ]
                }
            }
        }`,
  },
  /* -------------------------------------------------------------------------- */
  /*                             BASELINE HIGHLIGHTS                            */
  /* -------------------------------------------------------------------------- */
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "Based on the scatter chart, A, B, and C are located below the line which represents D"`,
  },
  {
    role: "assistant",
    content: `
        {
            "VQL": {
                "highlight": "below-baseline",
                "in": ["data layer", "point"],
                "where": {}
            }
        }`,
  },
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "Based on the scatter chart, points that are above the line means X"`,
  },
  {
    role: "assistant",
    content: `
        {
            "VQL": {
                "highlight": "above-baseline",
                "in": ["data layer", "point"],
                "where": {}
            }
        }`,
  },
  {
    role: "user",
    content: `Convert the following text into a VQL schema: "Based on the scatter chart, in fact the points that are located right above the line allows us to infer that X is Y"`,
  },
  {
    role: "assistant",
    content: `
        {
            "VQL": {
                "highlight": "above-baseline",
                "in": ["data layer", "point"],
                "where": {}
            }
        }`,
  },
];
