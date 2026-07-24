"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { User } from "@nextui-org/user";

import { db } from "@/app/firebase/config";
import { Client } from "@/types";

export default function Clients() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const snap = await getDocs(collection(db, "utilisateurs"));
        setClients(
          snap.docs.map((doc) => ({
            id: doc.id,
            nom: doc.data().nom,
            email: doc.data().email,
            photo: doc.data().photo,
          }))
        );
      } catch (err) {
        console.error("Failed to load clients:", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div>
      <Table aria-label="Liste des clients">
        <TableHeader>
          <TableColumn className="bg-[rgba(153,205,50,0.1)] text-[rgba(11,158,3,0.8)]">
            NOM COMPLET
          </TableColumn>
          <TableColumn className="bg-[rgba(153,205,50,0.1)] text-[rgba(11,158,3,0.8)]">
            EMAIL
          </TableColumn>
        </TableHeader>
        <TableBody
          isLoading={loading}
          emptyContent={loading ? " " : "Aucun client à afficher."}
        >
          {clients.map((client) => (
            <TableRow key={client.id}>
              <TableCell>
                <User
                  avatarProps={{ radius: "lg", src: client.photo }}
                  name={client.nom || "—"}
                />
              </TableCell>
              <TableCell>{client.email || "—"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
