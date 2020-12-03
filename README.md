# @miirinjej/eslint-config-vue

[![npm version](https://img.shields.io/npm/v/@miirinjej/eslint-config-vue.svg)](https://www.npmjs.org/package/@miirinjej/eslint-config-vue)

> Standalone sharable eslint config for Vue/Nuxt

## Installation

```
npm install --save-dev @miirinjej/eslint-config-vue eslint
```

## Usage

Add this config to `package.json`:

```yaml
"eslintConfig": {
  "extends": [
    "@miirinjej/eslint-config-vue"
  ]
}
```

See also: [https://eslint.vuejs.org/user-guide/#usage](https://eslint.vuejs.org/user-guide/#usage)

### Extending the config

You can extend the current configuration by extending (or overriding) rules or an array of existing configurations:

```yaml
{
  "extends": ["@miirinjej/eslint-config-vue", "./eslint.config.js"],
  "rules": {
    "vue/comma-dangle": ["error", "never"]
  }
}
```

See also: [https://eslint.org/docs/user-guide/configuring#extending-configuration-files](https://eslint.org/docs/user-guide/configuring#extending-configuration-files)

## Extensions

- [eslint-plugin-nuxt](https://github.com/nuxt/eslint-plugin-nuxt)
  — ESLint plugin for Nuxt.js.
- [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)
  — Official ESLint plugin for Vue.js.

## Rules

See [config](https://github.com/miirinjej/eslint-config-vue/blob/master/index.js) itself.

Rules are grouped and sorted by default as in the original lists:

- [eslint-plugin-nuxt](https://github.com/nuxt/eslint-plugin-nuxt#bulb-rules)
- [eslint-plugin-vue](https://eslint.vuejs.org/rules/)
