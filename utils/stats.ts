export const generateStats = () => {
  const stats = [
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
  const res = await fetch("/api/stats");

  if (!res.ok) throw new Error("Failed to get stats");

  return res.json();
};

export default getStats;
