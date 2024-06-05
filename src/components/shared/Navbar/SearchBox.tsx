import SearchIcon from "../../../assets/icons/SearchIcon";

export default function SearchBar() {
  return (
    <div className="bg-gray-100 rounded flex items-center w-fit">
      <input
        type="text"
        name="search-box"
        id="search-box"
        placeholder="What are you looking for?"
        className="bg-gray-100 rounded text-[10px] sm:text-[12px] focus:border-none focus:outline-none pl-3 sm:pl-4 py-2"
      />
      <div className="px-4">
        <SearchIcon />
      </div>
    </div>
  );
}
