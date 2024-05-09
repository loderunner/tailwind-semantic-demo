import plugin from "tailwindcss/plugin";

export default plugin(({ addBase, addComponents, theme }) => {
  addBase({
    "html, body": {
      backgroundColor: theme("colors.sun.50"),
      "&.dark, dark &": {
        backgroundColor: theme("colors.sun.950"),
      },
    },
  });

  addComponents({
    ".card": {
      width: "320px",
      height: "200px",
      borderRadius: theme("borderRadius.lg"),
      padding: theme("spacing.8"),
      backgroundColor: theme("colors.neutral.100"),
      borderColor: theme("colors.neutral.200"),
      color: theme("colors.neutral.700"),
      "&.dark, .dark &": {
        backgroundColor: theme("colors.neutral.700"),
        borderColor: theme("colors.neutral.200"),
        color: theme("colors.neutral.50"),
      },
    },
  });
});
