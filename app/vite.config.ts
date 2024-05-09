import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "reload-preset",
      configureServer: (server) => {
        server.watcher.add("../preset");
      },
      handleHotUpdate: async ({ file, server }) => {
        if (file.startsWith("../preset")) {
          const module = await server.moduleGraph.getModuleByUrl(
            "/tailwind.config.js",
          );
          if (module !== undefined) {
            return [module];
          }
        }
      },
    },
  ],
});
