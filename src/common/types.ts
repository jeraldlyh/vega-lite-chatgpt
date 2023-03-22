export const Graphs = ["bar", "pie", "line"] as const;
export type TGraph = typeof Graphs[number];
