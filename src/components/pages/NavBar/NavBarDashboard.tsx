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
      icon: <IoPersonCircleOutline className="size-8 md:size-10" />,
    },
    {
      name: "Mes transactions",
      url: "/dashboard/transactions",
      icon: <FaArrowRightArrowLeft className="size-8 md:size-10" />,
    },
    {
      name: "Mes clients",
      url: "/dashboard/clients",
      icon: <FaPerson className="size-8 md:size-10" />,
    },
    {
      name: "Assistance",
      url: "/dashboard/assistance",
      icon: <FaHeadset className="size-8 md:size-10" />,
    },
  ];

  const button2 = [
    {
      name: "Mes notifications",
      url: "/dashboard/notifications",
      icon: <IoIosNotificationsOutline className="size-8 md:size-10" />,
    },
    {
      name: "Réglages",
      url: "/dashboard/settings",
      icon: <CiSettings className="size-8 md:size-10" />,
    },
  ];

  const pathname = usePathname();

  return (
    <>
      <div className="fixed top-0 w-16 md:w-96 bg-white">
        <nav className="items-center h-screen flex flex-col md:gap-14 gap-6 overflow-y-auto mx-auto">
          <div className="flex mt-4 md:mt-16">
            <Link href="/">
              <Image
                src={logo}
                alt="liqtrade"
                className="h-10 w-48 object-contain"
              />
            </Link>
          </div>
          <div className="flex flex-col gap-5 w-full md:px-6 px-2">
            {button1.map((b, i) => (
              <Link
                key={i}
                href={b.url}
                className={`rounded-md flex items-center max-md:justify-center gap-5 px-2 py-3 text-[#9E9E9E] ${
                  pathname == b.url ? "text-liqtrade-blue bg-[#F2F3F899]" : ""
                } hover:text-liqtrade-blue hover:bg-[#F2F3F899]`}
              >
                <div>{b.icon}</div>
                <div className="max-md:hidden">{b.name}</div>
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-5 w-full md:px-6 px-2 max-md:mt-2">
            {button2.map((b, i) => (
              <Link
                key={i}
                href={b.url}
                className={`rounded-md flex items-center max-md:justify-center gap-5 px-2 py-3 text-[#9E9E9E] ${
                  pathname == b.url
                    ? "text-liqtrade-blue  bg-[#F2F3F899]"
                    : ""
                } hover:text-liqtrade-blue hover:bg-[#F2F3F899]`}
              >
                <div>{b.icon}</div>
                <div className="max-md:hidden">{b.name}</div>
              </Link>
            ))}
          </div>
          <div className="mt-auto mb-5 flex items-center gap-5">
            <div>
              <Avatar />
            </div>
            <div className="hidden md:flex flex-col">
              <p className="font-bold">Claudette Archambault</p>
              <p className="text-sm">
                Statut Vérification KYC :{" "}
                <span className="text-liqtrade-green font-bold">Valide</span>
              </p>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
