import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";
import { PROMPT_MAPPING, TGraph } from "../common";

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
You are going to act as a parser where you will be given an utterance and you will be expected to convert the text into a Visual Query Language (VQL) schema as accurate and possible. The VQL schema is a custom query language defined in this model that allows us to specify highlighting in a 2D chart specified in Vega-Lite.
    
Your response cannot contain any explanation, text or comments other than the JSON object which contains the VQL schema. Your response should only contain the JQL schema and nothing else.
    
You should ignore the fact that certain data types may not fit certain types of graph. Your assumption should not alter the type of the chart which will be mentioned in the utterance. For example, if the utterance mentions a bar chart, you should not assume or suggest that the chart is a line chart. In situations where you are unable to infer and determine a VQL schema, you should make your own assumptions without including it in your response and try your best to generate a reasonable VQL. 

The VQL schema consists of the following attributes:
1. 'highlight': represents an enum value. This attribute can only contain one of the enum values. For example, {"highlight": "y-axis data range"} is invalid attribute because it contains more than one enum value. The following set of rule mappings (chart to enum values) is defined as such for 'highlight' attribute. 
    1a. scatter plot = 'visual element' | 'x-axis' | 'y-axis' | 'legend' | 'data range' | 'below-baseline' | 'above-baseline'
    1b. histogram chart or bar chart = 'visual element' | 'x-axis' | 'y-axis' | 'legend'
    1c. heatmap = 'visual element'
    1d. line chart = 'visual element' | 'x-axis' | 'y-axis' | 'legend' | 'data range' | 'rect'
    1e. pie chart = 'visual element' | 'legend'

2. 'in': represents the layer indicated by an array of enum values. The first element in the array is either 'data layer' or 'base layer' where 'base layer' represents the axes, title and legend while the 'data layer' represents visual elements like points in a scatter plot and bars in bar charts and histograms. Depending on the utterance, you need to infer the intention and choose either 'data layer' or 'base layer' as the first element in the array. Similarly, you need to infer the chart type from the utterance, whereby an additional element is then appended to the array depending on the chart type which is defined based on a set of rule mappings. The following set of rule mappings is defined as such for 'in' attribute.
    2a. scatter chart = point
    2b. histogram or bar chart = bar
    2c. heatmap chart = rect
    2d. line chart = line
    2e. pie chart = arc

3. 'where': object of predicates represented by key(s) such as 'AND' or 'OR'. 'OR' is always chosen by default, unless 'AND' makes the VQL more efficient. Each predicate contains an array of objects of which an object represents an condition. There are 5 different conditions available - 'EQUAL', 'NOT EQUAL', 'BETWEEN', 'MORE THAN', 'LESS THAN'

Return your response in a valid JSON object, where the "VQL" attribute in the JSON object is a single VQL schema. If the utterance contains line chart, you may be required to return an array of VQL schemas for scenarios where multiple distinct "highlight" are required to better represent the utterance, however, the "highlight" attribute in each VQL schema in array must be distinct. For chart types other than line chart, you can only generate one VQL schema.`,
    },
  ];

  prompts.push(...(PROMPT_MAPPING[graphType] || []));

  prompts.push({
    role: "user",
    content: `Convert the following text into a VQL schema: "${text}". Return the VQL schema without any further explanation or text.`,
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
