import OpenAI from "openai";
import { open_AI } from "./constants";

const client = new OpenAI({
  apiKey: open_AI, //, // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
});

export default client;
