import { PresetsConfig } from "tailwindcss/types/config";
import plugin from "./plugin";
import theme from "./theme";

export default {
  plugins: [plugin],
  darkMode: "selector",
  theme,
} satisfies PresetsConfig;
