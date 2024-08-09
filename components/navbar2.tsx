"use client";

import React from "react";
import { usePathname } from "next/navigation";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import Logo from "../components/Logo";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/popover";

export default function Nav() {
  const pathname = usePathname();
  return (
    <Navbar shouldHideOnScroll maxWidth="full">
      <NavbarBrand>
        <Logo />
        <p className="font-bold text-inherit">Lolaivy's House</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            className={
              pathname === "/"
                ? `text-[rgba(11,158,3,0.8)] font-[500]`
                : `font-[400]`
            }
            href="/"
          >
            Shop
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link
            color="foreground"
            className={
              pathname === "/panier"
                ? `text-[rgba(11,158,3,0.8)] font-[500]`
                : ``
            }
            href="/panier"
          >
            Panier
          </Link>
        </NavbarItem> */}

        <Popover>
          <PopoverTrigger>Panier</PopoverTrigger>
          <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>

        <NavbarItem>
          <Link
            color="foreground"
            className={
              pathname === "/liste_de_souhaits"
                ? `text-[rgba(11,158,3,0.8)] font-[500]`
                : ``
            }
            href="/liste_de_souhaits"
          >
            Liste de souhaits
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className={
              pathname === "/compte"
                ? `text-[rgba(11,158,3,0.8)] font-[500]`
                : ``
            }
            href="/compte"
          >
            Compte
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/connecter" className="text-[rgba(11,158,3,0.8)]">
            Se connecter
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="bg-[rgba(153,205,50,0.3)] text-[rgba(11,158,3,0.8)]"
            href="/inscrire"
            variant="flat"
          >
            S'inscrire
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
