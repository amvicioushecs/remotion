import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

export class KnowledgeBase {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async generateVideoContent(prompt: string) {
    try {
      const completion = await this.openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: "You are a video content generator that helps create engaging video scripts and content."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        model: "gpt-3.5-turbo",
      });

      return completion.choices[0].message.content;
    } catch (error) {
      console.error('Error generating video content:', error);
      throw error;
    }
  }

  async enhanceScript(script: string) {
    try {
      const completion = await this.openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: "You are an expert video script editor that enhances scripts for better engagement and clarity."
          },
          {
            role: "user",
            content: `Please enhance this video script: ${script}`
          }
        ],
        model: "gpt-3.5-turbo",
      });

      return completion.choices[0].message.content;
    } catch (error) {
      console.error('Error enhancing script:', error);
      throw error;
    }
  }
}

export const knowledgeBase = new KnowledgeBase();
