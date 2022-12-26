import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import glob from "glob";
import type { RollupOptions } from "rollup";
import bookmarklet from "rollup-plugin-bookmarklet";

const entryPaths = glob.sync("src/**/main.ts");
const configs: RollupOptions[] = entryPaths.map((entryPath) => ({
  input: entryPath,
  output: {
    file: entryPath
      .replace(/^src\//, "dist/")
      .replace(/\/(.+)\/main\.ts$/, "/$1.min.js"),
    format: "iife",
  },
  plugins: [typescript(), terser(), bookmarklet()],
}));

export default configs;
