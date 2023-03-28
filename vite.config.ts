import react from "@vitejs/plugin-react";
import { viteMockServe } from "vite-plugin-mock";
// @ts-ignore
import { rollupImportMapPlugin } from "rollup-plugin-import-map";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import terser from "@rollup/plugin-terser";
import { resolve } from "path";
import importmap from "./importmap.json";

interface Props {
  command: any;
}

export default ({ command }: Props) => ({
  plugins: [
    react(),
    terser(),
    cssInjectedByJsPlugin(),
    viteMockServe({
      mockPath: "mock",
      localEnabled: command === "serve",
    }),
    {
      ...rollupImportMapPlugin([importmap]),
      enforce: "pre",
      apply: "build",
    },
  ],
  build: {
    manifest: true,
    rollupOptions: {
      input: resolve(__dirname, "src/Mikrofrontend.tsx"),
      preserveEntrySignatures: "exports-only",
      output: {
        entryFileNames: "syfo-mikrofrontend.[hash].js",
        format: "esm",
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    deps: {
      inline: ["@testing-library/user-event"],
    },
  },
});
