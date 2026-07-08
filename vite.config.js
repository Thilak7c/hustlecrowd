import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteSitemap from "vite-plugin-sitemap";
import path from "path";

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    viteSitemap({
      hostname: "https://hustlecrowd.my",
      routes: ["/", "/services", "/about", "/portfolio", "/contact"],
      changefreq: "weekly",
      priority: 0.8,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});