import json from "@/app/data/movies.json";

export const getGenres = (): string[] => {
  return Array.from(
    new Set(json.Movies.flatMap(({ Genre }) => Genre.split(", "))),
  ).toSorted();
};

export const getLanguages = (): string[] => {
  return Array.from(
    new Set(json.Movies.flatMap(({ Language }) => Language.split(", "))),
  ).toSorted();
};
