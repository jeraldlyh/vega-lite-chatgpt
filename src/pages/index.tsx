import { useRouter } from "next/router";
import { Graphs } from "../common";

const UTTERANCES = [
  "Based on the bar chart, from 2000 to 2023, Singapore's growth ranged from 0% to 100%.",
  "Based on the scatter plot, Indonesia's GDP is the largest.",
  "Oh, see, the y-axis on the line chart, it represents the percentage growth of GDP.",
];

export default function Home() {
  const router = useRouter();

  const renderButtons = () => {
    return Graphs.map((graph, index) => {
      return (
        <div
          key={index}
          className="flex items-center justify-center border-2 border-white rounded-lg w-24 h-8 cursor-pointer hover:bg-amber-500"
          onClick={() => router.push(`/chart/${graph}`)}
        >
          {graph.toUpperCase()}
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-black text-white">
      <span className="text-white underline uppercase font-bold text-2xl mb-3">
        Routes
      </span>
      <div className="flex flex-col space-y-3">{renderButtons()}</div>
    </div>
  );
}
