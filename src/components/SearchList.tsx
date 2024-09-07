"use client";

import { Movie } from "@/types";
import MovieComponent from "./MovieComponent";

const SearchList = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="items-center p-4 sm:items-start">
      <input
        className="w-80 rounded-full border-2 border-black/40 px-2 py-1"
        type="text"
        placeholder="Search for Title, Plot, Director, Actors..."
      />
      <div className="flex flex-wrap items-start gap-4 pt-4">
        {movies.map((movie) => (
          <MovieComponent key={movie.title} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchList;
