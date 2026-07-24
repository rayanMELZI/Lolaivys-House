export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Lolaivy's House",
  description:
    "Lolaivy's House — votre boutique de plantes et d'herbes fraîches.",
  navItems: [
    {
      label: "Shop",
      href: "/",
    },
    {
      label: "Panier",
      href: "/panier",
    },
    {
      label: "Liste de souhaits",
      href: "/liste_de_souhaits",
    },
    {
      label: "Compte",
      href: "/compte",
    },
  ],
  navMenuItems: [
    {
      label: "Compte",
      href: "/compte",
    },
    {
      label: "Panier",
      href: "/panier",
    },
    {
      label: "Liste de souhaits",
      href: "/liste_de_souhaits",
    },
    {
      label: "Panneau d'administration",
      href: "/admin",
    },
  ],
  links: {
    github: "https://github.com/rayanMELZI/Lolaivys-House",
  },
};
