"use client";

import Image from "next/image";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

type AllAxisRadarProps = {
  totals: string[];
};

export default function ActusAxisRadar({ totals }: AllAxisRadarProps) {
  const [N, S, T, F] = totals.map((axes) => parseInt(axes));

  const primaryBlue = "rgb(0, 154, 203)";

  const data = {
    labels: ["Aire (N)", "Fuego (T)", "Tierra (S)", "Agua (F)"],

    datasets: [
      {
        label: "",
        data: [N, T, S, F],
        fill: true,
        backgroundColor: "#FFFFFF75",
        borderColor: "black",
        pointBackgroundColor: primaryBlue,
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: primaryBlue,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        max: 25,
        beginAtZero: true,
        pointLabels: { font: { size: 16 } },
        grid: { color: '#45454550'}
      },
    },
    elements: {
      line: {
        borderWidth: 5,
      },
    },
    plugins: { legend: { display: false } },
  };

  return (
    <div className="relative min-w-[450px] min-h-[450px] w-[450px] h-[450px] sm:min-w-[575px] sm:min-h-[575px] sm:w-[575px] sm:h-[575px]">
      <div className="absolute left-[75px] top-[80px] min-w-[290px] min-h-[290px] w-[290px] h-[290px] sm:min-w-[415px] sm:min-h-[415px] sm:w-[415px] sm:h-[415px]">
        <Image
          src="/chart_bg.svg"
          alt="Enneagon Studios Logo"
          className=""
          width={500}
          height={500}
          priority
        />
      </div>
      <div className="absolute left-0 min-w-[450px] min-h-[450px] w-[450px] h-[450px] sm:min-w-[575px] sm:min-h-[575px] sm:w-[575px] sm:h-[575px]">
        <Radar data={data} options={options} className="" />
      </div>
    </div>
  );
}
