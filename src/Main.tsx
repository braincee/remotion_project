import {Composition, Sequence} from 'remotion';
import {Text, myTextSchema} from './Text';
import {ScrollingText, myScrollingTextSchema} from './ScrollingText';

export const Main: React.FC = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '40px',
			}}
		>
			<Sequence>
				<Text
					titleTexts={['Welcome to Remotion', 'This is a new Text']}
					titleColor="#fff"
				/>
			</Sequence>
			<Sequence from={0}>
				<ScrollingText
					titleTexts={['Remotion', 'Remotion']}
					titleColors={['#fff', '#f888']}
				/>
			</Sequence>
		</div>
	);
};
