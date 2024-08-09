"use client";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Button } from "@nextui-org/button";

const Connecter = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      const res = await signInWithEmailAndPassword(email, password);
      console.log({ res });

      if (!res || !res.user) {
        alert("Sign-in failed: Invalid credentials or bad request.");
        return; // Early return to prevent further execution
      }

      sessionStorage.setItem("user", "true");
      setEmail("");
      setPassword("");
      router.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-h-screen flex items-center justify-center">
      <div className="p-10 pb-5 rounded-lg shadow-2xl w-96 bg-[#ffffffaa]">
        <h1 className="text-2xl mb-5">Connection</h1>
        <input
          type="email"
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
          onClick={handleSignIn}
          size="sm"
          className="w-full  text-sm p-3 bg-[rgba(153,205,50,0.2)] text-[rgba(11,158,3,0.8)] rounded h-15"
        >
          Se connecter
        </Button>
        <p className="text-xs text-end mr-2 mt-2">
          vous n'avez pas un compte?{" "}
          <Link href="/inscrire" className="text-[rgba(11,158,3,0.8)]">
            créer un!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Connecter;
