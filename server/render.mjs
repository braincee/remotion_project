import {renderMedia, selectComposition, renderStill} from '@remotion/renderer';
import myBundle from '../bundle.mjs';

// The composition you want to render
const compositionId1 = 'MyComponent';
const compositionId2 = 'OnlyImage';

// You only have to create a bundle once, and you may reuse it
const bundleLocation = myBundle;

// Parametrize the video by passing props to your component.
const inputProps1 = {
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

const inputProps2 = {
	titleTexts: `Ethereum price shakeup predicted amid Merge confusion Cryptocurrency 
		has doubled in value since mid June ahead of momentous event`,
	titleColor: 'black',
};

// Get the composition you want to render. Pass `inputProps` if you
// want to customize the duration or other metadata.
const composition1 = await selectComposition({
	serveUrl: bundleLocation,
	id: compositionId1,
	inputProps: inputProps1,
});

const composition2 = await selectComposition({
	serveUrl: bundleLocation,
	id: compositionId2,
	inputProps: inputProps2,
});

// Render the video. Pass the same `inputProps` again
// if your video is parametrized with data.
await renderMedia({
	composition: composition1,
	serveUrl: bundleLocation,
	codec: 'h264',
	outputLocation: `out/${compositionId1}.mp4`,
	inputProps: inputProps1,
});

await renderStill({
	composition: composition2,
	serveUrl: bundleLocation,
	output: `out/${compositionId2}.png`,
	inputProps: inputProps2,
});

console.log('Render done!');
