interface IProps {
  data: any;
}

export const PrettyPrintJson = ({ data }: IProps) => {
  console.log(data);
  if (!data) {
    return <span className="text-white italic">No JSON data</span>;
  }
  return (
    <pre className="overflow-x-auto">
      {JSON.stringify(JSON.parse(data), null, 2)}
    </pre>
  );
};
