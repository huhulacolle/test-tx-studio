import CardWhite from "@/components/ui/CardWhite";
import { FaPen } from "react-icons/fa6";
import ScrollContainer from "react-indiana-drag-scroll";
import dollar from "@/assets/images/money.png";
import Image from "next/image";

export default function Account() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="text-2xl font-bold">Mon Compte</div>
      <ScrollContainer className="cursor-grab focus:cursor-grabbing flex gap-5">
          <CardWhite>
            <div className="flex flex-col h-full">
              <div className="flex md:ml-72 ml-52">
                <div className="text-white bg-black p-1.5 rounded-sm cursor-pointer">
                  <FaPen />
                </div>
              </div>
              <div className="mt-auto">
                <p className="font-bold md:text-lg text-base">Claudette Archambault</p>
                <p className="text-liqtrade-grey md:text-lg text-base">14 rue du Louvre</p>
                <p className="text-liqtrade-grey md:text-lg text-base">PARIS 75001</p>
              </div>
            </div>
          </CardWhite>

          <CardWhite>
            <div className="flex flex-col h-full">
              <div className="text-liqtrade-grey">
                <p>Segment</p>
              </div>
              <div className="ml-48 mt-auto">
                <p className="text-liqtrade-blue text-4xl font-bold">RET</p>
              </div>
            </div>
          </CardWhite>

          <CardWhite>
            <div className="flex flex-col h-full">
              <div className="text-liqtrade-grey">
                <p>Évalution des risques</p>
                <p className="text-liqtrade-green font-bold">Risques faible</p>
              </div>
              <div className="ml-48 mt-auto">
                <p className="text-liqtrade-green text-5xl font-bold">B</p>
              </div>
            </div>
          </CardWhite>

          <CardWhite>
            <div className="flex flex-col h-full">
              <div className="text-liqtrade-grey">
                <p>Score risque</p>
                <p className="font-bold text-black">Lorem Ipsum</p>
              </div>
              <div className="ml-48 mt-auto">
                <p className="text-liqtrade-green text-5xl font-bold"></p>
              </div>
            </div>
          </CardWhite>

          <CardWhite>
            <div className="flex flex-col h-full">
              <div className="text-liqtrade-grey">
                <p>Montant dernière transaction</p>
                <p className="font-bold text-liqtrade-blue text-5xl">80K</p>
              </div>
              <div className="mt-auto ml-20 md:h-30 md:w-36 h-20 w-20 object-contain">
                <Image alt="dollar" src={dollar} />
              </div>
            </div>
          </CardWhite>
      </ScrollContainer>
    </div>
  );
}
