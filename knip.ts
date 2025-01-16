import type { KnipConfig } from "knip";

const config: KnipConfig = {
	entry: ["src/main.tsx"],
	project: ["src/**/*.ts", "src/**/*.tsx"],
	ignore: ["**/*.d.ts", "src/components/ui/**/*.tsx", "src/services/**/*.ts"],
	ignoreBinaries: ["only-allow"],
	rules: {
		devDependencies: "warn",
		dependencies: "warn",
	},
};

export default config;
