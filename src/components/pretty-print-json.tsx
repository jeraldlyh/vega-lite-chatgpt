import { useEffect, useState } from "react";

interface IProps {
  data: any;
}

export const PrettyPrintJson = ({ data }: IProps) => {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    try {
      const json = JSON.stringify(data, null, 2);
      setValue(json);
    } catch (error) {
      setValue(JSON.stringify(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (!data) {
    return <span className="text-white italic">No JSON data</span>;
  }
  return <pre className="overflow-x-auto">{value}</pre>;
};
