import SearchList from "@/components/SearchList";
import Sidebar from "@/components/Sidebar";

export default function Home() {
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
          <SearchList />
        </main>
      </div>
    </div>
  );
}
