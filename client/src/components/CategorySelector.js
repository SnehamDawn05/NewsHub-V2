import React from "react";

export default function CategorySelector({ category, setCategory }) {
  const categories = [
    "general",
    "technology",
    "business",
    "entertainment",
    "health",
    "science",
    "sports"
  ];

  return (
    <div className="p-2 border rounded-md shadow bg-white dark:bg-gray-900 dark:border-gray-700">
      <select
        className="p-2 border rounded-md bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((c) => (
          <option key={c} value={c}>
            {c.charAt(0).toUpperCase() + c.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
