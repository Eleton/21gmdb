import { NextRequest } from "next/server";
import getMovies from "@/app/data/getMovies";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const genre = searchParams.get("genre");
  const language = searchParams.get("language");

  const data = getMovies({ genre, language });
  return Response.json(data);
}
