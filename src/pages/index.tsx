import { useEffect, useState } from "react";
import { VisualizationSpec } from "react-vega";
import { PrettyPrintJson } from "../components";
import { ChatGPTService } from "../services";

const spec: VisualizationSpec = {
  width: 400,
  height: 200,
  mark: "bar",
  encoding: {
    x: { field: "Year", type: "ordinal" },
    y: { field: "GDP", type: "quantitative" },
  },
  data: { name: "table" }, // note: vega-lite data attribute is a plain object instead of an array
};

const UTTERANCES = [
  "Based on the bar chart, from 2000 to 2023, Singapore's growth ranged from 0% to 100%.",
  "Based on the scatter plot, Indonesia's GDP is the largest.",
  "Oh, see, the y-axis on the line chart, it represents the percentage growth of GDP.",
];

export default function Home() {
  const [utterances, setUtterances] = useState<JSX.Element[]>();
  //   const [graphData, setGraphData] = useState<PlainObject>({
  //     table: [
  //       { Year: 2015, GDP: 92 },
  //       { Year: 2016, GDP: 48 },
  //       { Year: 2017, GDP: 23 },
  //       { Year: 2018, GDP: 15 },
  //       { Year: 2019, GDP: 28 },
  //       { Year: 2020, GDP: 55 },
  //       { Year: 2021, GDP: 43 },
  //       { Year: 2022, GDP: 91 },
  //       { Year: 2023, GDP: 81 },
  //     ],
  //   });

  useEffect(() => {
    processUtterances();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const processUtterances = async () => {
    const promises = UTTERANCES.map(async (utterance, index) => {
      const response = await ChatGPTService.initialise(utterance, "bar");

      return (
        <div key={index} className="w-72 p-5">
          <span className="text-white">{utterance}</span>
          <PrettyPrintJson data={response} />
        </div>
      );
    });
    const data = await Promise.all(promises);
    setUtterances(data);
  };

  const renderUtterances = () => {
    if (!utterances) {
      return (
        <div className="text-white italic">
          Utterances are getting processed...
        </div>
      );
    }
    return (
      <div className="flex divide-x-2 divide-white space-x-5">{utterances}</div>
    );
  };

  //   const renderGraph = () => {
  //     if (!spec || !graphData) {
  //       return <div>Missing spec and data</div>;
  //     }
  //     return <VegaLite spec={spec} data={graphData} />;
  //   };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-black text-white">
      <span className="font-bold text-3xl mb-5">VQL Schema</span>
      {renderUtterances()}
    </div>
  );
}
