import { generateStats } from "@/utils/stats";
import { NextResponse } from "next/server";

export async function GET() {
  const stats = generateStats();

  return NextResponse.json({ stats, total }, { status: 202 });
}

export default GET;
