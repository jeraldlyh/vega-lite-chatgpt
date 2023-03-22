import { TGraph } from "../types";
import { BAR_CHART_UTTERANCES } from "./bar";
import { LINE_CHART_UTTERANCES } from "./line";
import { PIE_CHART_UTTERANCES } from "./pie";

export const UTTERANCE_MAPPING: Record<TGraph, string[]> = {
  bar: BAR_CHART_UTTERANCES,
  pie: PIE_CHART_UTTERANCES,
  line: LINE_CHART_UTTERANCES,
};
