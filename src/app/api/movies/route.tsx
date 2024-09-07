import json from "@/app/data/movies.json";
import { Movie } from "@/types";

export async function GET() {
  const data: Movie[] = json.Movies.map(
    ({ Title, Genre, Director, Actors, Plot, Poster }) => ({
      title: Title,
      genre: Genre.split(", "),
      director: Director,
      actors: Actors.split(", "),
      plot: Plot,
      poster: Poster,
    }),
  );
  return Response.json(data);
}
