// vite.config.ts
import {
  fileURLToPath,
  URL
} from "node:url";
import {
  defineConfig
} from "file:///E:/Dokumenty/Developing/Projekty/gm-festival/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/Dokumenty/Developing/Projekty/gm-festival/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import VueDevTools from "file:///E:/Dokumenty/Developing/Projekty/gm-festival/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///E:/Dokumenty/Developing/Projekty/gm-festival/vite.config.ts";
var vite_config_default = defineConfig({
  base: process.env.VITE_APP_BASE_URL || "/",
  plugins: [
    vue(),
    VueDevTools()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL(
        "./src",
        __vite_injected_original_import_meta_url
      ))
    }
  },
  build: {
    outDir: "dist"
    // Built frontend assets go here
  },
  publicDir: "public",
  // Static assets go here
  define: {
    "process.env": process.env
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxEb2t1bWVudHlcXFxcRGV2ZWxvcGluZ1xcXFxQcm9qZWt0eVxcXFxnbS1mZXN0aXZhbFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcRG9rdW1lbnR5XFxcXERldmVsb3BpbmdcXFxcUHJvamVrdHlcXFxcZ20tZmVzdGl2YWxcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L0Rva3VtZW50eS9EZXZlbG9waW5nL1Byb2pla3R5L2dtLWZlc3RpdmFsL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHtcbiAgZmlsZVVSTFRvUGF0aCxcbiAgVVJMXG59IGZyb20gJ25vZGU6dXJsJ1xuXG5pbXBvcnQge1xuICBkZWZpbmVDb25maWdcbn0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IFZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scydcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJhc2U6IHByb2Nlc3MuZW52LlZJVEVfQVBQX0JBU0VfVVJMIHx8ICcvJyxcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIFZ1ZURldlRvb2xzKCksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJyxcbiAgICAgICAgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICB9XG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiAnZGlzdCcsIC8vIEJ1aWx0IGZyb250ZW5kIGFzc2V0cyBnbyBoZXJlXG4gIH0sXG4gIHB1YmxpY0RpcjogJ3B1YmxpYycsIC8vIFN0YXRpYyBhc3NldHMgZ28gaGVyZVxuICBkZWZpbmU6IHtcbiAgICAncHJvY2Vzcy5lbnYnOiBwcm9jZXNzLmVudlxuICB9XG59KSJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1U7QUFBQSxFQUM5VDtBQUFBLEVBQ0E7QUFBQSxPQUNLO0FBRVA7QUFBQSxFQUNFO0FBQUEsT0FDSztBQUNQLE9BQU8sU0FBUztBQUNoQixPQUFPLGlCQUFpQjtBQVRpTCxJQUFNLDJDQUEyQztBQVkxUCxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNLFFBQVEsSUFBSSxxQkFBcUI7QUFBQSxFQUN2QyxTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixZQUFZO0FBQUEsRUFDZDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUk7QUFBQSxRQUFJO0FBQUEsUUFDekI7QUFBQSxNQUFlLENBQUM7QUFBQSxJQUNwQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFdBQVc7QUFBQTtBQUFBLEVBQ1gsUUFBUTtBQUFBLElBQ04sZUFBZSxRQUFRO0FBQUEsRUFDekI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
