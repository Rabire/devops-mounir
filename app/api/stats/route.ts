/* eslint-disable import/prefer-default-export */
import { generateStats } from "@/utils/stats";
import { NextResponse } from "next/server";

export async function GET() {
  const stats = generateStats();

  return NextResponse.json(stats, { status: 202 });
}
