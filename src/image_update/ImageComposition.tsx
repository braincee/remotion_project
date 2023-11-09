import {useVideoConfig} from 'remotion';
import {z} from 'zod';
import {Text} from './Text';
import {zColor} from '@remotion/zod-types';
import {TopImage} from './TopImage';


export const myCompositionSchema2 = z.object({
	titleTexts: z.string(),
	titleColor: zColor(),
});

export const ImageComposition: React.FC<z.infer<typeof myCompositionSchema2>> = ({
	titleTexts,
	titleColor,
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
                background: 'yellow',
			}}  
		>
              <TopImage />
              <Text titleTexts={titleTexts} titleColor={titleColor} />
		</div>
	);
};
