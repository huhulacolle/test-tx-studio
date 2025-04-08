"use client";

import Image from "next/image";
import logo from "@/assets/logos/logoliqtrade.jpg";

import Link from "next/link";
import { FaArrowRightArrowLeft, FaHeadset, FaPerson } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { CiSettings } from "react-icons/ci";
import Avatar from "@/components/ui/Avatar";

export default function NavBarDashbardComponent() {
  const button1 = [
    {
      name: "Tableau de Bord",
      url: "/dashboard",
      icon: <IoPersonCircleOutline className="size-10" />,
    },
    {
      name: "Mes transactions",
      url: "/dashboard/transactions",
      icon: <FaArrowRightArrowLeft className="size-10" />,
    },
    {
      name: "Mes clients",
      url: "/dashboard/clients",
      icon: <FaPerson className="size-10" />,
    },
    {
      name: "Assistance",
      url: "/dashboard/assistance",
      icon: <FaHeadset className="size-10" />,
    },
  ];

  const button2 = [
    {
      name: "Mes notifications",
      url: "/dashboard/notifications",
      icon: <IoIosNotificationsOutline className="size-10" />,
    },
    {
      name: "Réglages",
      url: "/dashboard/settings",
      icon: <CiSettings className="size-10" />,
    },
  ];

  const pathname = usePathname();

  return (
    <nav className="w-96 items-center h-screen flex flex-col gap-14 overflow-y-auto">
      <div className="flex mt-16">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="liqtrade"
            className="h-10 w-48 object-contain"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-5">
        {button1.map((b, i) => (
          <Link
            key={i}
            href={b.url}
            className={`flex items-center gap-5 pl-5 pr-28 py-3 text-[#9E9E9E] ${
              pathname == b.url ? "text-liqtrade-blue bg-[#F2F3F899]" : ""
            } hover:text-liqtrade-blue hover:bg-[#F2F3F899]`}
          >
            <div>{b.icon}</div>
            <div>{b.name}</div>
          </Link>
        ))}
      </div>
      <div>
        <div className="flex flex-col gap-5">
          {button2.map((b, i) => (
            <Link
              key={i}
              href={b.url}
              className={`flex items-center gap-5 pl-5 pr-28 py-3 text-[#9E9E9E] ${
                pathname == b.url ? "text-liqtrade-blue  bg-[#F2F3F899]" : ""
              } hover:text-liqtrade-blue hover:bg-[#F2F3F899]`}
            >
              <div>{b.icon}</div>
              <div>{b.name}</div>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-auto mb-5 flex items-center gap-5">
        <div>
          <Avatar />
        </div>
        <div className="flex flex-col">
          <p className="font-bold">Claudette Archambault</p>
          <p className="text-sm">
            Statut Vérification KYC :{" "}
            <span className="text-liqtrade-green font-bold">Valide</span>
          </p>
        </div>
      </div>
    </nav>
  );
}
