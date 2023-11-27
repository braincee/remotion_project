import {renderMedia, selectComposition} from '@remotion/renderer';
import myBundle from '../bundle.mjs';
// The composition you want to render
const compositionId = 'MyComponent';

// You only have to create a bundle once, and you may reuse it
const bundleLocation = myBundle;

// Parametrize the video by passing props to your component.
const inputProps = {
	titleTexts: [
		'Balancer Exploit Results in $900K stolen from LPs',
		'The Team warned about the bug 5 days prior',
		'Record 1 million ETH burned since the start of this year',
		'Uniswap fees alone made for 50% of the burn',
		'Grayscale wins against the sec in court',
	],
	titleColor: '#ffff',
	logoPaths: ['google_1.png', 'grayscale_1.png'],
};

// Get the composition you want to render. Pass `inputProps` if you
// want to customize the duration or other metadata.
const composition = await selectComposition({
	serveUrl: bundleLocation,
	id: compositionId,
	inputProps,
});

// Render the video. Pass the same `inputProps` again
// if your video is parametrized with data.
await renderMedia({
	composition,
	serveUrl: bundleLocation,
	codec: 'h264',
	outputLocation: `out/${compositionId}.mp4`,
	inputProps,
});

console.log('Render done!');
