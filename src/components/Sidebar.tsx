"use client";

import { getGenres, getLanguages } from "@/app/data/getOptions";
import { useRouter, useSearchParams } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = {
    genre: searchParams.get("genre"),
    language: searchParams.get("language"),
  };

  const updateParams = (query: { genre?: string; language?: string }) => {
    const p = Object.entries({ ...params, ...query })
      .filter(([, value]) => value)
      .map((pair) => pair.join("="))
      .join("&");
    router.push(`?${p}`);
  };

  return (
    <div className="flex flex-col gap-4 bg-orange/50 p-4">
      <div className="flex flex-col">
        <label className="px-2 font-semibold" htmlFor="genre-select">
          Genre
        </label>
        <select
          id="genre-select"
          className="min-w-40 rounded-md p-1 outline-orange"
          value={params.genre || ""}
          onChange={(e) => {
            const genre = e.target.value;
            updateParams({ genre });
          }}
        >
          <option value="">All</option>
          {getGenres().map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col">
        <label className="px-2 font-semibold" htmlFor="language-select">
          Language
        </label>
        <select
          id="language-select"
          className="min-w-40 rounded-md p-1 outline-orange"
          value={params.language || ""}
          onChange={(e) => {
            const language = e.target.value;
            updateParams({ language });
          }}
        >
          <option value="">All</option>
          {getLanguages().map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Sidebar;
