import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

// To resolve __dirname and __filename in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create the FlatCompat instance for compatibility with different ESLint configurations
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Define the base ESLint configuration
const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
];

// Modify rules
const customRules = {
  'react/no-unescaped-entities': 'off',
  '@next/next/no-page-custom-font': 'off',
};

// Export the configuration as a default export
export default {
  extends: ['next/core-web-vitals'],
  rules: customRules,
};
