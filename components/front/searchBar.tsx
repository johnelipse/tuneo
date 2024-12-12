"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log("Searching for:", query);
  };

  return (
    <form onSubmit={handleSearch} className="mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for events, artists, or tracks..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full py-3 px-4 pr-12 rounded-full bg-white bg-opacity-20 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
        >
          <Search className="text-gray-300 hover:text-white transition-colors" />
        </button>
      </div>
    </form>
  );
}
