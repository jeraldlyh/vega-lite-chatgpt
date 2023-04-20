import { ChatCompletionRequestMessage } from "openai";
import { TGraph } from "../types";
import {
  BAR_CHART_HIGHLIGHT_PROMPTS,
  HEATMAP_CHART_HIGHLIGHT_PROMPTS,
  LINE_CHART_HIGHLIGHT_PROMPTS,
  PIE_CHART_HIGHLIGHT_PROMPTS,
  SCATTER_CHART_HIGHLIGHT_PROMPTS,
  SYSTEM_HIGHLIGHT_PROMPT,
} from "./highlight";
import {
  BAR_CHART_IN_PROMPTS,
  HEATMAP_CHART_IN_PROMPTS,
  LINE_CHART_IN_PROMPTS,
  PIE_CHART_IN_PROMPTS,
  SCATTER_CHART_IN_PROMPTS,
  SYSTEM_IN_PROMPT,
} from "./in";
import {
  BAR_CHART_WHERE_PROMPTS,
  HEATMAP_CHART_WHERE_PROMPTS,
  LINE_CHART_WHERE_PROMPTS,
  PIE_CHART_WHERE_PROMPTS,
  SCATTER_CHART_WHERE_PROMPTS,
  SYSTEM_WHERE_PROMPT,
} from "./where";

interface IValue {
  HIGHLIGHT: ChatCompletionRequestMessage[];
  IN: ChatCompletionRequestMessage[];
  WHERE: ChatCompletionRequestMessage[];
}

export const PROMPT_MAPPING: Record<TGraph, IValue> = {
  bar: {
    HIGHLIGHT: BAR_CHART_HIGHLIGHT_PROMPTS,
    IN: BAR_CHART_IN_PROMPTS,
    WHERE: BAR_CHART_WHERE_PROMPTS,
  },
  pie: {
    HIGHLIGHT: PIE_CHART_HIGHLIGHT_PROMPTS,
    IN: PIE_CHART_IN_PROMPTS,
    WHERE: PIE_CHART_WHERE_PROMPTS,
  },
  line: {
    HIGHLIGHT: LINE_CHART_HIGHLIGHT_PROMPTS,
    IN: LINE_CHART_IN_PROMPTS,
    WHERE: LINE_CHART_WHERE_PROMPTS,
  },
  scatter: {
    HIGHLIGHT: SCATTER_CHART_HIGHLIGHT_PROMPTS,
    IN: SCATTER_CHART_IN_PROMPTS,
    WHERE: SCATTER_CHART_WHERE_PROMPTS,
  },
  heatmap: {
    HIGHLIGHT: HEATMAP_CHART_HIGHLIGHT_PROMPTS,
    IN: HEATMAP_CHART_IN_PROMPTS,
    WHERE: HEATMAP_CHART_WHERE_PROMPTS,
  },
};

export const SYSTEM_PROMPTS = {
  HIGHLIGHT: SYSTEM_HIGHLIGHT_PROMPT,
  IN: SYSTEM_IN_PROMPT,
  WHERE: SYSTEM_WHERE_PROMPT,
};
