// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': ['off'],
    camelcase: 'off',
    'no-mixed-operators': 'off',
    // 'max-len': ['warn', 150], // исправить
    'max-len': 'off', // подумать на счет svg
    'no-restricted-globals': 'off',
    'max-lines-per-function': ['warn', 100],
    'space-before-blocks': 'off',
    'lines-between-class-members': 'off',
    'one-var': 'off',
    'no-unused-vars': ['warn'],
    'prefer-const': ['warn'],
    'global-require': 'off',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-nested-ternary': 'off',
    'no-useless-escape': 'off',
    'no-return-assign': 'off',
    'no-shadow': 'off',
    'consistent-return': 'off',
    'no-alert': 'off',
    'no-return-await': 'off',
    'no-unused-expressions': 'off', // подумать
    'no-restricted-syntax': 'off',
    'no-prototype-builtins': 'off',
    'comma-dangle': [
      'warn',
      {
        arrays: 'never', // подумать
        objects: 'never', // подумать
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    'object-curly-newline': 'off',
    quotes: 'off',
    'arrow-spacing': ['warn'],
    yoda: ['warn', 'never']
  }
};
