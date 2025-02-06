import { CategoryType } from "./categoryConfigs";

export const categories: CategoryType[] = [
  "common",
  "electricity",
  "engineering",
  "fluid",
  "heat",
  "light",
  "magnetism",
  "other",
  "radiology",
];

type CategoryGroup = {
  name: string;
  categories: CategoryType[];
};

export const categoryGroups: CategoryGroup[] = [
  {
    name: "Common",
    categories: ["common"],
  },
  {
    name: "Physics",
    categories: ["electricity", "heat", "light", "magnetism"],
  },
  {
    name: "Engineering",
    categories: ["engineering", "fluid"],
  },
  {
    name: "Medical",
    categories: ["radiology"],
  },
  {
    name: "Other",
    categories: ["other"],
  },
];
