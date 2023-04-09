/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [react(), eslint()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
    coverage: {
      provider: "c8",
      all: true,
      reporter: "text",
      exclude: [
        "**/node_modules/**",
        "**/dist/**",
        "**/src/interfaces/**",
        "**/cypress/**",
        "**/.{idea,git,cache,output,temp}/**",
        "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*",
        "**/*.d.ts",
        "**/main.tsx",
        "**/index.tsx",
        "**/utils/**",
        "jest.setup.js",
        "**/src/setup.ts",
        "**/src/data/**",
      ],
    },
  },
});
