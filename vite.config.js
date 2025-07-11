// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import svgr from "vite-plugin-svgr";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: "/",
  plugins: [
    react(), // Enables React support
    tailwindcss(), // Enables Tailwind v4 processing
    svgr(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // “@/” → “src/”
    },
  },
});
