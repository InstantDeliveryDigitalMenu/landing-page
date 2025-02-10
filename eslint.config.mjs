import { FlatCompat } from "@eslint/eslintrc";

import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
    plugins: ["prettier"],
    rules: {
      "no-console": "off",
      "react/react-in-jsx-scope": "off",
      "import/no-named-as-default": "off",
      "import/order": [
        "error",
        {
          "newlines-between": "always-and-inside-groups",
          alphabetize: {
            order: "asc",
            caseInsensitive: true
          },
          groups: ["external", "builtin", "internal", "sibling", "parent", "index"]
        }
      ],
      "prettier/prettier": [
        "warn",
        {
          arrowParens: "avoid",          
          endOfLine: 'auto',
          semi: true,
          trailingComma: 'none',
          singleQuote: false,
          printWidth: 80
        }
      ]
    }
  })
];

export default eslintConfig;
