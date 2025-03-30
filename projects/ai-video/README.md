# Remotion AI Video Generator

This project combines Remotion's video generation capabilities with AI to create dynamic video content. It uses OpenAI for content generation and supports various API integrations through environment variables.

## Setup

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Configure environment variables:
Create a `.env` file in the root directory with the following variables:
```env
OPENAI_API_KEY=your_openai_api_key
GOOGLE_API_KEY=your_google_api_key
```

3. Start the Remotion Studio:
```bash
npm start
# or
yarn start
# or
pnpm start
```

## Project Structure

- `src/` - Source code directory
  - `ai/` - AI integration components
    - `knowledgeBase.ts` - AI content generation utilities
  - `Video.tsx` - Main video components
  - `Root.tsx` - Project entry point
  - `config.ts` - Remotion configuration

## Using AI Features

The project includes AI capabilities for:
- Generating video content
- Enhancing scripts
- Dynamic content creation

Example usage:
```typescript
import {generateVideoContent} from './Root';

// Generate content
const content = await generateVideoContent('Create a video about technology');
```

## Building Videos

To render a video:
```bash
npm run build
```

## Environment Variables

- `OPENAI_API_KEY`: Required for AI content generation
- `GOOGLE_API_KEY`: Required for Google API integration
- `REMOTION_CACHE_DIR`: Optional, for cache directory configuration

## Customization

You can customize the video templates by:
1. Modifying the components in `Video.tsx`
2. Adjusting the configuration in `config.ts`
3. Extending the AI capabilities in `knowledgeBase.ts`

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.
