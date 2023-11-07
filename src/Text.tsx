import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
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
	const {width} = useVideoConfig();

	const textInterval = videoConfig.durationInFrames / titleTexts.length;

	const currentTextIndex = Math.floor(frame / textInterval);

	const opacity = interpolate(
		frame,
		[currentTextIndex * textInterval, (currentTextIndex + 1) * textInterval],
		[0, 1]
	);

	return (
		<div style={{position: 'absolute', bottom: '25%', display: 'flex', justifyContent: 'center'}}>
			<p
				style={{
					color: titleColor,
					opacity,
					fontSize: '70px',
					textAlign: 'center',
					width: '70%',
				}}
			>
				{titleTexts[currentTextIndex].toUpperCase()}
			</p>
		</div>
	);
};
