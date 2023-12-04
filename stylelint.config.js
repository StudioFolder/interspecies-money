module.exports = {
  customSyntax: 'postcss-html',
  configBasedir: __dirname,
  extends: [
    'stylelint-config-standard', // Use the stylelint-config-standard preset
    'stylelint-config-prettier', // Use the stylelint-config-prettier to disable rules that conflict with Prettier
    'stylelint-order',
  ],
  plugins: [
  ],
  rules: {
    'media-query-no-invalid': null,
    'selector-anb-no-unmatchable': null,
  },
};
