export const Graphs = ["bar", "pie", "line", "scatter", "system"] as const;
export type TGraph = typeof Graphs[number];
