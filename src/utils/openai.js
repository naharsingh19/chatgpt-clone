import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_SECRET,
});

const openai = new OpenAIApi(configuration);

export const generateMessage = async (prompt) => {
  try {
    const response = await openai.createCompletion({
      model: "GPT-3.5",
      prompt: `${prompt}`,
      temperature: 0.9,
      max_tokens: 256,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });

    // Extract and return the generated text
    return response.data.choices[0].text;
  } catch (error) {
    console.error("Error generating message:", error);
    throw new Error("Failed to generate message");
  }
};
