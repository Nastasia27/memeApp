export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Vite + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "List",
      href: "/list",
    },
    {
      label: "Table",
      href: "/table-page",
    },
  ],
  navMenuItems: [
    {
      label: "List",
      href: "/list",
    },
    {
      label: "Table",
      href: "/table-page",
    },
  ],
  links: {
    github: "https://github.com/frontio-ai/heroui",
    telegram: "https://twitter.com/hero_ui",
  },
};
