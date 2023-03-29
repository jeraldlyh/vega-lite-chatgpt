import { TGraph } from "../types";
import {
  GROUND_TRUTH_BAR_CHART_UTTERANCES,
  TEST_BAR_CHART_UTTERANCES,
} from "./bar";
import { LINE_CHART_UTTERANCES } from "./line";
import { PIE_CHART_UTTERANCES } from "./pie";
import { SCATTER_CHART_UTTERANCES } from "./scatter";

interface ITestTruth {
  TEST: string[];
  GROUND_TRUTH: string[];
}

export const UTTERANCE_MAPPING: Record<TGraph, ITestTruth> = {
  bar: {
    TEST: TEST_BAR_CHART_UTTERANCES,
    GROUND_TRUTH: GROUND_TRUTH_BAR_CHART_UTTERANCES,
  },
  pie: {
    TEST: PIE_CHART_UTTERANCES,
    GROUND_TRUTH: GROUND_TRUTH_BAR_CHART_UTTERANCES,
  },
  line: {
    TEST: LINE_CHART_UTTERANCES,
    GROUND_TRUTH: GROUND_TRUTH_BAR_CHART_UTTERANCES,
  },
  scatter: {
    TEST: SCATTER_CHART_UTTERANCES,
    GROUND_TRUTH: GROUND_TRUTH_BAR_CHART_UTTERANCES,
  },
};
