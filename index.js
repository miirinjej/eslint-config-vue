module.exports = {
  extends: ['plugin:vue/vue3-recommended'],
  plugins: ['nuxt'],

  // add your custom rules here
  rules: {
    /**
     * Improving readability
     */
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'never', // instead 'always'
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],

    /**
     * Minimizing arbitrary choices and cognitive overhead
     */
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style'], // instead [['script', 'template'], 'style']
      },
    ],

    /**
     * Uncategorized
     */
    'vue/block-tag-newline': 'error',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: true,
        ignores: [],
      },
    ],
    'vue/custom-event-name-casing': [
      'error',
      'kebab-case',
      {
        ignores: [],
      },
    ],
    'vue/html-button-has-type': [
      'error',
      {
        button: true,
        submit: true,
        reset: true,
      },
    ],
    'vue/html-comment-content-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
      { exceptions: [] },
    ],
    'vue/html-comment-content-spacing': [
      'error',
      'always',
      { exceptions: [] },
    ],
    'vue/html-comment-indent': ['error', 2],
    'vue/match-component-file-name': [
      'error',
      {
        extensions: ['js', 'jsx', 'ts', 'tsx', 'vue'],
        shouldMatchCase: false,
      },
    ],
    ' vue/new-line-between-multi-line-property': [
      'error',
      {
        minLineOfMultilineProperty: 2,
      },
    ],
    'vue/next-tick-style': ['error', 'promise'],
    'vue/no-bare-strings-in-template': [
      'error',
      {
        allowlist: ['(', ')', ',', '.', '&', '+', '-', '=', '*', '/', '#', '%', '!', '?', ':', '[', ']', '{', '}', '<', '>', '\u00B7', '\u2022', '\u2010', '\u2013', '\u2014', '\u2212', '|'],
        attributes: {},
        directives: [],
      },
    ],
    'vue/no-boolean-default': ['error', 'no-default'],
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/no-empty-component-block': 'off',
    'vue/no-multiple-objects-in-class': 'error',
    'vue/no-potential-component-option-typo': [
      'error',
      {
        presets: ['all'],
        custom: [],
        threshold: 1,
      },
    ],
    'vue/no-reserved-component-names': [
      'error',
      { disallowVue3BuiltInComponents: true },
    ],
    'vue/no-restricted-block': 'off',
    'vue/no-restricted-call-after-await': 'off',
    'vue/no-restricted-component-options': 'off',
    'vue/no-restricted-custom-event': 'off',
    'vue/no-restricted-props': 'off',
    'vue/no-restricted-static-attribute': 'off',
    'vue/no-restricted-v-bind': 'off',
    'vue/no-static-inline-styles': ['error', { allowBinding: false }],
    'vue/no-template-target-blank': [
      'error',
      {
        allowReferrer: false,
        enforceDynamicLinks: 'always',
      },
    ],
    'vue/no-unregistered-components': [
      'error',
      {
        ignorePatterns: ['client(\\-\\w+)+', 'router(\\-\\w+)+'],
      },
    ],
    'vue/no-unsupported-features': [
      'error',
      {
        version: '^3.0.0',
        ignores: [],
      },
    ],
    'vue/no-unused-properties': [
      'error',
      {
        groups: ['props', 'data', 'computed', 'methods', 'setup'],
        deepData: true,
        ignorePublicMembers: false,
      },
    ],
    'vue/no-useless-mustaches': [
      'error',
      {
        ignoreIncludesComment: false,
        ignoreStringEscape: false,
      },
    ],
    'vue/no-useless-v-bind': [
      'error',
      {
        ignoreIncludesComment: false,
        ignoreStringEscape: false,
      },
    ],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/require-direct-export': [
      'error',
      { disallowFunctionalComponentFunction: false },
    ],
    'vue/require-name-property': 'off',
    'vue/script-indent': ['error', 2, { baseIndent: 1 }],
    'vue/sort-keys': [
      'error',
      'asc',
      {
        ignoreChildrenOf: ['model'],
        ignoreGrandchildrenOf: ['computed', 'directives', 'inject', 'props', 'watch'],
        minKeys: 2,
        natural: true,
      },
    ],
    'vue/static-class-names-order': 'off',
    'vue/v-for-delimiter-style': ['error', 'in'],
    'vue/v-on-event-hyphenation': [
      'error',
      'always',
      {
        autofix: false,
        ignore: [],
      },
    ],
    'vue/v-on-function-call': [
      'error',
      'always',
      { ignoreIncludesComment: false },
    ],
    'vue/valid-next-tick': 'error',

    /**
     * Extension rules
     */
    'vue/array-bracket-newline': 'error',
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/brace-style': 'error',
    'vue/camelcase': 'error',
    'vue/comma-dangle': ['error', 'always-multiline'],
    'vue/comma-spacing': 'error',
    'vue/comma-style': 'error',
    'vue/dot-location': ['error', 'property'],
    'vue/dot-notation': 'error',
    'vue/eqeqeq': 'error',
    'vue/func-call-spacing': 'error',
    'vue/key-spacing': 'error',
    'vue/keyword-spacing': 'error',
    'vue/max-len': [
      'error', {
        code: 80,
        template: 80,
        tabWidth: 2,
        comments: 80,
        ignoreComments: false,
        ignoreTrailingComments: false,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignoreHTMLAttributeValues: false,
        ignoreHTMLTextContents: false,

        // svg element and its attribute (group 1)
        ignorePattern: '(<svg|d=")',
      },
    ],
    'vue/no-constant-condition': 'error',
    'vue/no-empty-pattern': 'error',
    'vue/no-extra-parens': [
      'error',
      'all',
      {
        conditionalAssign: true,
        returnAssign: false,
        nestedBinaryExpressions: false,
        ignoreJSX: 'all',
        enforceForArrowConditionals: false,
        enforceForSequenceExpressions: false,
        enforceForNewInMemberExpressions: false,
        enforceForFunctionPrototypeMethods: false,
      },
    ],
    'vue/no-irregular-whitespace': 'error',
    'vue/no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want.'
          + ' Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement',
        message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide'
          + ' to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
    ],
    'vue/no-sparse-arrays': 'error',
    'vue/no-useless-concat': 'error',
    'vue/object-curly-newline': [
      'error',
      {
        multiline: true,
        minProperties: 4,
        consistent: true,
      },
    ],
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'vue/operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],
    'vue/prefer-template': 'error',
    'vue/space-in-parens': 'error',
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': 'error',
    'vue/template-curly-spacing': 'error',

    /**
     * Nuxt
     */
    'nuxt/no-env-in-context': 'error',
    'nuxt/no-env-in-hooks': 'error',
    'nuxt/no-globals-in-created': 'error',
    'nuxt/no-this-in-fetch-data': 'off', // enable for Nuxt < 2.12.0
    'nuxt/no-cjs-in-config': 'error',
    'nuxt/no-timing-in-fetch-data': 'error',
    'nuxt/require-func-head': 'error',
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        'vue/sort-keys': 'off',
      },
    },
    {
      files: ['*.vue'],
      rules: {
        indent: 'off', // delegate to eslint-plugin-vue
        'max-len': 'off', // delegate to eslint-plugin-vue
        'unicorn/filename-case': 'off',
      },
    },
  ],
};
