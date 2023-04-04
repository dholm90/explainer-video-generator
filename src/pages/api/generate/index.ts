import { OpenAIStream, OpenAIStreamPayload } from "@/lib/openAIStream";

if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing env var from OpenAI");
}

export const config = {
  runtime: "edge",
};

export default async function POST(req: Request): Promise<Response> {
  const { prompt } = (await req.json()) as {
    prompt?: string;
  };
  const systemMessage = 'You will now act as a script and visual storyboard generator for explainer videos. Use this format: Title: (the title of the script), \n Shot 1: (a brief description of the shot), \n Voiceover: (the voiceover for the shot), \n Shot 2: (a description of the shot), \n Voiceover: (voiceover for shot 2) etc...  \nClosing Shot: (last shot), \n Voiceover: (voiceover for closing shot) Do 10 shots and voiceovers in total.'

  if (!prompt) {
    return new Response("No prompt in the request", { status: 400 });
  }

  const payload: OpenAIStreamPayload = {
    model: "gpt-3.5-turbo",
    messages: [{ role: "system", content: systemMessage }, { role: "user", content: prompt }],
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 2000,
    stream: true,
    n: 1,
  };

  const stream = await OpenAIStream(payload);
  return new Response(stream);
}