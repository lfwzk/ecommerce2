import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Importa los archivos JavaScript

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ...

  // Agrega las rutas de importación de los archivos JavaScript
  build: {
    rollupOptions: {
      input: {
        // Reemplaza las rutas con las rutas correctas de tus archivos JavaScript
        jquery: "../ecommerce-2/js/jquery-1.11.0.min.js",
        plugins: "../ecommerce-2/js/plugins.js",
        script: "../ecommerce-2/js/script.js",
      },
    },
  },
});
