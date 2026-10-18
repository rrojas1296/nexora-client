import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: ["typescript", "react", "nextjs", "jsx-a11y"],

  categories: {
    correctness: "error",
    suspicious: "warn",
  },

  rules: {
    // TypeScript
    "typescript/no-explicit-any": "off",

    // React
    "react/rules-of-hooks": "error",
    "react/exhaustive-deps": "warn",
    "react/react-in-jsx-scope": "off",

    // Next.js
    "nextjs/no-img-element": "warn",

    // General
    "no-console": "warn",
    "no-debugger": "warn",
  },

  ignorePatterns: [
    ".next/**",
    "node_modules/**",
    "dist/**",
    "build/**",
    "coverage/**",
    "next-env.d.ts",
  ],
});
