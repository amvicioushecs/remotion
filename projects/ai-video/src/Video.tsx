import {Composition} from 'remotion';
import {AIVideoComposition} from './AIVideoComposition';

export const RemotionVideo: React.FC = () => {
  return (
    <>
      <Composition
        id="AIVideo"
        component={AIVideoComposition}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          title: "AI Generated Video",
          content: "Your AI generated content will appear here",
        }}
      />
    </>
  );
};

export const AIVideoComposition: React.FC<{
  title: string;
  content: string;
}> = ({title, content}) => {
  return (
    <div
      style={{
        flex: 1,
        textAlign: 'center',
        backgroundColor: 'white',
        padding: 20,
      }}
    >
      <h1
        style={{
          fontSize: 60,
          fontWeight: 'bold',
          marginBottom: 40,
        }}
      >
        {title}
      </h1>
      <p
        style={{
          fontSize: 32,
          lineHeight: 1.5,
          maxWidth: '80%',
          margin: '0 auto',
        }}
      >
        {content}
      </p>
    </div>
  );
};
