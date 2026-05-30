import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Bundle CJS-only deps that don't expose ESM named exports so the SSR entry
  // can `import { HelmetProvider }` cleanly under Node's ESM loader.
  ssr: {
    noExternal: ["react-helmet-async"],
  },
  // NOTE: `manualChunks` was tried here to split vendor code for parallel
  // download, but the React 18 / react-router-dom / framer-motion init graph
  // produces a temporal-dead-zone error ("Cannot access 'b' before
  // initialization") when split this way under Vite 5 + Rollup 4. Leaving
  // chunking to Rollup's default heuristic — single index.js per route is
  // already lazy-loaded via App.client.tsx, so the loss is minor.
}));
