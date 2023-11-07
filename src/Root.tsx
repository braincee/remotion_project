import {Composition} from 'remotion';
import {MyComposition, myCompositionSchema} from './MyComposition';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="MyComponent"
				component={MyComposition}
				durationInFrames={810}
				fps={30}
				width={1080}
				height={1920}
				schema={myCompositionSchema}
				defaultProps={{
					titleTexts: ['Welcome to Remotion', 'This is a new Text'],
					titleColor: '#000000',
					scrollingTexts: ['Remotion', 'Remotion'],
					scrollingColors: ['#fff', '#f888'],
				}}
			/>
		</>
	);
};
