import {linearTiming, TransitionSeries} from '@remotion/transitions';
import {slide} from '@remotion/transitions/slide';
import {Video, useVideoConfig, staticFile} from 'remotion';
export const VideoSequence = () => {
	const {width, height} = useVideoConfig();
	return (
		<TransitionSeries>
			<TransitionSeries.Sequence durationInFrames={270}>
				<Video
					src={staticFile('binary.mp4')}
					height={height / 2}
					width={width}
				/>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				presentation={slide()}
				timing={linearTiming({durationInFrames: 10})}
			/>
			<TransitionSeries.Sequence durationInFrames={270}>
				<Video src={staticFile('fire.mp4')} height={height / 2} width={width} />
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				presentation={slide()}
				timing={linearTiming({durationInFrames: 10})}
			/>
			<TransitionSeries.Sequence durationInFrames={270}>
				<Video
					src={staticFile('court.mp4')}
					height={height / 2}
					width={width}
				/>
			</TransitionSeries.Sequence>
		</TransitionSeries>
	);
};
