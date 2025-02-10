import { readdirSync } from "fs";
import { join } from "path";

// Get all category files from the config/categories directory
const categoryFiles = readdirSync(join(process.cwd(), "src/config/categories"));

// Extract category names from the JSON files
const categoryNames = categoryFiles
  .filter((file) => file.endsWith(".json"))
  .map((file) => {
    // Remove .json extension to get the category name
    return file.replace(/\.json$/, "");
  });

// Generate the UnitCategory type
export type UnitCategory = (typeof categoryNames)[number];
