"use client";

const Sidebar = () => (
  <div className="flex flex-col gap-4 bg-orange/50 p-4">
    <div className="flex flex-col">
      <label className="px-2 font-semibold" htmlFor="genre-select">
        Genre
      </label>
      <select id="genre-select" className="min-w-40 rounded-md p-1">
        <option>All</option>
      </select>
    </div>
    <div className="flex flex-col">
      <label className="px-2 font-semibold" htmlFor="language-select">
        Language
      </label>
      <select id="language-select" className="min-w-40 rounded-md p-1">
        <option>All</option>
      </select>
    </div>
  </div>
);

export default Sidebar;
