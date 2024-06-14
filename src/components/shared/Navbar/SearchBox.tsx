import { ChangeEvent, Suspense, useEffect, useRef, useState } from "react";
import SearchIcon from "../../../assets/icons/SearchIcon";
import SearchResults from "./SearchResults";
import { useDispatch } from "react-redux";
import { searchResultActions } from "../../../redux-store/slices/searchResult";
import { Await, useRouteLoaderData } from "react-router-dom";
import product from "../../../models/product";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { products } = useRouteLoaderData("root") as any;

  const handleOnChange = (
    event: ChangeEvent<HTMLInputElement>,
    loadedProducts: product[]
  ) => {
    setSearchText(event.target.value);

    if (Array.isArray(loadedProducts)) {
      const matchedItems: product[] = loadedProducts.filter((item: any) => {
        const enteredValue = event.target.value.toLowerCase();
        const isTitleMatched = item.title.toLowerCase().includes(enteredValue);
        const isCategoryMatched = item.category
          .toLowerCase()
          .includes(enteredValue);
        return isTitleMatched || isCategoryMatched;
      });

      dispatch(searchResultActions.handleProductAdd(matchedItems));
    }
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
    <Suspense>
      <Await resolve={products}>
        {(products) => (
          <div
            className="relative"
            ref={ref}
            onFocus={() => setIsFocused(true)}
          >
            <div className="bg-gray-100 rounded flex items-center w-fit">
              <input
                type="text"
                name="search-box"
                id="search-box"
                placeholder="What are you looking for?"
                className="bg-gray-100 rounded text-[10px] sm:text-[12px] focus:border-none focus:outline-none pl-3 sm:pl-4 py-2"
                value={searchText}
                onChange={(event) => handleOnChange(event, products)}
              />
              <div className="px-4">
                <SearchIcon />
              </div>
            </div>
            {searchText && isFocused && <SearchResults />}
          </div>
        )}
      </Await>
    </Suspense>
  );
}
