import path from "path";

import { defineConfig, type UserConfig } from "vitest/config";

import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react() as UserConfig["plugins"]],
  test: {
    environment: "jsdom",
    include: ["**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    setupFiles: "./vitest.setup.ts",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
