module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  htmlWhitespaceSensitivity: 'strict',
  insertPragma: false,
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  printWidth: 120,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,

  overrides: [
    {
      files: ['tsconfig.json', 'jsconfig.json'],
      options: {
        parser: 'jsonc',
      },
    },
    {
      files: ['**/locales/translations/*.ts'],
      options: {
        printWidth: 540,
      },
    },
    {
      files: ['**/*.REST'],
      options: {
        printWidth: 540,
      },
    },
  ],
  // importOrderSeparation: true,
  // importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
  // importOrderSortSpecifiers: true,
  // plugins: [require.resolve('prettier-plugin-organize-imports')],
};
