import { readFileSync } from "fs";
import { join } from "path";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await import("@/config/categoryGroups.json").then(
      (m) => m.default,
    );

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error reading category groups:", error);
    return NextResponse.json(
      { error: "Failed to load category groups" },
      { status: 500 },
    );
  }
}
