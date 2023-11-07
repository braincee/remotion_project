import {Composition} from 'remotion';
import {HelloWorld, myCompSchema} from './HelloWorld';
import {Logo, myCompSchema2} from './HelloWorld/Logo';
import {Text, myTextSchema} from './Text';
import {Main} from './Main';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={810}
				fps={30}
				width={1920}
				height={1080}
				schema={myCompSchema}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: '#000000',
					logoColor1: '#91EAE4',
					logoColor2: '#86A8E7',
				}}
			/>
			<Composition
				id="OnlyLogo"
				component={Logo}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				schema={myCompSchema2}
				defaultProps={{
					logoColor1: '#91dAE2' as const,
					logoColor2: '#86A8E7' as const,
				}}
			/>
			<Composition
				id="main"
				component={Main}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				schema={myTextSchema}
				defaultProps={{
					titleTexts: ['Welcome to Remotion', 'This is a new Text'],
					titleColor: '#fff',
				}}
			/>
		</>
	);
};
