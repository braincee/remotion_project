import {useVideoConfig} from 'remotion';
import {z} from 'zod';
import {Text} from './Text';
import {NewsUpdateDisplay} from './NewsUpdateDisplay';
import {zColor} from '@remotion/zod-types';
import { LogoSequence } from './LogoSequence';

export const myCompositionSchema = z.object({
	titleTexts: z.array(z.string()),
	titleColor: zColor(),
	logoPaths: z.tuple([z.string(), z.string()]), 
});

export const MyComposition: React.FC<z.infer<typeof myCompositionSchema>> = ({
	titleTexts,
	titleColor,
	logoPaths,
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
			<LogoSequence 
			 logoPaths={logoPaths}
			/>
		</div>
	);
};
