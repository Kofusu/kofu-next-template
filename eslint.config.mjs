import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ),
  {
    rules: {
      'import/extensions': 'off',
      'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
      'react/react-in-jsx-scope': 'off',
      'import/prefer-default-export': 'off',
      'no-tabs': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/prop-types': 'off',
      'no-console': 'error',
      'react/jsx-one-expression-per-line': 'off',
      'implicit-arrow-linebreak': 'off',
      'no-param-reassign': [
        'error',
        {
          props: true,
          ignorePropertyModificationsFor: ['state'], // <- tambahkan ini
        },
      ],
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function', // atau 'expression'
          unnamedComponents: 'arrow-function',
        },
      ],
    },
  },
];

export default eslintConfig;
