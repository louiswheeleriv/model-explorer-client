import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import node from "@sveltejs/adapter-node";

const config = {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  kit: {
		adapter: node({ env: { port: process.env.PORT } })
	}
};

export default config;
