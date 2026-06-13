import { defineConfig } from "oxfmt"

export default defineConfig({
  // gitignored files are ignored by default
  ignorePatterns: [],
  semi: false,
  sortImports: true,
  trailingComma: "none"
})
