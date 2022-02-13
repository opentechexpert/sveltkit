import adapter from '@sveltejs/adapter-auto';
import staticAdapter from '@sveltejs/adapter-static';

import preprocess from 'svelte-preprocess';

const adapt = process.env.ADAPTER;
const adapters = adapt == "static" ? staticAdapter : adapter;


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapters(),
	}
};

export default config;
