import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

// const eslintConfig = [...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier')];
const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    rules: {
      semi: ['warn'],
      quotes: ['warn', 'single'],
      'prefer-arrow-callback': ['error'],
      'prefer-template': ['warn'],
      camelcase: 'warn',
      'prefer-const': 'error',
      eqeqeq: ['error', 'smart'],
      'jsx-a11y/no-redundant-roles': 'warn',
      'jsx-a11y/label-has-associated-control': [
        'warn',
        {
          labelComponents: ['Label'],
          labelAttributes: ['htmlFor'],
          controlComponents: ['Input', 'TextField', 'Select']
        }
      ],
      'jsx-a11y/no-noninteractive-element-to-interactive-role': 'warn',
      'jsx-a11y/heading-has-content': 'warn',
      'jsx-a11y/no-autofocus': 'warn'
    }
  })
];

export default eslintConfig;
