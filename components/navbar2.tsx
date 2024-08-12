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
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";
import { signOut } from "firebase/auth";

export default function Nav() {
  const pathname = usePathname();

  const [user] = useAuthState(auth);
  const userSession = sessionStorage.getItem("user");

  const deconnecter = () => {
    signOut(auth);
    sessionStorage.removeItem("user");
  };

  return (
    <Navbar shouldHideOnScroll maxWidth="full">
      <NavbarBrand>
        <Logo />
        <p className="font-bold text-inherit">Lolaivy's House</p>
      </NavbarBrand>
      {pathname.startsWith("/admin") ? (
        <>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link
                color="foreground"
                className={
                  pathname === "/admin"
                    ? `text-[rgba(11,158,3,0.8)] font-[500]`
                    : `font-[400]`
                }
                href="/admin"
              >
                Tableau de bord
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link
                color="foreground"
                className={
                  pathname === "/admin/produits"
                    ? `text-[rgba(11,158,3,0.8)] font-[500]`
                    : ``
                }
                href="/admin/produits"
              >
                Produits
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                color="foreground"
                className={
                  pathname === "/admin/clients"
                    ? `text-[rgba(11,158,3,0.8)] font-[500]`
                    : ``
                }
                href={"/admin/clients"}
              >
                Clients
              </Link>
            </NavbarItem>
          </NavbarContent>

          <NavbarContent justify="end">
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="success"
                  name="Jason Hughes"
                  size="sm"
                  src="https://alternative.me/images/avatars/default.png"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem
                  key="profile"
                  className="h-14 gap-2 bg-[rgba(153,205,50,0.1)]"
                  href="/admin/compte"
                >
                  <p className="font-semibold">{user?.displayName}</p>
                  <p className="font-semibold">{user?.email}</p>
                </DropdownItem>
                <DropdownItem key="cote_client" color="primary" href="/">
                  Coté Client
                </DropdownItem>
                <DropdownItem key="produits" href="/admin/produits">
                  Produits
                </DropdownItem>
                <DropdownItem key="clients" href="/admin/clients">
                  Clients
                </DropdownItem>
                <DropdownItem key="configurations">
                  Configurations (future plans🛠️)
                </DropdownItem>
                {/* <DropdownItem key="settings">Parametres</DropdownItem> */}
                <DropdownItem key="help_and_feedback">
                  Aide et Avis (future plans🛠️)
                </DropdownItem>
                <DropdownItem
                  key="logout"
                  color="danger"
                  onClick={() => {
                    deconnecter();
                  }}
                >
                  Deconnecter
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>
        </>
      ) : (
        <>
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
            href={!user && !userSession ? "/inscrire" :"/panier"}
          >
            Panier
          </Link>
        </NavbarItem> */}

            <Popover>
              <PopoverTrigger>Panier</PopoverTrigger>
              <PopoverContent>
                Place content for the popover here.
              </PopoverContent>
            </Popover>

            <NavbarItem>
              <Link
                color="foreground"
                className={
                  pathname === "/liste_de_souhaits"
                    ? `text-[rgba(11,158,3,0.8)] font-[500]`
                    : ``
                }
                href={
                  !user && !userSession ? "/inscrire" : "/liste_de_souhaits"
                }
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
                href={!user && !userSession ? "/inscrire" : "/compte"}
              >
                Compte
              </Link>
            </NavbarItem>
          </NavbarContent>

          <NavbarContent justify="end">
            {!user && !userSession ? (
              <>
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
              </>
            ) : (
              <>
                <Dropdown placement="bottom-end">
                  <DropdownTrigger>
                    <Avatar
                      isBordered
                      as="button"
                      className="transition-transform"
                      color="success"
                      name="Jason Hughes"
                      size="sm"
                      src="https://alternative.me/images/avatars/default.png"
                    />
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem
                      key="profile"
                      className="h-14 gap-2 bg-[rgba(153,205,50,0.1)]"
                      href="/compte"
                    >
                      <p className="font-semibold">{user?.displayName}</p>
                      <p className="font-semibold">{user?.email}</p>
                    </DropdownItem>
                    <DropdownItem key="admin" color="primary" href="/admin">
                      Panneau d'administration
                    </DropdownItem>
                    <DropdownItem key="panier" href="/panier">
                      Panier
                    </DropdownItem>
                    <DropdownItem
                      key="liste_de_souhaits"
                      href="liste_de_souhaits"
                    >
                      Liste de souhaits
                    </DropdownItem>
                    <DropdownItem key="configurations">
                      Configurations (future plans🛠️)
                    </DropdownItem>
                    {/* <DropdownItem key="settings">Parametres</DropdownItem> */}
                    <DropdownItem key="help_and_feedback">
                      Aide et Avis (future plans🛠️)
                    </DropdownItem>
                    <DropdownItem
                      key="logout"
                      color="danger"
                      onClick={() => {
                        deconnecter();
                      }}
                    >
                      Deconnecter
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </>
            )}
          </NavbarContent>
        </>
      )}
    </Navbar>
  );
}