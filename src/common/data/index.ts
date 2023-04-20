import { TGraph } from "../types";
import barData from "./bar.json";
import lineData from "./line.json";
import pieData from "./pie.json";
import scatterData from "./scatter.json";

export const DATASET: Record<TGraph, string> = {
  bar: JSON.stringify(barData).replace("/ /g", ""),
  pie: JSON.stringify(pieData).replace("/ /g", ""),
  line: JSON.stringify(lineData).replace("/ /g", ""),
  scatter: JSON.stringify(scatterData).replace("/ /g", ""),
};
