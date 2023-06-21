import { AICompletionRequest, AICompletionResponse } from "../interfaces/gpt.interface";
import { openai } from "../utils/gpt-config.handler";

// const search = async () => {};
async function generateChatResponse(message: string): Promise<string> {
  const params: AICompletionRequest = {
    model: "text-davinci-003",
    prompt: message,
    max_tokens: 300,
    top_p: 1.0,
    temperature: 0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  const response: AICompletionResponse = await openai.createCompletion(params);

  if (response.data.choices && response.data.choices[0]?.text) {
    return response.data.choices[0].text.trim();
  } else {
    throw new Error("No choices in response");
  }
}
export { generateChatResponse };
