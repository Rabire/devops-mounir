import { GlobalStats, Stats } from "./types";

export const generateStats = () => {
  const stats: Stats[] = [
    {
      location: "Dieppe",
      kiteNumber: Math.floor(Math.random() * 20000 + 1),
      img: "/dieppe.jpg",
    },
    {
      location: "Marseille",
      kiteNumber: Math.floor(Math.random() * 20000 + 1),
      img: "/marseille.jpg",
    },
    {
      location: "Berk-sur-mer",
      kiteNumber: Math.floor(Math.random() * 20000 + 1),
      img: "/berk.jpg",
    },
  ];

  const total = stats.reduce((sum, array) => sum + array.kiteNumber, 0);

  return { stats, total };
};

const getStats = async () => {
  const response = await fetch("http://localhost:3000/api/stats");

  const apiStats = (await response.json()) as GlobalStats;

  return apiStats;
};

export default getStats;
