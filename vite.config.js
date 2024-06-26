import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	define: {
		'process.env': process.env
	  },
	resolve: {
		preserveSymlinks: true
	},

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},

	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "src/styles/main.scss"'
			}
		}
	},

	server: {
		port: 1000
	}
};

export default config;
