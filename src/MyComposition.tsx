import {useVideoConfig} from 'remotion';
import {z} from 'zod';
import {Text} from './Text';
import {ScrollingText} from './ScrollingText';
import {NewsUpdateDisplay} from './NewsUpdateDisplay';
import {zColor} from '@remotion/zod-types';

export const myCompositionSchema = z.object({
	titleTexts: z.array(z.string()),
	titleColor: zColor(),
	scrollingTexts: z.array(z.string()),
	scrollingColors: z.array(zColor()),
});

export const MyComposition: React.FC<z.infer<typeof myCompositionSchema>> = ({
	titleTexts,
	titleColor,
	scrollingTexts,
	scrollingColors,
}) => {
	const {width, height} = useVideoConfig();

	return (
		<div
			style={{
				gap: '40px',
				position: 'absolute',
				top: 0,
				left: 0,
				width: width,
				height: height,
			}}
		>
			<NewsUpdateDisplay />
			<Text titleTexts={titleTexts} titleColor={titleColor} />
			<ScrollingText
				titleTexts={scrollingTexts}
				titleColors={scrollingColors}
			/>
		</div>
	);
};
