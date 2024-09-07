"use client";

const SearchList = () => {
  return (
    <div className="row-start-2 items-center gap-8 p-4 sm:items-start">
      <input
        className="w-80 rounded-full border-2 border-black/40 px-2 py-1"
        type="text"
        placeholder="Search for Title, Plot, Director, Actors..."
      />
    </div>
  );
};

export default SearchList;
