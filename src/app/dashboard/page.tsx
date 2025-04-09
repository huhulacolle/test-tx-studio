"use client";

import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";
import Tabs from "@/components/ui/Tabs";
import SelectScreen from "../enum/SelectScreen";
import { useState } from "react";
import Account from "@/components/pages/dashboard/Account";
import InfoFinance from "@/components/pages/dashboard/InfoFinance";
import Transaction from "@/components/pages/dashboard/Transaction";

export default function DashboardPage() {
  const [Screen, setScreen] = useState(SelectScreen.PRET);

  const ScreenArray = ["Mes prêts", "Mes factures"];

  const selectScreen = (screen: number) => {
    if (screen == 0) {
      setScreen(SelectScreen.PRET);
    } else {
      setScreen(SelectScreen.FACTURE);
    }
  };

  return (
    <div className="bg-[#f7f8fb] min-h-screen h-full flex flex-col gap-11 py-20 md:px-20 px-4">
      <div className=" flex flex-col gap-11">
        <div className="flex justify-between">
          <div className="font-bold md:text-4xl text-xl">Bonjour Claudette !</div>
          <div className="hidden md:flex">
            <Avatar />
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <Tabs name={ScreenArray} funct={selectScreen} selected={Screen} />
          </div>
          <div className="md:flex hidden">
            <Button name="Demander un financement" variant="tertiary" />
          </div>
        </div>
      </div>

      {Screen == SelectScreen.PRET ? (
        <div className="flex flex-col gap-11">
          <Account />
          <InfoFinance />
          <Transaction />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
