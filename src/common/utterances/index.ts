import { TGraph } from "../types";
import {
  GROUND_TRUTH_BAR_CHART_UTTERANCES,
  TEST_BAR_CHART_UTTERANCES,
} from "./bar";
import { GROUND_TRUTH_HEATMAP_CHART_UTTERANCES } from "./heatmap";
import { GROUND_TRUTH_HISTOGRAM_CHART_UTTERANCES } from "./histogram";
import {
  GROUND_TRUTH_LINE_CHART_UTTERANCES,
  LINE_CHART_UTTERANCES,
} from "./line";
import {
  GROUND_TRUTH_PIE_CHART_UTTERANCES,
  TEST_PIE_CHART_UTTERANCES,
} from "./pie";
import { GROUND_TRUTH_SCATTER_CHART_UTTERANCES } from "./scatter";

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
    TEST: TEST_PIE_CHART_UTTERANCES,
    GROUND_TRUTH: GROUND_TRUTH_PIE_CHART_UTTERANCES,
  },
  line: {
    TEST: LINE_CHART_UTTERANCES,
    GROUND_TRUTH: GROUND_TRUTH_LINE_CHART_UTTERANCES,
  },
  scatter: {
    TEST: GROUND_TRUTH_SCATTER_CHART_UTTERANCES,
    GROUND_TRUTH: GROUND_TRUTH_SCATTER_CHART_UTTERANCES,
  },
  heatmap: {
    TEST: GROUND_TRUTH_HEATMAP_CHART_UTTERANCES,
    GROUND_TRUTH: GROUND_TRUTH_HEATMAP_CHART_UTTERANCES,
  },
  histogram: {
    TEST: GROUND_TRUTH_HISTOGRAM_CHART_UTTERANCES,
    GROUND_TRUTH: GROUND_TRUTH_HISTOGRAM_CHART_UTTERANCES,
  },
};
