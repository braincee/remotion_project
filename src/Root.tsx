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
					titleTexts: [
						'Balancer Exploit Results in $900K stolen from LPs',
						'The Team warned about the bug 5 days prior',
						'Record 1 million ETH burned since the start of this year',
						'Uniswap fees alone made for 50% of the burn',
						'Grayscale wins against the sec in court',
					],
					titleColor: '#ffff',
					scrollingTexts: ['Blocktalk', 'BlockTalk'],
					scrollingColors: ['#fff', '#f888'],
				}}
			/>
		</>
	);
};
