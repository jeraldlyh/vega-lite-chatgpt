import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { TGraph, UTTERANCE_MAPPING } from "../../common";
import { PrettyPrintJson } from "../../components";
import { ChatGPTService } from "../../services";

const Chart = () => {
  const [results, setResults] = useState<JSX.Element[]>();
  const router = useRouter();

  const { type } = router.query;
  const chartType = type as TGraph;
  const utterances = UTTERANCE_MAPPING[chartType];

  useEffect(() => {
    processUtterances();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query]);

  const processUtterances = async (): Promise<void> => {
    if (!utterances) return;

    const promises = utterances.map(async (utterance, index) => {
      const response = await ChatGPTService.initialise(utterance, chartType);

      return (
        <div key={index} className="p-5">
          <span className="text-white">{utterance}</span>
          <PrettyPrintJson data={response} />
        </div>
      );
    });
    const responses = await Promise.allSettled(promises);
    const parsedResponses = responses
      .map((response) => {
        if (response.status === "fulfilled") {
          return response.value;
        }
        return undefined;
      })
      .filter((value): value is JSX.Element => value !== undefined);

    setResults(parsedResponses);
  };

  const renderUtterances = () => {
    if (!type) {
      return <div className="text-white italic">Missing type</div>;
    }

    if (!results) {
      return (
        <div className="text-center text-white italic">
          Utterances are getting processed...
        </div>
      );
    }
    return <div className="grid grid-cols-2">{results}</div>;
  };

  return (
    <div className="flex flex-col min-h-screen min-w-screen bg-black text-white p-5">
      <span className="font-bold text-3xl text-center mb-5">VQL Schema</span>
      {renderUtterances()}
    </div>
  );
};

export default Chart;
