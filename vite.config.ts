import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@styles": "/src/styles",
      "@var": "/src/styles/variables.sass",
      "@images": "/src/assets",
      "@shared": "/src/shared",
    },
  },
});
