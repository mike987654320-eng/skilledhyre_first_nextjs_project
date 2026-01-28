// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals"),
//   {
//     ignores: [
//       "node_modules/**",
//       ".next/**",
//       "out/**",
//       "build/**",
//       "next-env.d.ts",
//     ],
//   },
// ];

// export default eslintConfig;

// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [
//   // Next.js core rules
//   ...compat.extends("next/core-web-vitals"),

//   // Custom overrides
//   {
//     rules: {
//       "@next/next/no-img-element": "off",
//     },
//   },

//   // Ignore files
//   {
//     ignores: [
//       "node_modules/**",
//       ".next/**",
//       "out/**",
//       "build/**",
//       "next-env.d.ts",
//     ],
//   },
// ];

// export default eslintConfig;

// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";
// import tseslint from "@typescript-eslint/eslint-plugin";
// import tsParser from "@typescript-eslint/parser";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [
//   // Next.js rules
//   ...compat.extends("next/core-web-vitals"),

//   // TypeScript support
//   {
//     files: ["**/*.ts", "**/*.tsx"],
//     languageOptions: {
//       parser: tsParser,
//     },
//     plugins: {
//       "@typescript-eslint": tseslint,
//     },
//     rules: {
//       "@typescript-eslint/no-explicit-any": "off", // allow any
//       "@typescript-eslint/no-unused-vars": "warn",
//     },
//   },

//   // Global overrides
//   {
//     rules: {
//       "@next/next/no-img-element": "off",
//     },
//   },

//   // Ignore folders
//   {
//     ignores: [
//       "node_modules/**",
//       ".next/**",
//       "out/**",
//       "build/**",
//       "next-env.d.ts",
//     ],
//   },
// ];

// export default eslintConfig;

// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";
// import tseslint from "@typescript-eslint/eslint-plugin";
// import tsParser from "@typescript-eslint/parser";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [
//   // Next.js core rules
//   ...compat.extends("next/core-web-vitals"),

//   // TypeScript support
//   {
//     files: ["**/*.ts", "**/*.tsx"],
//     languageOptions: {
//       parser: tsParser,
//     },
//     plugins: {
//       "@typescript-eslint": tseslint,
//     },
//     rules: {
//       "@typescript-eslint/no-explicit-any": "off",
//       "@typescript-eslint/no-unused-vars": "off", // 🔥 turn off completely
//     },
//   },

//   // Global rules
//   // {
//   //   rules: {
//   //     "@next/next/no-img-element": "off",
//   //     "no-console": "off",

//   //     // 🔥 THIS is the key line
//   //     "eslint-comments/no-unused-disable": "off",
//   //   },
//   // },

//   {
//     rules: {
//       "@next/next/no-img-element": "off",
//       "no-console": "off",
//       "eslint-comments/no-unused-disable": "off", // prevents build from failing
//       "@typescript-eslint/no-explicit-any": "off",
//       "@typescript-eslint/no-unused-vars": "off",
//     },
//   },

//   // Ignore folders
//   {
//     ignores: [
//       "node_modules/**",
//       ".next/**",
//       "out/**",
//       "build/**",
//       "next-env.d.ts",
//     ],
//   },
// ];

// export default eslintConfig;

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),

  // TypeScript & plugin config
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      "@typescript-eslint": tseslint,
      "sort-keys-fix": require("eslint-plugin-sort-keys-fix"),
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // allow any
      "@typescript-eslint/no-unused-vars": "off", // allow unused vars
      "eslint-comments/no-unused-disable": "off", // ignore unused eslint-disable
      "sort-keys-fix/sort-keys-fix": "off", // disable until used
    },
  },

  // General Next.js rules
  {
    rules: {
      "@next/next/no-img-element": "off",
      "no-console": "off",
    },
  },

  // Ignore build folders
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
