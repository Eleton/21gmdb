import json from "@/app/data/movies.json";
import { Movie } from "@/types";

const getMovies = ({
  genre,
  language,
}: {
  genre?: null | string;
  language?: null | string;
}): Movie[] => {
  return json.Movies.map(
    ({ Title, Director, Genre, Actors, Language, Plot, Poster }) => ({
      title: Title,
      director: Director,
      genre: Genre.split(", "),
      actors: Actors.split(", "),
      language: Language.split(", "),
      plot: Plot,
      poster: Poster,
    }),
  )
    .filter((movie) => !genre || movie.genre.includes(genre))
    .filter((movie) => !language || movie.language.includes(language));
};

export default getMovies;
