import { defineConfig } from "rollup";

export default defineConfig({
  input: "src/main.js",
  output: {
    file: "dist/bundle_debug.js",
    format: "cjs",
  },
});
