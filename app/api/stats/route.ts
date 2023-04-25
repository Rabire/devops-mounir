import { NextResponse } from "next/server";

export async function GET() {
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

  return NextResponse.json({ stats, total }, { status: 202 });
}

export default GET;
