import {Composition} from 'remotion';
import {NewsUpdate, myCompSchema} from './NewsUpdate';


export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="NewsUpdate"
				component={NewsUpdate}
				durationInFrames={150}
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