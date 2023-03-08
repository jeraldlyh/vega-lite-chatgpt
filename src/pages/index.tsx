import { useEffect, useState } from "react";
import { PlainObject, VegaLite, VisualizationSpec } from "react-vega";
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

export default function Home() {
  const [spec, setSpec] = useState<VisualizationSpec>();
  const [graphData, setGraphData] = useState<PlainObject>({
    table: [
      { Year: 2015, GDP: 92 },
      { Year: 2016, GDP: 48 },
      { Year: 2017, GDP: 23 },
      { Year: 2018, GDP: 15 },
      { Year: 2019, GDP: 28 },
      { Year: 2020, GDP: 55 },
      { Year: 2021, GDP: 43 },
      { Year: 2022, GDP: 91 },
      { Year: 2023, GDP: 81 },
    ],
  });

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    const response = await ChatGPTService.initialise(
      graphData["table"],
      "bar",
      "The year with the highest GDP is 2022. Highlight 2022 while displaying the rest of the data."
    );

    if (!response) {
      return;
    }
    console.log(response);

    // Response may contain text other than JSON
    try {
      const { $schema, data, ...payload } = JSON.parse(response);
      // NOTE: vega-lite data attribute is a plain object instead of an array
      setSpec({ ...payload, data: { name: "table" } });
    } catch (error) {
      console.log(error);
    }
  };

  const renderGraph = () => {
    if (!spec || !graphData) {
      return <div>Missing spec and data</div>;
    }
    return <VegaLite spec={spec} data={graphData} />;
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-black">
      <span className="text-white font-bold text-3xl mb-5">Graph</span>
      {renderGraph()}
    </div>
  );
}
