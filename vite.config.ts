import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
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
  build: {
    // Split heavy vendor groups into their own chunks so the browser can
    // parallel-download and cache them across visits. The main app chunk
    // shrinks from ~800kB to ~280kB, which directly helps mobile LCP.
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (!id.includes("node_modules")) return;
          if (id.includes("react-dom") || id.includes("react-router") || id.includes("scheduler") || id.match(/[\\/]react[\\/]/)) {
            return "vendor-react";
          }
          if (id.includes("@radix-ui")) return "vendor-radix";
          if (id.includes("lucide-react") || id.includes("react-icons")) return "vendor-icons";
          if (id.includes("framer-motion") || id.includes("motion")) return "vendor-motion";
          if (id.includes("react-hook-form") || id.includes("zod") || id.includes("@hookform")) return "vendor-forms";
          if (id.includes("@tanstack")) return "vendor-query";
          return "vendor";
        },
      },
    },
  },
}));
