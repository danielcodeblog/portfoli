
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { DANIEL_CONTEXT } from "../constants";

export const startChat = () => {
  // Always create a new instance right before use to ensure the latest API key is used.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: DANIEL_CONTEXT,
      temperature: 0.8,
    },
  });
};

export async function* sendMessageStream(chat: any, message: string) {
  try {
    // Note: the chat instance already holds the model configuration.
    const result = await chat.sendMessageStream({ message });
    for await (const chunk of result) {
      const c = chunk as GenerateContentResponse;
      // Access the .text property directly as per guidelines.
      if (c.text) {
        yield c.text;
      }
    }
  } catch (error) {
    console.error("Gemini Error:", error);
    yield "I'm having a bit of trouble connecting to Daniel's neural network right now. Try again in a second!";
  }
}
