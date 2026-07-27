function SearchBar({ search, setSearch }) {
  return (
    <div className="flex justify-center my-8 px-4">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-xl border-2 border-green-600 rounded-lg px-5 py-3 outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
}

export default SearchBar;