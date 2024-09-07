import { Movie } from "@/types";
import Image from "next/image";
import { useState } from "react";

const MovieComponent = ({ movie }: { movie: Movie }) => {
  const [imgSrc, setImgSrc] = useState(movie.poster);
  return (
    <article className="flex w-[480px] bg-black/80 text-white transition-colors hover:bg-black">
      <div className="relative w-1/2">
        <Image
          src={imgSrc}
          alt=""
          width="240"
          height="355"
          priority
          onError={() => setImgSrc("/poster-placeholder.png")}
        />
      </div>
      <div className="w-1/2 p-2">
        <h3 className="text-xl font-bold">{movie.title}</h3>
        <h4 className="text-lg font-semibold italic">{movie.director}</h4>
        <h5 className="font-semibold">{movie.genre.join(", ")}</h5>
        <h5 className="text-sm italic">{movie.actors.join(", ")}</h5>
        <br />
        <div className="text-sm">{movie.plot}</div>
      </div>
    </article>
  );
};

export default MovieComponent;
