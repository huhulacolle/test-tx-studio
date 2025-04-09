"use client";

import CardWhite from "@/components/ui/CardWhite";
import Tabs from "@/components/ui/Tabs";
import { useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { FaFileDownload } from "react-icons/fa";

const tabs = ["Actifs", "En attente", "Clos"];

const loans = [
  {
    name: "Prêt Société",
    contractNumber: "13452789",
    borrowerId: "UK567UI8",
    requestedAmount: "39 234€",
    loanAmount: "39 234€",
    monthlyPayment: "700€",
    desiredDuration: "18 mois",
  },
  {
    name: "Prêt HotDoggs",
    contractNumber: "67547800",
    borrowerId: "UK567UI8",
    requestedAmount: "12 300€",
    loanAmount: "En attente",
    monthlyPayment: "En attente",
    desiredDuration: "14 mois",
  },
];

const loan2 = [
  {
    name: "Prêt Société",
    interestRate: "3%",
    commission: "Lorem Ipsum",
    globalRate: "3",
    requestDate: "01/11/2019",
    lastDueDate: "01/04/2022",
    status: "Validé",
  },
  {
    name: "Prêt HotDoggs",
    interestRate: "8%",
    commission: "Lorem Ipsum",
    globalRate: "5",
    requestDate: "04/09/2021",
    lastDueDate: "En attente",
    status: "En attente",
  },
];

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Accord ouverture", "Accord demande", "Évaluation des risques"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function Transaction() {
  const [Screen, setScreen] = useState(0);

  return (
    <div className="flex flex-col gap-5">
      <div className="text-2xl font-bold">Transactions</div>
      <Tabs funct={setScreen} selected={Screen} name={tabs} green />
      <ScrollContainer className="cursor-grab focus:cursor-grabbing flex md:gap-10 gap-5 flex-nowrap">
        <CardWhite>
          <div className="flex flex-col items-center">
            <div className="flex justify-between w-full">
              <div className="text-sm">En attente</div>
              <div className="text-sm text-liqtrade-grey">Prêt HotDoggs</div>
            </div>
            <div className="md:w-72 w-52 h-auto">
              <Doughnut data={data} />
            </div>
            <div className="text-sm mt-2">
              Pour déclencher la prochaine étape de validation, veuillez nous
              joindre :
            </div>
            <div className="flex items-center gap-1 text-liqtrade-grey text-sm">
              <FaFileDownload />
              <div>Dossier super important.pdf</div>
            </div>
          </div>
        </CardWhite>
      </ScrollContainer>
      <ScrollContainer className="cursor-grab focus:cursor-grabbing flex gap-5">
        <CardWhite>
          <table className="table-auto border-collapse md:text-sm text-xs text-left">
            <thead className="">
              <tr className="text-liqtrade-blue">
                <th className="md:px-4 md:py-2 px-2 py-1">Nom</th>
                <th className="md:px-4 md:py-2 px-2 py-1">Numéro de contrat</th>
                <th className="md:px-4 md:py-2 px-2 py-1">
                  Identifiant emprunteur
                </th>
                <th className="md:px-4 md:py-2 px-2 py-1">Montant demandé</th>
                <th className="md:px-4 md:py-2 px-2 py-1">Montant du prêt</th>
                <th className="md:px-4 md:py-2 px-2 py-1">Mensualité</th>
                <th className="md:px-4 md:py-2 px-2 py-1">Durée souhaitée</th>
              </tr>
            </thead>
            <tbody>
              {loans.map((loan, index) => (
                <tr key={index}>
                  <td className="md:px-4 md:py-2 px-2 py-1">{loan.name}</td>
                  <td className="md:px-4 md:py-2 px-2 py-1">
                    {loan.contractNumber}
                  </td>
                  <td className="md:px-4 md:py-2 px-2 py-1">
                    {loan.borrowerId}
                  </td>
                  <td className="md:px-4 md:py-2 px-2 py-1">
                    {loan.requestedAmount}
                  </td>
                  <td className="md:px-4 md:py-2 px-2 py-1">
                    {loan.loanAmount}
                  </td>
                  <td className="md:px-4 md:py-2 px-2 py-1">
                    {loan.monthlyPayment}
                  </td>
                  <td className="md:px-4 md:py-2 px-2 py-1">
                    {loan.desiredDuration}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardWhite>
      </ScrollContainer>
      <ScrollContainer className="cursor-grab focus:cursor-grabbing flex gap-5">
        <CardWhite>
          <table className="table-auto border-collapse md:text-sm text-xs text-left">
            <thead className="">
              <tr className="text-liqtrade-blue">
                <th className="md:px-4 md:py-2 px-2 py-1">Nom</th>
                <th className="md:px-4 md:py-2 px-2 py-1">
                  Taux d&apos;intérêt
                </th>
                <th className="md:px-4 md:py-2 px-2 py-1">Commission</th>
                <th className="md:px-4 md:py-2 px-2 py-1">
                  Taux Effect Global
                </th>
                <th className="md:px-4 md:py-2 px-2 py-1">
                  Date de la demande
                </th>
                <th className="md:px-4 md:py-2 px-2 py-1">
                  Date dernière échéance
                </th>
                <th className="md:px-4 md:py-2 px-2 py-1">
                  Statut de la demande
                </th>
              </tr>
            </thead>
            <tbody>
              {loan2.map((loan2, index) => (
                <tr key={index}>
                  <td className="md:px-4 md:py-2 px-2 py-1">{loan2.name}</td>
                  <td className="md:px-4 md:py-2 px-2 py-1">
                    {loan2.interestRate}
                  </td>
                  <td className="md:px-4 md:py-2 px-2 py-1">
                    {loan2.commission}
                  </td>
                  <td className="md:px-4 md:py-2 px-2 py-1">
                    {loan2.globalRate}
                  </td>
                  <td className="md:px-4 md:py-2 px-2 py-1">
                    {loan2.requestDate}
                  </td>
                  <td className="md:px-4 md:py-2 px-2 py-1">
                    {loan2.lastDueDate}
                  </td>
                  <td
                    className={`md:px-4 md:py-2 px-2 py-1 ${
                      loan2.status === "Validé"
                        ? "text-green-500"
                        : "text-gray-500"
                    }`}
                  >
                    {loan2.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardWhite>
      </ScrollContainer>
    </div>
  );
}
