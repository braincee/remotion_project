import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {z} from 'zod';
import {zColor} from '@remotion/zod-types';

export const myTextSchema = z.object({
	titleTexts: z.array(z.string()),
	titleColor: zColor(),
});

export const Text: React.FC<z.infer<typeof myTextSchema>> = ({
	titleTexts,
	titleColor,
}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const textInterval = videoConfig.durationInFrames / titleTexts.length;

	// Determine the current text index based on the current frame
	const currentTextIndex = Math.floor(frame / textInterval);

	const opacity = interpolate(
		frame,
		[currentTextIndex * textInterval, (currentTextIndex + 1) * textInterval],
		[0, 1]
	);

	return (
		<AbsoluteFill style={{backgroundColor: 'black', textAlign: 'center'}}>
			<p style={{color: titleColor, opacity, fontSize: '40px'}}>
				{titleTexts[currentTextIndex].toUpperCase()}
			</p>
		</AbsoluteFill>
	);
};
