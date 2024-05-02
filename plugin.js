import plugin from "tailwindcss/plugin";

export default plugin(({ addComponents, theme }) => {
  addComponents({
    ".card-from-plugin": {
      width: "320px",
      height: "200px",

      borderRadius: theme("borderRadius.lg"),

      padding: theme("spacing.8"),

      backgroundColor: theme("colors.neutral.60"),
      borderColor: theme("colors.neutral.70"),
      color: theme("colors.neutral.700"),

      ".dark &": {
        backgroundColor: theme("colors.neutral.500"),
        borderColor: theme("colors.neutral.400"),
        color: theme("colors.neutral.40"),
      },
    },
  });
});
