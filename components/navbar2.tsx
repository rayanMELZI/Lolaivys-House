"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";

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

import { useCart } from "@/context/CartContext";

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const [user] = useAuthState(auth);
  const cart = useCart();
  const userSession =
    typeof window !== "undefined" ? sessionStorage.getItem("user") : null;

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
                  name={user?.displayName || user?.email || "Compte"}
                  size="sm"
                  src={user?.photoURL || undefined}
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

            <Popover>
              <PopoverTrigger
                className={
                  pathname === "/panier"
                    ? `text-[rgba(11,158,3,0.8)] font-[500]`
                    : ``
                }
              >
                Panier
                {cart.totalItems > 0 && (
                  <span className="ml-1 inline-flex items-center justify-center text-xs bg-[rgba(11,158,3,0.9)] text-white rounded-full h-5 min-w-5 px-1">
                    {cart.totalItems}
                  </span>
                )}
              </PopoverTrigger>
              <PopoverContent className="bg-gradient-to-tr from-[rgba(11,158,3,0.9)] to-[rgba(153,205,50,0.9)] text-white p-0 overflow-hidden w-[18rem]">
                <div className="flex flex-col gap-3 pt-2 pb-5 w-full">
                  <h1 className="font-semibold text-center text-lg">Panier</h1>

                  {cart.items.length === 0 ? (
                    <p className="text-center text-sm px-4 py-6 text-white/90">
                      Votre panier est vide.
                    </p>
                  ) : (
                    <>
                      <ul className="w-full flex flex-col gap-2 px-[15px] max-h-[14rem] overflow-y-auto">
                        {cart.items.map((item) => (
                          <li key={item.id} className="flex justify-between">
                            <span className="item">
                              {item.produit}
                              {item.cartQuantity > 1 &&
                                ` ×${item.cartQuantity}`}
                            </span>
                            <span className="price">
                              {item.prix * item.cartQuantity} DZD
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="w-full px-[15px]">
                        <div className="flex justify-between border-t border-white/40 pt-2 font-semibold">
                          <p>Totale:</p>
                          <p>{cart.totalPrice} DZD</p>
                        </div>
                      </div>
                    </>
                  )}

                  <Button
                    isDisabled={cart.items.length === 0}
                    className="w-[10rem] text-[rgb(11,158,3)] h-7 bg-[#ffffff99] font-semibold self-center hover:bg-[#fff] hover:text-[#000]"
                    onClick={() => router.push("/panier")}
                  >
                    Voir le panier
                  </Button>
                </div>
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
