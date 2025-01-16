/// <reference types="vitest" />
import react from "@vitejs/plugin-react-swc";
import { resolve } from "node:path";
import { defineConfig, loadEnv } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, "./env/", "");
	const Cookie = env.VITE_PROXY_COOKIE || "";

	return {
		base: process.env.CDN_URL || "/",
		resolve: {
			alias: {
				"@": resolve(__dirname, "./src"),
			},
		},
		envDir: "./env/",
		plugins: [react(), svgr()],
		build: {
			sourcemap: true,
			rollupOptions: {
				output: {
					manualChunks: {
						react: ["react", "react/jsx-runtime", "react-dom"],
					},
				},
			},
		},
		test: {
			global: true,
			watch: false,
			environment: "jsdom",
		},
		server: {
			strictPort: true,
			proxy: {
				"/api": {
					target: env.VITE_PROXY_TARGET,
					changeOrigin: true,
					headers: {
						Cookie,
					},
				},
			},
		},
	};
});
