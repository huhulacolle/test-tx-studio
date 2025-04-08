"use client";

import Image from "next/image";
import logo from "@/assets/logos/logoliqtrade.jpg";
import Link from "next/link";
import Button from "../../ui/Button";
import { usePathname } from "next/navigation";

export default function NavBarComponent() {
  const link1 = [
    {
      url: "/pret",
      name: "Prêt",
    },
    {
      url: "/Affacturage",
      name: "Affacturage",
    },
  ];

  const link2 = [
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

  const pathname = usePathname();

  if (pathname.startsWith("/dashboard")) {
    return null;
  }

  return (
    <nav className="py-5 px-20 flex justify-between">
      <div className="flex items-center gap-10">
        <div className="mr-16">
          <Link href="/">
            <Image
              src={logo}
              alt="liqtrade"
              className="h-10 w-48 object-contain"
            />
          </Link>
        </div>
        {link1.map((l, i) => (
          <div className="hover:underline" key={i}>
            <Link href={l.url}> {l.name} </Link>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-20">
        <div className="flex gap-9 items-center">
          {link2.map((l, i) => (
            <div key={i} className="hover:underline focus:no-underline">
              <Link href={l.url}> {l.name} </Link>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div> <Link href={"/dashboard"}> <Button variant="outline" name="S'inscrire" /> </Link> </div>
          <div><Link href={"/dashboard"}> <Button name="Se connecter" /> </Link> </div>
        </div>
      </div>
    </nav>
  );
}
