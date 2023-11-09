import { useCurrentFrame, useVideoConfig, staticFile } from 'remotion';
import { z } from 'zod';
import { Img } from 'remotion';

export const myScrollingLogoSchema = z.object({
  logoPaths: z.tuple([z.string(), z.string()]),
});

export const LogoSequence: React.FC<z.infer<typeof myScrollingLogoSchema>> = ({
  logoPaths,
}) => {
  const videoConfig = useVideoConfig();
  const frame = useCurrentFrame();
  const duration = videoConfig.durationInFrames;
  const xPos = (frame / duration) * videoConfig.width;

  const numDuplicates = Math.floor(videoConfig.width);

  return (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        position: 'absolute',
        bottom: '8%',
        left: xPos,
        transform: 'translateX(-50%)',
      }}
    >
      {[...Array(numDuplicates).keys()].map((index) => (
        <>
          <Img
            src={staticFile(logoPaths[index % 2])}
            style={{
              width: 150,
              height: 100, 
            }}
          />
        </>
      ))}
    </div>
  );
};
