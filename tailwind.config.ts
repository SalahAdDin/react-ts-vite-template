import type { Config } from "tailwindcss";

import forms from "@tailwindcss/forms";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [forms],
} satisfies Config;
