import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dotenv from "dotenv";
import envCompatible from "vite-plugin-env-compatible";

dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), envCompatible()],
});
