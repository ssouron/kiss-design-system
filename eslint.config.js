import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { ignores: ['node_modules', 'dist'] },
  { languageOptions: { globals: globals.browser } },
  {
    rules: {
      'no-console': 'warn',
      'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
    },
  },
]
