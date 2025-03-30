import {bundle} from '@remotion/bundler';
import {renderMedia, selectComposition} from '@remotion/renderer';
import {knowledgeBase} from '../ai/knowledgeBase';
import {COMPOSITION_CONFIG} from '../config';
import path from 'path';

const generateVideo = async (prompt: string) => {
  try {
    // Generate content using AI
    console.log('Generating content from prompt:', prompt);
    const content = await knowledgeBase.generateVideoContent(prompt);
    
    // Enhanced the generated content
    console.log('Enhancing content...');
    const enhancedContent = await knowledgeBase.enhanceScript(content || '');

    // Bundle the video
    console.log('Bundling video...');
    const bundled = await bundle({
      entryPoint: path.join(__dirname, '../Root.tsx'),
      // You might need to adjust this path depending on your project structure
    });

    // Select the composition
    const composition = await selectComposition({
      serveUrl: bundled,
      id: 'AIVideo',
    });

    // Render the video
    console.log('Rendering video...');
    await renderMedia({
      composition,
      serveUrl: bundled,
      codec: 'h264',
      outputLocation: `out/${Date.now()}-ai-video.mp4`,
      inputProps: {
        title: prompt,
        content: enhancedContent,
      },
    });

    console.log('Video generated successfully!');
  } catch (error) {
    console.error('Error generating video:', error);
    throw error;
  }
};

// Example usage
const examplePrompt = "Create an engaging 30-second video about the future of AI technology";

// Only run if this file is being executed directly
if (require.main === module) {
  generateVideo(examplePrompt)
    .then(() => console.log('Done!'))
    .catch((err) => {
      console.error('Failed to generate video:', err);
      process.exit(1);
    });
}

export {generateVideo};
