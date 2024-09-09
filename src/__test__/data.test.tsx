import { expect, test } from "vitest";
import getMovies from "../app/data/getMovies";

test("getMovies returns all 22 movies", () => {
  const movies = getMovies({});
  expect(movies.length).toBe(22);
});

test("getMovies returns all 8 action movies", () => {
  const movies = getMovies({ genre: "Action" });
  expect(movies.length).toBe(8);
});

test("getMovies returns all 2 french movies", () => {
  const movies = getMovies({ language: "French" });
  expect(movies.length).toBe(2);
});

test("getMovies returns no german adventure movies", () => {
  const movies = getMovies({ genre: "German", language: "German" });
  expect(movies.length).toBe(0);
});
