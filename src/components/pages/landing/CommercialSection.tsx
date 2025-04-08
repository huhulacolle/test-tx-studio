"use client";

import Button from "@/components/ui/Button";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const buttons = ["Prêts", "Affacturage"];

export default function CommercialSection() {
  const [Selected, setSelected] = useState(0);

  return (
    <div className="bg-[#F7F8FB] py-16">
      <div className="flex flex-col md:flex-row justify-between md:px-6 px-4 mx-auto max-w-[1700px]">
        <div className="w-full flex md:gap-7 flex-row md:flex-col mb-8 md:mb-0">
          {buttons.map((t, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`flex items-center gap-3 py-2 px-6 cursor-pointer relative hover:text-liqtrade-green group ${
                Selected == i ? "text-liqtrade-green" : "text-liqtrade-grey"
              }`}
            >
              <p className="text-2xl font-bold relative items-center gap-3 flex">
                {t}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[1px] bg-liqtrade-green inline-block ${
                    Selected == i
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                ></span>
                <FaArrowRightLong
                  className={`${
                    Selected == i ? "text-liqtrade-green" : "text-liqtrade-grey"
                  } group-hover:text-liqtrade-green`}
                />
              </p>
            </button>
          ))}
        </div>

        <div className="w-full flex flex-col gap-5">
          <p>
            Des taux compétitifs en quelques clics. Quel que soit votre projet,
            nous vous accompagnons de manière bienveillante avec les meilleurs
            outils en ligne. Oubliez le parcours du combattant, à vous le
            financement professionnel à court terme. Chez Liqtrade nous vous
            aidons à évoluer à travers des solutions de financement simples,
            efficaces et compétitives en seulement quelques clics.
          </p>
          <p>TPE/PME, comptez sur nous pour vous aider à :</p>
          <ul className="list-disc list-inside text-[#9E9E9E] space-y-1">
            <li>Refinancer son entreprise</li>
            <li>Ouvrir une nouvelle agence</li>
            <li>Faire connaître son entreprise</li>
            <li>Se lancer à l&apos;international</li>
            <li>Digitaliser son entreprise</li>
            <li>Acquérir une entreprise</li>
            <li>Transformer son entreprise</li>
            <li>Financer des projets de développements durables</li>
          </ul>
          <div className="mt-10">
            <Button name="Vidéo de présentation" variant="secondary" />
          </div>
        </div>
      </div>
    </div>
  );
}
