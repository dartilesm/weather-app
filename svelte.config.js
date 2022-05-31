import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';
import adapter from '@sveltejs/adapter-auto';
import svg from '@poppanator/sveltekit-svg'
import path from 'path'


const svgOptions = {
	type: 'url',
	includePaths: ["./src/assets/weather-icons/"],
	svgoOptions: {
		multipass: true,
        plugins: ["preset-default"]
	}
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: {
			plugins: [
				svg(svgOptions),
				dynamicImportVars.default({
					include: './src/components/weather/weather-icon.svelte'
				})
			],
			resolve: {
				alias: {
                    '@assets': path.resolve('./src/assets'),
                    '@components': path.resolve('./src/components'),
                    '@utils': path.resolve('./src/utils'),
                    '@store': path.resolve('./src/store')
                }
			}
		}
	}
};

export default config;
