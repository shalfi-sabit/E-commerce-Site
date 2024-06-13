import { ChangeEvent, useState } from "react";
import SearchIcon from "../../../assets/icons/SearchIcon";
import { RootState } from "../../../redux-store/redux-store";
import SearchResults from "./SearchResults";
import { useDispatch, useSelector } from "react-redux";
import { searchResultActions } from "../../../redux-store/slices/searchResult";
import { useOnFocus } from "../../../hooks/useOnFocus";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const { isFocused, handleFocus, handleBlur } = useOnFocus();
  const products = useSelector((state: RootState) => state.products.products);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);

    const matchedItems = products.filter((item) => {
      const isTitleMatched = item.title.startsWith(event.target.value);
      const isCategoryMatched = item.category.startsWith(event.target.value);
      return isTitleMatched || isCategoryMatched;
    });

    dispatch(searchResultActions.handleProductAdd(matchedItems));
  };

  return (
    <div className="relative">
      <div className="bg-gray-100 rounded flex items-center w-fit">
        <input
          type="text"
          name="search-box"
          id="search-box"
          placeholder="What are you looking for?"
          className="bg-gray-100 rounded text-[10px] sm:text-[12px] focus:border-none focus:outline-none pl-3 sm:pl-4 py-2"
          value={searchText}
          onChange={handleOnChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <div className="px-4">
          <SearchIcon />
        </div>
      </div>
      {searchText && isFocused && <SearchResults />}
    </div>
  );
}
