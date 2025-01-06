import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"


export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { ignores: ["node_modules", "dist"] },
  { languageOptions:
    { globals: globals.browser }
  },
  { rules: {
      "no-console": "warn",
      "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
    }
  }
]
