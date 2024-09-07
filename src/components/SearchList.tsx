"use client";

import { Movie } from "@/types";
import MovieComponent from "./MovieComponent";
import { useState } from "react";

const SearchList = ({ movies }: { movies: Movie[] }) => {
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <div className="items-center p-4 sm:items-start">
      <input
        className="w-80 rounded-full border-2 border-black/40 px-2 py-1 outline-orange"
        type="text"
        placeholder="Search for Title, Plot, Director, Actors..."
        onChange={(e) => setSearchFilter(e.target.value)}
      />
      <div className="flex flex-wrap gap-4 pt-4">
        {movies
          .filter(({ title, plot, director, actors }) => {
            return (
              title.toLowerCase().includes(searchFilter.toLowerCase()) ||
              plot.toLowerCase().includes(searchFilter.toLowerCase()) ||
              director.toLowerCase().includes(searchFilter.toLowerCase()) ||
              actors
                .join(", ")
                .toLowerCase()
                .includes(searchFilter.toLowerCase())
            );
          })
          .map((movie) => (
            <MovieComponent
              key={movie.title}
              movie={movie}
              search={searchFilter}
            />
          ))}
      </div>
    </div>
  );
};

export default SearchList;
