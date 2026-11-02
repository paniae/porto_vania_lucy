import { NextResponse } from "next/server";
import { portfolioData } from "@/data/portfolioData";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: portfolioData,
  });
}
