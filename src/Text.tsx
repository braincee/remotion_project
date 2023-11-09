import {
	Easing,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {z} from 'zod';
import {zColor} from '@remotion/zod-types';
import './font.css';
import {useEffect} from 'react';

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

	const translateYX = interpolate(
		frame,
		[currentTextIndex * textInterval, currentTextIndex * textInterval + 30],
		[1080, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const translateXY = interpolate(
		frame,
		[
			(currentTextIndex + 1) * textInterval - 15,
			(currentTextIndex + 1) * textInterval,
		],
		[0, 1080],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const translateX = interpolate(
		frame,
		[
			currentTextIndex * textInterval,
			currentTextIndex * textInterval + 30,
			(currentTextIndex + 1) * textInterval - 15,
			(currentTextIndex + 1) * textInterval,
		],
		[-1080, 0, 0, 1080],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const opacity = spring({
		frame,
		fps,
		config: {
			stiffness: 100,
		},
		from: 0,
		to: 1,
	});

	useEffect(() => {
		const myText = document.getElementById('#myText');

		if (frame === (currentTextIndex + 1) * textInterval - 30) {
			myText?.setAttribute('style', 'transform: ""');
			myText?.setAttribute('style', `transform: translateX(${translateXY}px)`);
		}
	}, [frame]);

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
					id="myText"
					style={{
						color: titleColor,
						fontSize: '70px',
						textAlign: 'center',
						width: '70%',
						fontFamily: 'Agbalumo',
						transform: `translateY(${translateYX}px)`,
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
						transform: `translate(${translateX}px)`,
						opacity,
					}}
				>
					{titleTexts[currentTextIndex].toUpperCase()}
				</p>
			)}
		</div>
	);
};
