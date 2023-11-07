import { useVideoConfig, AbsoluteFill } from 'remotion';
import { VideoSequence } from './VideoSequence';
import { AudioPlayer } from './AudioPlayer';


export const NewsUpdateDisplay: React.FC = () => {
  const { width, height } = useVideoConfig();

  return (
    <AbsoluteFill style={{ backgroundColor: 'black'}}>
       <AbsoluteFill>
          <VideoSequence />
          <AudioPlayer />
       </AbsoluteFill>
    </AbsoluteFill>
  );
};

