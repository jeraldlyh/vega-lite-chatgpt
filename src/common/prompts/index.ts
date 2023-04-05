import { ChatCompletionRequestMessage } from "openai";
import { TGraph } from "../types";
import {
  BAR_CHART_HIGHLIGHT_PROMPTS,
  SYSTEM_HIGHLIGHT_PROMPT,
} from "./highlight";
import { BAR_CHART_IN_PROMPTS } from "./in/bar";
import { SYSTEM_IN_PROMPT } from "./in/system";
import { BAR_CHART_WHERE_PROMPTS, SYSTEM_WHERE_PROMPT } from "./where";

interface IValue {
  HIGHLIGHT: ChatCompletionRequestMessage[];
  IN: ChatCompletionRequestMessage[];
  WHERE: ChatCompletionRequestMessage[];
}

export const PROMPT_MAPPING: Record<TGraph, IValue> = {
  system: {
    HIGHLIGHT: SYSTEM_HIGHLIGHT_PROMPT,
    IN: SYSTEM_IN_PROMPT,
    WHERE: SYSTEM_WHERE_PROMPT,
  },
  bar: {
    HIGHLIGHT: BAR_CHART_HIGHLIGHT_PROMPTS,
    IN: BAR_CHART_IN_PROMPTS,
    WHERE: BAR_CHART_WHERE_PROMPTS,
  },
  pie: {
    HIGHLIGHT: SYSTEM_HIGHLIGHT_PROMPT,
    IN: SYSTEM_IN_PROMPT,
    WHERE: SYSTEM_WHERE_PROMPT,
  },
  line: {
    HIGHLIGHT: SYSTEM_HIGHLIGHT_PROMPT,
    IN: SYSTEM_IN_PROMPT,
    WHERE: SYSTEM_WHERE_PROMPT,
  },
  scatter: {
    HIGHLIGHT: SYSTEM_HIGHLIGHT_PROMPT,
    IN: SYSTEM_IN_PROMPT,
    WHERE: SYSTEM_WHERE_PROMPT,
  },
};
