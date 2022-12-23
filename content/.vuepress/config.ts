import { defaultTheme, defineUserConfig } from "vuepress";

export default defineUserConfig({
  title: "Arctic Beard Studio",
  description: "Game Development Since - Not very long ago.",
  theme: defaultTheme({
    logo: "ABS_Text.svg",
    navbar: ["/index.md", "/blog/index.md", "/beards/index.md"],
  }),
});
