import {Composition} from 'remotion';
import {NewsUpdateDisplay, myCompSchema} from './NewsUpdateDisplay'


export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="NewsUpdateDisplay"
				component={NewsUpdateDisplay}
				durationInFrames={810}
				fps={30}
				width={1080}
				height={1920}
				schema={myCompSchema}
				defaultProps={{
					titleText: 'Welcome to Remotions',
					titleColor: '#000000',
					logoColor1: '#91EAE4',
					logoColor2: '#86A8E7',
				}}
			/>
		</>
	);
};