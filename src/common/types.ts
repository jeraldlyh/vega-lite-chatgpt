export const Graphs = [
  "bar",
  "pie",
  "line",
  "scatter",
  "heatmap",
  "histogram",
] as const;
export type TGraph = typeof Graphs[number];
