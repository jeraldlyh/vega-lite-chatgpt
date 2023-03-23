export const Graphs = ["bar", "pie", "line", "scatter"] as const;
export type TGraph = typeof Graphs[number];
