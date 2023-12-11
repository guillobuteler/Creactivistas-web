"use client";

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
export default function AllAxisRadar({ totals }: AllAxisRadarProps) {
  const [I, E, N, S, T, F, P, J] = totals.map((axes) => parseInt(axes));

  const primaryBlue = "rgb(0, 154, 203)";
  const primaryBlueBg = "rgba(0, 154, 203,.2)";
  const primaryGreen = "rgb(0, 191, 183)";

  const alphaYellow = "rgba(255, 255, 0, .5)";
  const alphaRed = "rgba(255, 0, 0, .5)";
  const alphaGreen = "rgba(0, 128, 0, .5)";
  const alphaBlue = "rgba(0, 0, 204, .5)";
  const bgDataSet = [
    {
      label: "Aire",
      data: [25, 18, 0, 0, 0, 0, 0, 18],
      fill: true,
      backgroundColor: alphaYellow,
      borderWidth: 0,
      pointRadius: 0,
      order: 1,
    },
    {
      label: "Fuego",
      data: [0, 18, 25, 18, 0, 0, 0, 0],
      fill: true,
      backgroundColor: alphaRed,
      borderWidth: 0,
      pointRadius: 0,
      order: 2,
    },
    {
      label: "Tierra",
      data: [0, 0, 0, 18, 25, 18, 0, 0],
      fill: true,
      backgroundColor: alphaGreen,
      borderWidth: 0,
      pointRadius: 0,
      order: 2,
    },
    {
      label: "Agua",
      data: [0, 0, 0, 0, 0, 18, 25, 18],
      fill: true,
      backgroundColor: alphaBlue,
      borderWidth: 0,
      pointRadius: 0,
      order: 2,
    },
  ];

  const data = {
    labels: [
      "iNtuition",
      "Introversion",
      "Thinking",
      "Extroversion",
      "Sensing",
      "Perceiving",
      "Feeling",
      "Judging",
    ],
    datasets: [
      ...bgDataSet,
      {
        label: "Totales",
        data: [N, I, T, E, S, P, F, J],
        fill: false,
        borderWidth: 2,
        borderColor: primaryGreen,
        pointRadius: 4,
        pointBackgroundColor: "white",
        pointborderWidth: 1,
        pointBorderColor: "black",
      },
    ],
  };

  return <Radar data={data} />;
}
