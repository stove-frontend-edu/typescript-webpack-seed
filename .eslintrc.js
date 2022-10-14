module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	ignorePatterns: ['webpack-config/**', 'webpack.config.js'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				arrowParens: 'always',
				bracketSameLine: false,
				bracketSpacing: true,
				insertPragma: false,
				printWidth: 140,
				requirePragma: false,
				semi: true,
				singleQuote: true,
				trailingComma: 'es5',
				useTabs: true,
				tabWidth: 4,
			},
		],
	},
};
