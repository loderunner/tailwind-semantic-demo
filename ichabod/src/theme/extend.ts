import { CustomThemeConfig } from "tailwindcss/types/config";

// Extensions to default theme
export default {
  colors: {
    sun: {
      "50": "hsl(53 83% 95%)",
      "100": "hsl(55 90% 88%)",
      "200": "hsl(53 89% 76%)",
      "300": "hsl(51 90% 63%)",
      "400": "hsl(48 88% 53%)",
      "500": "hsl(46 85% 47%)",
      "600": "hsl(41 88% 40%)",
      "700": "hsl(36 84% 32%)",
      "800": "hsl(33 74% 28%)",
      "900": "hsl(29 66% 25%)",
      "950": "hsl(26 77% 14%)",
    },
  },
} satisfies Partial<CustomThemeConfig>;
