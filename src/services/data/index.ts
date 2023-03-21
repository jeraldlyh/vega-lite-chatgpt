import { ChatCompletionRequestMessage } from "openai";
import { TGraph } from "../types";
import { BAR_PROMPTS } from "./bar";

export const PROMPT_MAPPING: Partial<
  Record<TGraph, ChatCompletionRequestMessage[]>
> = {
  bar: BAR_PROMPTS,
};
