import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { CorsOrigin } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    cors: {
      configureServer: ({ app }) => {
        app.use(cors({ origin: "*" }));
      },
      origin: "*",
    },
  },
});
