import { TGraph } from "../types";
import barData from "./bar.json";
import heatmapData from "./heatmap.json";
import histogramData from "./histogram.json";
import lineData from "./line.json";
import pieData from "./pie.json";
import scatterData from "./scatter.json";

export const DATASET: Record<TGraph, string> = {
  histogram: JSON.stringify(histogramData).replace("/ /g", ""),
  bar: JSON.stringify(barData).replace("/ /g", ""),
  pie: JSON.stringify(pieData).replace("/ /g", ""),
  line: JSON.stringify(lineData).replace("/ /g", ""),
  scatter: JSON.stringify(scatterData).replace("/ /g", ""),
  heatmap: JSON.stringify(heatmapData).replace("/ /g", ""),
};
