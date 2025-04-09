import ScrollContainer from "react-indiana-drag-scroll";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import CardWhite from "@/components/ui/CardWhite";
import { useState } from "react";
import Tabs from "@/components/ui/Tabs";

export default function InfoFinance() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
  };

  const labels = ["5", "10", "15", "20"];

  const data = {
    labels,
    datasets: [
      {
        label: "Rifi",
        data: labels.map(
          () => Math.floor(Math.random() * (1000 - -1000 + 1)) + -1000
        ),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Fifi",
        data: labels.map(
          () => Math.floor(Math.random() * (1000 - -1000 + 1)) + -1000
        ),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Loulou",
        data: labels.map(
          () => Math.floor(Math.random() * (1000 - -1000 + 1)) + -1000
        ),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const [Screen, setScreen] = useState(0);

  const ScreenArray = [
    "Euribor1w",
    "Euribor2w",
    "Euribor3w",
    "Average Sector Spread",
  ];

  const dataArray = [
    {
      tenor: "7 DAYS",
      marketPlace: "0.0000",
      marketRiskFreeDate: "0",
      marketRiskFreePremium: "0.0000",
      changePercent: "0.0000",
      variation: "1",
    },
    {
      tenor: "30 DAYS",
      marketPlace: "0.0000",
      marketRiskFreeDate: "0",
      marketRiskFreePremium: "0.0000",
      changePercent: "0.0000",
      variation: "9",
    },
    {
      tenor: "90 DAYS",
      marketPlace: "0.0300",
      marketRiskFreeDate: "0.02345",
      marketRiskFreePremium: "0.0300",
      changePercent: "0.0300",
      variation: "0.02345",
    },
    {
      tenor: "180 DAYS",
      marketPlace: "0.03500",
      marketRiskFreeDate: "0.03500",
      marketRiskFreePremium: "0.03500",
      changePercent: "0.03500",
      variation: "0.03500",
    },
    {
      tenor: "360 DAYS",
      marketPlace: "0.004400",
      marketRiskFreeDate: "0.004400",
      marketRiskFreePremium: "0.004400",
      changePercent: "0.004400",
      variation: "0.004400",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="text-2xl font-bold">Informations financières</div>
      <ScrollContainer className="cursor-grab focus:cursor-grabbing">
        <div className="flex gap-5">
          <CardWhite>
            <div className="md:w-2xl w-xl">
              <Line options={options} data={data} />
            </div>
          </CardWhite>
          <CardWhite>
            <div className="flex flex-col">
              <Tabs funct={setScreen} selected={Screen} name={ScreenArray} />
            </div>
            <div>
              <table className="table-auto border-collapse md:text-sm text-xs text-left">
                <thead className="">
                  <tr className="text-liqtrade-blue">
                    <th className="md:px-4 md:py-2 px-2 py-1">Tenor</th>
                    <th className="md:px-4 md:py-2 px-2 py-1">Market Place</th>
                    <th className="md:px-4 md:py-2 px-2 py-1">Market Risk Free Date</th>
                    <th className="md:px-4 md:py-2 px-2 py-1">Market Risk Free Premium</th>
                    <th className="md:px-4 md:py-2 px-2 py-1">Change %</th>
                    <th className="md:px-4 md:py-2 px-2 py-1">Variation</th>
                  </tr>
                </thead>
                <tbody>
                  {dataArray.map((row, index) => (
                    <tr key={index}>
                      <td className="md:px-4 md:py-2 px-2 py-1">{row.tenor}</td>
                      <td className="md:px-4 md:py-2 px-2 py-1">{row.marketPlace}</td>
                      <td className="md:px-4 md:py-2 px-2 py-1">{row.marketRiskFreeDate}</td>
                      <td className="md:px-4 md:py-2 px-2 py-1">{row.marketRiskFreePremium}</td>
                      <td className="md:px-4 md:py-2 px-2 py-1">{row.changePercent}</td>
                      <td className="md:px-4 md:py-2 px-2 py-1">{row.variation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardWhite>
        </div>
      </ScrollContainer>
    </div>
  );
}
