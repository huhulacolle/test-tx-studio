"use client";

import Image from "next/image";
import logo from "@/assets/logos/logoliqtrade.jpg";
import Link from "next/link";
import Button from "../../ui/Button";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";

const leftLinks = [
  {
    url: "/pret",
    name: "Prêt",
  },
  {
    url: "/Affacturage",
    name: "Affacturage",
  },
];

const rightLinks = [
  {
    url: "/simulateur",
    name: "Simulateur",
  },
  {
    url: "/contact",
    name: "Contact",
  },
  {
    url: "/publication",
    name: "Publication",
  },
];

export default function NavBarComponent() {
  const [IsOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  if (pathname.startsWith("/dashboard")) {
    return null;
  }

  return (
    <header>
      <nav className="py-5 md:px-20 px-10 bg-white">
        <div className="flex justify-between">
          <div className="flex items-center gap-10">
            <div className="h-auto md:w-48 w-28">
              <Link href="/">
                <Image src={logo} alt="retour à la page d'accueil" />
              </Link>
            </div>
            <div className="hidden md:flex gap-10">
              {leftLinks.map((l) => (
                <div className="hover:underline" key={l.name}>
                  <Link href={l.url}> {l.name} </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center gap-20">
            <div className="flex gap-9 items-center">
              {rightLinks.map((l) => (
                <div
                  key={l.name}
                  className="hover:underline focus:no-underline"
                >
                  <Link href={l.url}> {l.name} </Link>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <div>
                <Link href={"/dashboard"}>
                  <Button variant="outline" name="S'inscrire" />
                </Link>
              </div>
              <div>
                <Link href={"/dashboard"}>
                  <Button name="Se connecter" />
                </Link>
              </div>
            </div>
          </div>
          <div className="md:hidden flex flex-col">
            <FaBars
              onClick={() => setIsOpen(!IsOpen)}
              className="size-7 cursor-pointer"
            />
          </div>
        </div>
        {IsOpen ? (
          <>
            <div className="flex flex-col items-center gap-10 mt-10">
              {rightLinks.map((l) => (
                <div
                  key={l.name}
                  className="hover:underline focus:no-underline"
                >
                  <Link href={l.url}> {l.name} </Link>
                </div>
              ))}
              <div>
                <Link href={"/dashboard"}>
                  <Button variant="outline" name="S'inscrire" />
                </Link>
              </div>
              <div>
                <Link href={"/dashboard"}>
                  <Button name="Se connecter" />
                </Link>
              </div>
            </div>
          </>
        ) : null}
      </nav>
    </header>
  );
}
