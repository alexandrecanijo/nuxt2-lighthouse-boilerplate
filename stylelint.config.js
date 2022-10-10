module.exports = {
  customSyntax: 'postcss-html',
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'unit-allowed-list': ['px', 'rem', '%', 'vw', 'vh', 's', 'ms', 'deg', 'fr'],
    'no-invalid-position-at-import-rule': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['function', 'if', 'each', 'include', 'mixin', 'return', 'else', 'use'],
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.(scss|css|html|vue)'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html',
    },
  ],
};
