import {bundle} from '@remotion/bundler';
import path from 'path';

const myBundle = await bundle({
	entryPoint: path.resolve('./src/index.ts'),
	webpackOverride: (config) => config,
});

export default myBundle;
