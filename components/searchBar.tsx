"use client";

import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps): JSX.Element {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
        placeholder="Search contacts..."
      />
      <button
        onClick={handleSearch}
        className="ml-2 px-4 py-2 bg-primary hover:bg-blue-700 text-white rounded-lg"
      >
        Search
      </button>
    </div>
  );
}