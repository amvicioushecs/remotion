import {Folder} from 'remotion';
import {RemotionVideo} from './Video';
import './config';

export const Root: React.FC = () => {
  return (
    <>
      <Folder name="AI Video Templates">
        <RemotionVideo />
      </Folder>
    </>
  );
};

// Create a helper to use the knowledge base with our video components
export const generateVideoContent = async (prompt: string) => {
  try {
    const {knowledgeBase} = await import('./ai/knowledgeBase');
    const content = await knowledgeBase.generateVideoContent(prompt);
    return content;
  } catch (error) {
    console.error('Error generating video content:', error);
    return 'Failed to generate content. Please check your API keys and try again.';
  }
};

// Export the entry point for Remotion
export default Root;
