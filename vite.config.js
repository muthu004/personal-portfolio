// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";
import { connect } from "http2";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), // Your main entry point (e.g., home page)
        about: resolve(__dirname, "About.html"), // Additional HTML pages
        connect: resolve(__dirname, "connect.html"),
        
        // Add more entry points for other HTML files as needed
      },
    },
  },
});
