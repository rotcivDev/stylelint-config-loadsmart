module.exports = {
  plugins: ['stylelint-no-unsupported-browser-features', 'stylelint-order'],
  extends: ['stylelint-config-recommended', 'stylelint-config-rational-order', 'stylelint-config-prettier'],
  ignoreFiles: [
    '**/*.snap',
    '**/__snapshots__/**/*',
    'node_modules/',
    '**/*.json'
  ],
  rules: {
    'order/order': [
      'dollar-variables',
      'declarations'
    ],
    'plugin/no-unsupported-browser-features': [true, {
      severity: 'warning',
      ignorePartialSupport: true
    }],
    'plugin/rational-order': [true, {
      'border-in-box-model': false,
      'empty-line-between-groups': true
    }]
  }
}
