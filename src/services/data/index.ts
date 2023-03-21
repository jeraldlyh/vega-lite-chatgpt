import { ChatCompletionRequestMessage } from "openai";
import { TGraph } from "../types";
import { BAR_CHART_PROMPTS } from "./bar";
import { PIE_CHART_PROMPTS } from "./pie";

export const PROMPT_MAPPING: Record<TGraph, ChatCompletionRequestMessage[]> = {
  bar: BAR_CHART_PROMPTS,
  pie: PIE_CHART_PROMPTS,
};
