import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  configureServer: ({ app }) => {
    app.use(cors({ origin: "*" }));
  },
  plugins: [react()],
});
