import { ChangeEvent, useEffect, useRef, useState } from "react";
import SearchIcon from "../../../assets/icons/SearchIcon";
import { RootState } from "../../../redux-store/redux-store";
import SearchResults from "./SearchResults";
import { useDispatch, useSelector } from "react-redux";
import { searchResultActions } from "../../../redux-store/slices/searchResult";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const products = useSelector((state: RootState) => state.products.products);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);

    const matchedItems = products.filter((item) => {
      const enteredValue = event.target.value.toLowerCase();
      const isTitleMatched = item.title.toLowerCase().includes(enteredValue);
      const isCategoryMatched = item.category
        .toLowerCase()
        .includes(enteredValue);
      return isTitleMatched || isCategoryMatched;
    });

    dispatch(searchResultActions.handleProductAdd(matchedItems));
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={ref} onFocus={() => setIsFocused(true)}>
      <div className="bg-gray-100 rounded flex items-center w-fit">
        <input
          type="text"
          name="search-box"
          id="search-box"
          placeholder="What are you looking for?"
          className="bg-gray-100 rounded text-[10px] sm:text-[12px] focus:border-none focus:outline-none pl-3 sm:pl-4 py-2"
          value={searchText}
          onChange={handleOnChange}
        />
        <div className="px-4">
          <SearchIcon />
        </div>
      </div>
      {searchText && isFocused && <SearchResults />}
    </div>
  );
}
