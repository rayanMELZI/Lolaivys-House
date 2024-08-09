"use client";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";

import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/button";
import Link from "next/link";

const Inscrire = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSignUp = async () => {
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      console.log({ res });

      if (!res || !res.user) {
        alert("Sign-up failed: Invalid credentials or bad request.");
        return; // Early return to prevent further execution
      }

      sessionStorage.setItem("user", "true");
      setNom("");
      setPrenom("");
      setEmail("");
      setPassword("");
      router.push("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="max-h-screen flex items-center justify-center">
      <div className="p-10 pb-5 rounded-lg shadow-2xl w-96 bg-[#ffffffaa]">
        <h1 className="text-2xl mb-5">Créer un compte</h1>
        <input
          type="text"
          placeholder="Nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          className="w-full p-3 mb-4 shadow-[0px_2px_10px_#eee] rounded outline-none placeholder-gray-500"
        />
        <input
          type="email"
          placeholder="Prénom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          className="w-full p-3 mb-4 shadow-[0px_2px_10px_#eee] rounded outline-none placeholder-gray-500"
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 shadow-[0px_2px_10px_#eee] rounded outline-none placeholder-gray-500"
        />
        <input
          type="password"
          placeholder="Mot de pass"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 shadow-[0px_2px_10px_#eee] rounded outline-none placeholder-gray-500"
        />
        <Button
          size="sm"
          className="w-full  text-sm p-3 bg-[rgba(153,205,50,0.2)] text-[rgba(11,158,3,0.8)] rounded h-15"
          onClick={handleSignUp}
        >
          S'inscrire
        </Button>
        <p className="text-xs text-end mr-2 mt-2">
          vous déjà un compte?{" "}
          <Link href="/connecter" className="text-[rgba(11,158,3,0.8)]">
            connectez-vous!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Inscrire;
