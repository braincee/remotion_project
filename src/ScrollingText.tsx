import {useCurrentFrame, useVideoConfig} from 'remotion';
import {z} from 'zod';
import {zColor} from '@remotion/zod-types';

export const myScrollingTextSchema = z.object({
	titleTexts: z.array(z.string()),
	titleColors: z.array(zColor()),
});

export const ScrollingText: React.FC<z.infer<typeof myScrollingTextSchema>> = ({
	titleTexts,
	titleColors,
}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	// Adjust the duration (in frames) for the text to scroll across the screen
	const duration = videoConfig.durationInFrames;

	// Calculate the position of the text based on the current frame
	const xPos = (frame / duration) * videoConfig.width;

	return (
		<div
			style={{
				display: 'flex',
				gap: '10px',
				position: 'absolute',
				top: videoConfig.height / 2, // Center vertically
				left: xPos,
				transform: 'translateX(-50%)',
			}}
		>
			{titleTexts.map((titleText: string, index: number) => (
				<p
					style={{
						fontSize: 24,
						color: titleColors[index],
					}}
				>
					{titleText.toUpperCase()}
				</p>
			))}
		</div>
	);
};
