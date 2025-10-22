import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig } from "vite";
import svgLoader from "vite-svg-loader";

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue(), svgLoader({ defaultImport: "url" }), tailwindcss()],
    resolve: {
        alias: { "@": path.resolve(__dirname, "./src") },
    },
    base: "/weather-app",
});
