/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import type { UserConfig } from "vite";
import { defineConfig, ViteDevServer } from "vite";
// @ts-ignore
import { rollupImportMapPlugin } from "rollup-plugin-import-map";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import terser from "@rollup/plugin-terser";
import { resolve } from "path";
import importmap from "./importmap.json";
import { getIsDialogmoteTokenFromRequest } from "./server/auth/tokenx/getTokenXFromRequest";

export default defineConfig({
  plugins: [
    react(),
    terser(),
    cssInjectedByJsPlugin(),
    {
      ...rollupImportMapPlugin([importmap]),
      enforce: "pre",
      apply: "build",
    },
    {
      name: "configure-request-headers",
      configureServer: (server: ViteDevServer) => {
        server.middlewares.use(async (_req, res, next) => {
          if (_req.originalUrl?.includes("/api/dialogmote")) {
            const tokenX = await getIsDialogmoteTokenFromRequest(_req);
            res.setHeader("Authorization", `Bearer ${tokenX}`);
          }
          next();
        });
      },
    },
  ],
  server: {
    proxy: {
      "/api/dialogmote": {
        target:
          process.env.NODE_ENV === "development"
            ? `https://localhost:3000/api/v2/arbeidstaker/brev`
            : `${process.env.ISDIALOGMOTE_HOST}/api/v2/arbeidstaker/brev`,
        changeOrigin: true,
        secure: false,
      },
    },
  },
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
} as UserConfig);
