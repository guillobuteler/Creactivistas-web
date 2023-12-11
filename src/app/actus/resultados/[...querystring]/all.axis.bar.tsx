"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
type AllAxisRadarProps = {
  totals: string[];
};
export default function AllAxisBar({ totals }: AllAxisRadarProps) {
  const [I, E, N, S, T, F, P, J] = totals.map((axes) => parseInt(axes));

  const data = {
    labels: [
      "Introversion",
      "Extroversion",
      "iNtuition",
      "Sensing",
      "Feeling",
      "Thinking",
      "Perceiving",
      "Judging",
    ],
    datasets: [
      {
        axis: "y",
        label: "as",
        data: [I, E, N, S, F, T, P, J],
        fill: false,
        backgroundColor: [
          "rgba(155, 155, 155, 0.4)",
          "rgba(155, 155, 155, 0.4)",
          "rgba(222, 222, 40, 0.4)",
          "rgba(40, 222, 40, 0.4)",
          "rgba(40, 40, 222, 0.4)",
          "rgba(222, 40, 40, 0.4)",
          "rgba(155, 155, 155, 0.4)",
          "rgba(155, 155, 155, 0.4)",
        ],
        borderColor: [
          "rgba(155, 155, 155, 1)",
          "rgba(155, 155, 155, 1)",
          "rgba(222, 222, 40, 1)",
          "rgba(40, 222, 40, 1)",
          "rgba(40, 40, 222, 1)",
          "rgba(222, 40, 40, 1)",
          "rgba(155, 155, 155, 1)",
          "rgba(155, 155, 155, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    indexAxis: "y" as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },

    responsive: true,
    plugins: {
      legend: { position: "right" as const, display: false },
      title: {
        display: true,
        text: "Valores Totales del Test Actus basado en MBTI:",
        font: { size: 16 },
      },
    },
  };

  return <Bar data={data} options={options} className="mt-5 mb-16"/>;
}
