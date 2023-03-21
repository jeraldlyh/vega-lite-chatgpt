import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";
import { PROMPT_MAPPING } from "./data";
import { TGraph } from "./types";

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
const openAi = new OpenAIApi(configuration);

const initialise = async (
  //   data: PlainObject | unknown,
  text: string,
  graphType: TGraph
) => {
  if (!text) {
    return;
  }

  const prompts: ChatCompletionRequestMessage[] = [
    {
      role: "system",
      content: `
    Based on a given data, graph type and text, you are going to parse an utterance and attempt to accurately represent the utterance by converting the data into a Visual Query Language (VQL).
    
    VQL is a custom query language defined in this model that allows us to specify highlighting in a 2D chart specified in Vega-Lite.

    VQL schema consists of the following attributes:
    1. 'highlight': represents an enum value 'visual element' | 'x-axis' | 'y-axis' | 'legend'
    2. 'in': represents the layer indicated by an array of enum values. The array always contains the value 'data layer' or 'base layer' as the first element where 'base layer' represents the axes, title and legend while the 'data layer' represents visual elements like points in a scatter plot and bars in bar charts and histograms. Depending on the utterance, infer the intention and choose either 'data layer' or 'base layer' as the first element in the aray. An additional element is then appended to the array based on a set of rule mappings. The set of rule mappings is defined as such for 'in' attribute.
        2a. scatter = point
        2b. histogram | bar = bar
        2c. heatmap = rect
        2d. line = line
        2e. pie = arc
    3. 'where': object of predicates represented by key(s) such as 'AND' or 'OR'. Each predicate contains an array of objects of which an object represents an condition. There are 5 different conditions available: 
        3a. EQUAL
        3b. NOT EQUAL
        3c. BETWEEN
        3d. MORE THAN
        3e. LESS THAN
    
        Return the response in a valid JSON object.
    `,
    },
  ];

  prompts.push(...(PROMPT_MAPPING[graphType] || []));

  prompts.push({
    role: "user",
    content: `Convert the following text into a VQL schema: "${text}"`,
  });

  const response = await openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: prompts,
  });
  return response.data.choices[0].message?.content;
};

export const ChatGPTService = {
  initialise,
};
