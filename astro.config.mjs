// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  //site: "https://kasunperera-dpa.github.io",
  site: "https://digiconsult.solutions",
  //base: "digiConsultV2", // Add this line! No slashes here.
  base: "/", // Add this line! No slashes here.
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
