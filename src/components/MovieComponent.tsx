import { Movie } from "@/types";
import Image from "next/image";
import { useState } from "react";
import Marker from "./Marker";

const MovieComponent = ({
  movie,
  search,
}: {
  movie: Movie;
  search: string;
}) => {
  const [imgSrc, setImgSrc] = useState(movie.poster);
  return (
    <article className="flex w-[480px] bg-black/80 text-white transition-colors hover:bg-black">
      <div className="relative w-1/2">
        <Image
          className="h-full object-cover"
          src={imgSrc}
          alt=""
          width="240"
          height="355"
          priority
          onError={() => setImgSrc("/poster-placeholder.png")}
        />
      </div>
      <div className="w-1/2 p-2">
        <h3 className="text-xl font-bold">
          <Marker searchString={search}>{movie.title}</Marker>
        </h3>
        <h4 className="text-lg font-semibold italic">
          <Marker searchString={search}>{movie.director}</Marker>
        </h4>
        <h5 className="font-semibold">
          <Marker searchString={search}>{movie.genre.join(", ")}</Marker>
        </h5>
        <h5 className="text-sm italic">
          <Marker searchString={search}>{movie.actors.join(", ")}</Marker>
        </h5>
        <br />
        <div className="text-sm">
          <Marker searchString={search}>{movie.plot}</Marker>
        </div>
      </div>
    </article>
  );
};

export default MovieComponent;
