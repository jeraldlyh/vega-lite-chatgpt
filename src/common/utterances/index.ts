import { TGraph } from "../types";
import { BAR_CHART_UTTERANCES } from "./bar";

export const UTTERANCE_MAPPING: Record<TGraph, string[]> = {
  bar: BAR_CHART_UTTERANCES,
  pie: BAR_CHART_UTTERANCES,
  line: BAR_CHART_UTTERANCES,
};
