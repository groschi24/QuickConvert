import { readFileSync } from "fs";
import { join } from "path";
import { NextResponse } from "next/server";

type CategoryGroup = {
  id: string;
  label: string;
};

type CategoryGroupsConfig = {
  groups: CategoryGroup[];
};

export async function GET() {
  try {
    const filePath = join(process.cwd(), "src/config/categoryGroups.json");
    const fileContent = readFileSync(filePath, "utf-8");
    const data = JSON.parse(fileContent) as CategoryGroupsConfig;

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error reading category groups:", error);
    return NextResponse.json(
      { error: "Failed to load category groups" },
      { status: 500 },
    );
  }
}
