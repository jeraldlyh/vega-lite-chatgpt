export const Graphs = ["bar", "pie", "line", "scatter", "heatmap"] as const;
export type TGraph = typeof Graphs[number];
