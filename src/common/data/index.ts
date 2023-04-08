import { TGraph } from "../types";
import barData from "./bar.json";
import pieData from "./pie.json";

export const DATASET: Record<TGraph, string> = {
  bar: JSON.stringify(barData).replace("/ /g", ""),
  pie: JSON.stringify(pieData).replace("/ /g", ""),
  line: JSON.stringify(barData).replace("/ /g", ""),
  scatter: JSON.stringify(barData).replace("/ /g", ""),
};
