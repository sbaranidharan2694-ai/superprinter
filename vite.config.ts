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
  // Chunking: the earlier failed attempt split the WHOLE vendor graph
  // (React + react-router-dom + framer-motion) into one chunk, producing a
  // temporal-dead-zone crash ("Cannot access 'b' before initialization")
  // because Rollup reordered the React/router init across the boundary.
  //
  // This targeted version peels ONLY framer-motion into its own chunk and
  // leaves React + react-router on Rollup's default heuristic — so the
  // init-order-sensitive graph is never split. framer-motion is then cached
  // independently and shared across the route chunks that use it instead of
  // being inlined per route. Verified in-browser (no hydration/TDZ error)
  // before shipping.
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/framer-motion")) return "framer-motion";
        },
      },
    },
  },
}));
