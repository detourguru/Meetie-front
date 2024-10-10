import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig, type UserConfig } from "vitest/config";

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
