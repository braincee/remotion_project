import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {z} from 'zod';
import {zColor} from '@remotion/zod-types';
import './font.css';

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
	const {fps} = useVideoConfig();

	const textInterval = videoConfig.durationInFrames / titleTexts.length;

	const currentTextIndex = Math.floor(frame / textInterval);

	const translateY = interpolate(
		frame,
		[currentTextIndex * textInterval, (currentTextIndex + 1) * textInterval],
		[1080, 0]
	);

	const translateX = interpolate(
		frame,
		[currentTextIndex * textInterval, (currentTextIndex + 1) * textInterval],
		[-1080, 0]
	);

	// const translateXY = interpolate(
	// 	frame,
	// 	[
	// 		(currentTextIndex + 0.9) * textInterval,
	// 		(currentTextIndex + 1) * textInterval,
	// 	],
	// 	[0, 1080]
	// );

	const opacity = spring({
		frame,
		fps,
		config: {
			stiffness: 100,
		},
		from: 0,
		to: 1,
	});

	return (
		<div
			style={{
				position: 'absolute',
				bottom: '30%',
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			{currentTextIndex % 2 === 0 ? (
				<p
					style={{
						color: titleColor,
						fontSize: '70px',
						textAlign: 'center',
						width: '70%',
						fontFamily: 'Agbalumo',
						transform: `translateY(${translateY}px )`,
						opacity,
					}}
				>
					{titleTexts[currentTextIndex].toUpperCase()}
				</p>
			) : (
				<p
					style={{
						color: titleColor,
						fontSize: '70px',
						textAlign: 'center',
						width: '70%',
						fontFamily: 'Agbalumo',
						transform: `translateX(${translateX}px)`,
						opacity,
					}}
				>
					{titleTexts[currentTextIndex].toUpperCase()}
				</p>
			)}
		</div>
	);
};
