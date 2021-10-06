import adapter from '@sveltejs/adapter-static';
import { resolve } from 'path';

const config = {
	kit: {
		adapter: adapter(),
		target: '#svelte',
		prerender: {
			entries: ['*', '/contact-success'],
		},
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
