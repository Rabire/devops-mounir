import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const stats = [
    {
      location: "Dieppe",
      kiteNumber: Math.floor(Math.random() * 20000 + 1),
    },
    {
      location: "Marseille",
      kiteNumber: Math.floor(Math.random() * 20000 + 1),
    },
    {
      location: "Berk-sur-mer",
      kiteNumber: Math.floor(Math.random() * 20000 + 1),
    },
  ];

  const total = stats.reduce(function (total, array) {
    return total + array.kiteNumber;
  }, 0);

  return NextResponse.json({ stats, total }, { status: 202 });
}
