// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), 
        about: resolve(__dirname, "About.html"), 
        connect: resolve(__dirname, "connect.html"),
        
        
        
      },
    },
  },
});
