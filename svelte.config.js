import adapter from '@sveltejs/adapter-auto';
import svg from '@poppanator/sveltekit-svg'
import path from 'path'


const svgOptions = {
	includePaths: ["./src/assets/weather-icons/"],
	svgoOptions: {
		multipass: true,
        plugins: ["preset-default" ]
	}
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: {
			plugins: [
				svg(svgOptions)
			],
			resolve: {
				alias: {
                    '@assets': path.resolve('./src/assets'),
                    '@components': path.resolve('./src/components'),
                    '@utils': path.resolve('./src/utils')
                }
			}
		}
	}
};

export default config;
