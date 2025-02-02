import { Category } from "@/types/units";

interface CategorySelectProps {
  value: string;
  categories: Category[];
  onChange: (value: string) => void;
}

export function CategorySelect({
  value,
  categories,
  onChange,
}: CategorySelectProps) {
  const selectId = "category-select";

  return (
    <div className="mb-8">
      <label
        htmlFor={selectId}
        className="mb-2 block text-lg font-medium text-gray-200"
      >
        Category
      </label>
      <select
        id={selectId}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-gray-700 bg-gray-800 p-4 text-lg font-medium text-gray-200 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        aria-label="Select conversion category"
      >
        {categories?.length > 0 ? (
          categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))
        ) : (
          <option value="" disabled>
            No categories available
          </option>
        )}
      </select>
    </div>
  );
}
