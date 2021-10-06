import adapter from '@sveltejs/adapter-static';
import { resolve } from 'path';

const config = {
	kit: {
		adapter: adapter(),
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					'@content': resolve('./content')
				}
			}
		}
	}
};

export default config;
