"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";

export default function FilterSystem() {
  const [genre, setGenre] = useState("");
  const [location, setLocation] = useState("");
  const [dateRange, setDateRange] = useState([0, 100]);

  return (
    <div className="mb-8 p-4 bg-white bg-opacity-10 backdrop-blur-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="genre" className="block mb-2">
            Genre
          </label>
          <select
            id="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="w-full p-2 rounded bg-white bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">All Genres</option>
            <option value="rock">Rock</option>
            <option value="pop">Pop</option>
            <option value="electronic">Electronic</option>
            <option value="hip-hop">Hip Hop</option>
          </select>
        </div>
        <div>
          <label htmlFor="location" className="block mb-2">
            Location
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter city or venue"
            className="w-full p-2 rounded bg-white bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
          />
        </div>
        <div>
          <label className="block mb-2">Date Range</label>
          <Slider
            defaultValue={dateRange}
            max={100}
            step={1}
            onValueChange={(value) => setDateRange(value)}
            className="[&>span:first-child]:bg-purple-500 [&_[role=slider]]:bg-purple-500"
          />
        </div>
      </div>
    </div>
  );
}
