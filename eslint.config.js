// @ts-check

// @ts-ignore
import { rootConfig } from '@tanstack/config/eslint'
// @ts-ignore
import cspellConfigs from '@cspell/eslint-plugin/configs'

export default [
  ...rootConfig,
  cspellConfigs.recommended,
  {
    name: 'tanstack/temp',
    rules: {
      '@cspell/spellchecker': [
        'error',
        {
          cspell: {
            words: [
              'codemod', // We support our codemod
              'extralight', // Our public interface
              'jscodeshift',
              'Promisable', // Our public interface
              'retryer', // Our public interface
              'solidjs', // Our target framework
              'tabular-nums', // https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric
              'tanstack', // Our package scope
              'todos', // Too general word to be caught as error
              'TSES', // @typescript-eslint package's interface
              'tsqd', // Our public interface (TanStack Query Devtools shorthand)
              'tsup', // We use tsup as builder
              'typecheck', // Field of vite.config.ts
              'vue-demi', // dependency of @tanstack/vue-query
            ],
          },
        },
      ],
      '@typescript-eslint/no-empty-function': 'off',
      'no-case-declarations': 'off',
      'no-prototype-builtins': 'off',
    },
  },
]