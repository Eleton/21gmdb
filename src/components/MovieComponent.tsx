import { Movie } from "@/types";
import Image from "next/image";
import { useState } from "react";

const MovieComponent = ({
  movie,
  search,
}: {
  movie: Movie;
  search: string;
}) => {
  const [imgSrc, setImgSrc] = useState(movie.poster);

  const mark = (content: string) => {
    if (search === "") return <>{content}</>;
    return content.toLowerCase().includes(search.toLowerCase()) ? (
      <mark className="bg-orange text-white">{content}</mark>
    ) : (
      <>{content}</>
    );
  };
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
        <h3 className="text-xl font-bold">{mark(movie.title)}</h3>
        <h4 className="text-lg font-semibold italic">{mark(movie.director)}</h4>
        <h5 className="font-semibold">{mark(movie.genre.join(", "))}</h5>
        <h5 className="text-sm italic">{mark(movie.actors.join(", "))}</h5>
        <br />
        <div className="text-sm">{mark(movie.plot)}</div>
      </div>
    </article>
  );
};

export default MovieComponent;
