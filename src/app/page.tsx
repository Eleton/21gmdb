import SearchList from "@/components/SearchList";
import Sidebar from "@/components/Sidebar";
import getMovies from "./data/getMovies";

export default async function Home({
  searchParams,
}: {
  searchParams: { genre?: string; language?: string };
}) {
  const { genre, language } = searchParams;

  const movies = getMovies({ genre, language });
  return (
    <div className="flex min-h-screen flex-col font-[family-name:var(--font-geist-sans)]">
      <header className="bg-orange">
        <h1 className="p-4 text-center text-4xl font-semibold text-white">
          21GMDB
        </h1>
      </header>
      <div className="flex grow flex-col items-stretch sm:flex-row">
        <Sidebar />
        <main>
          <SearchList movies={movies} />
        </main>
      </div>
    </div>
  );
}
