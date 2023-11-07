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
	const duration = videoConfig.durationInFrames;
	const xPos = (frame / duration) * videoConfig.width;

	const numDuplicates = Math.floor(videoConfig.width / 100);

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
					{titleTexts.map((titleText: string, index: number) => (
						<p
							style={{
								fontSize: 40,
								color: titleColors[index],
								fontStyle: 'italic',
							}}
						>
							{titleText.toUpperCase()}
						</p>
					))}
				</>
			))}
		</div>
	);
};
