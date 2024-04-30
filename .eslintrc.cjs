module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"prettier",
	],
	overrides: [
		{
			files: "**/*.vue",
			// (whatever it's called 😄)
			parser: "@vue-eslint/parser",
		},
		{
			files: "**/*.ts",
			rules: {
				"@typescript-eslint/no-unsafe-call": "off",
				//"@typescript-eslint/no-unused-vars": "off",
			},
		},
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ["./tsconfig.json", "./src/index.ts"],
	},
	plugins: ["@typescript-eslint"],
	root: true,
};
