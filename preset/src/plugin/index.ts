import plugin from "tailwindcss/plugin";

export default plugin(({ addBase, theme }) => {
  addBase({
    "html, body": {
      backgroundColor: theme("colors.sun.50"),
    },
  });
});
