module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  },
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 11, // версия стандарта JavaScript. Последний 12 (2021).
    sourceType: 'module', // Позволяет использовать import/export
  },
};
