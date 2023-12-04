module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard', // Use the stylelint-config-standard preset
    'stylelint-config-prettier', // Use the stylelint-config-prettier to disable rules that conflict with Prettier
  ],
  plugins: [
    'stylelint-order', // Use the stylelint-order plugin for ordering related rules
    // Add other plugins as needed
  ],
  rules: {
    'media-query-no-invalid': null,
    'selector-anb-no-unmatchable': null,
  },
};
