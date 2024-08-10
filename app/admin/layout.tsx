import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
// import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "@/app/providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import Nav from "@/components/navbar2";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function Layout({ children }: any) {
  return (
    <div className="relative flex flex-col h-screen">
      <Nav />
      <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
        {children}
      </main>
    </div>
  );
}
