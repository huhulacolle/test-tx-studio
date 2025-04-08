"use client";

import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";
import Tabs from "@/components/ui/Tabs";
import SelectScreen from "../enum/SelectScreen";
import { useState } from "react";
import Account from "@/components/pages/dashboard/Account";
import InfoFinance from "@/components/pages/dashboard/InfoFinance";

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
    <div className="bg-[#f7f8fb] h-full flex flex-col gap-11 py-20">
      <div className="px-20 flex flex-col gap-11">
        <div className="flex justify-between">
          <div className="font-bold text-4xl">Bonjour Claudette !</div>
          <div>
            <Avatar />
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <Tabs name={ScreenArray} funct={selectScreen} selected={Screen} />
          </div>
          <div>
            <Button name="Demander un financement" variant="tertiary" />
          </div>
        </div>
      </div>

      {Screen == SelectScreen.PRET ? (
        <div className="pl-20 flex flex-col gap-11">
          <Account />
          <InfoFinance />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
