module.exports = {
    tailwindConfig: './tailwind.config.js',
    singleQuote: true,
    printWidth: 80,
    proseWrap: 'always',
    tabWidth: 4,
    requireConfig: false,
    useTabs: false,
    trailingComma: 'none',
    bracketSpacing: true,
    jsxBracketSameLine: false,
    semi: true,
    plugins: [require('prettier-plugin-tailwindcss')]
};