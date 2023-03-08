import { Configuration, OpenAIApi } from "openai";
import { PlainObject } from "react-vega";

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
const openAi = new OpenAIApi(configuration);

type TGraph =
  | "area"
  | "bar"
  | "circle"
  | "line"
  | "point"
  | "rect"
  | "rule"
  | "square"
  | "text"
  | "tick"
  | "geoshape";

const initialise = async (
  data: PlainObject | unknown,
  graphType: TGraph,
  text: string
) => {
  if (!text) {
    return;
  }

  const response = await openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "Based on a given data, graph type and text, you are going to parse the text and attempt to accurately represent the text by converting the data into a Vega-Lite schema. Return the JSON object without any additional comments/description",
      },
      {
        role: "user",
        content: `
        Perform the conversion of text into a Vega-Lite schema based on the following:
        
        Data - ${JSON.stringify(data)}
        Graph type - ${graphType}
        Text - ${text}
          `,
      },
    ],
  });
  return response.data.choices[0].message?.content;
};

export const ChatGPTService = {
  initialise,
};
