"use client";

import { auth } from "@/app/firebase/config";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";
import { updateEmail, updatePassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Compte() {
  const [user] = useAuthState(auth);
  const userSession = sessionStorage.getItem("user");

  const [nomComplet, setNomComplet] = useState(user?.displayName || "");
  const [userEmail, setUserEmail] = useState(user?.email || "");
  const [userPassword, setUserPassword] = useState("");

  const [btnsDisabled, setBtnsDisabled] = useState(true);

  useEffect(() => {
    setNomComplet(user?.displayName || "");
    setUserEmail(user?.email || "");
  }, [user]);

  useEffect(() => {
    if (
      nomComplet !== user?.displayName ||
      userEmail !== user.email ||
      userPassword !== ""
    ) {
      setBtnsDisabled(false);
    } else {
      setBtnsDisabled(true);
    }
  }, [nomComplet, userEmail, userPassword]);

  console.log({ user });
  console.log(userSession);

  return (
    <div className="h-[calc(100vh-10rem)] w-[100vw-6rem] flex">
      <Avatar className="w-[11rem] h-[11rem]" />
      <Divider orientation="vertical" className="mx-10" />
      <div className="w-[calc(100%-17rem)] pl-5 pr-10 flex flex-col gap-5">
        <p className="text-xl ml-[-1rem]">
          <b>Information du Compte</b>
        </p>
        <Input
          label="Nom complet"
          value={nomComplet}
          onValueChange={setNomComplet}
          variant="bordered"
          classNames={{
            // label: "text-[rgba(11,158,3,0.8)]",
            inputWrapper: [
              "border-2",
              "group-data-[focus=true]:border-[rgba(11,158,3,0.4)]",
              "!cursor-text",
            ],
          }}
          labelPlacement="outside"
          className="h-10"
        />
        <Input
          type="email"
          label="Email"
          value={userEmail}
          onValueChange={setUserEmail}
          variant="bordered"
          classNames={{
            inputWrapper: [
              "border-2",
              "group-data-[focus=true]:border-[rgba(11,158,3,0.4)]",
              "!cursor-text",
            ],
          }}
          labelPlacement="outside"
          className="h-10"
        />
        <Input
          // type="password"
          label="Mot de pass"
          value={userPassword}
          onValueChange={setUserPassword}
          variant="bordered"
          classNames={{
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            inputWrapper: [
              "border-2",
              "group-data-[focus=true]:border-[rgba(11,158,3,0.4)]",
              "!cursor-text",
              "h-10",
            ],
          }}
          labelPlacement="outside"
        />
        <div className="flex justify-end mt-[auto] mb-2 gap-3">
          <Button
            isDisabled={btnsDisabled}
            color="danger"
            variant="flat"
            onClick={() => {
              setNomComplet(user?.displayName || "");
              setUserEmail(user?.email || "");
              setUserPassword("");
            }}
          >
            Annuler
          </Button>
          <Button
            isDisabled={btnsDisabled}
            className="bg-gradient-to-tr from-[rgba(11,158,3,0.8)] to-[rgba(153,205,50,0.8)] shadow-lg text-white font-semibold"
            onClick={() => {
              try {
                let updated = false;
                if (nomComplet !== user?.displayName) {
                  updateProfile(user, {
                    displayName: nomComplet,
                  });
                  updated = true;
                }
                if (userEmail !== user.email) {
                  updateEmail(user, userEmail);
                  updated = true;
                }
                if (userPassword !== "") {
                  updatePassword(user, userPassword);
                  updated = true;
                }

                if (updated) {
                  alert("Les informations ont été mises à jour.");
                  setBtnsDisabled(true);
                }
              } catch (err) {
                console.error(err);
              }
            }}
          >
            Enregistrer
          </Button>
        </div>
      </div>
    </div>
  );
}
