import readline from 'readline';
import { geminiChat } from '../ai/geminiChat';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome to Gemini Chat for Remotion Video Creation!');
console.log('You can ask for help with:');
console.log('- Video script writing and ideas');
console.log('- Content optimization suggestions');
console.log('- Technical Remotion questions');
console.log('\nExample prompts:');
console.log('- "Help me write a script for a 1-minute tech explainer video"');
console.log('- "Suggest creative transitions for my Remotion video"');
console.log('- "How can I make my video more engaging?"');
console.log('\nCommands:');
console.log('- Type your messages and press Enter to send');
console.log('- Type "quit" or "exit" to end the chat');
console.log('- Type "reset" to start a new chat session');
console.log('----------------------------------------');

async function chat() {
  try {
    const askQuestion = () => {
      rl.question('You: ', async (input) => {
        if (input.toLowerCase() === 'quit' || input.toLowerCase() === 'exit') {
          console.log('Goodbye!');
          rl.close();
          return;
        }

        if (input.toLowerCase() === 'reset') {
          geminiChat.resetChat();
          console.log('Chat session reset. Starting new conversation.');
          askQuestion();
          return;
        }

        try {
          const response = await geminiChat.sendMessage(input);
          console.log('\nGemini: ' + response + '\n');
        } catch (error) {
          console.error('Error:', error.message);
        }

        askQuestion();
      });
    };

    askQuestion();
  } catch (error) {
    console.error('Failed to initialize chat:', error);
    rl.close();
  }
}

// Start the chat if this file is run directly
if (require.main === module) {
  chat().catch(console.error);
}

export { chat };
