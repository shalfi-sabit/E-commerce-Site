import { RootState } from "../../../redux-store/redux-store";
import { useSelector } from "react-redux";
import truncateTitle from "../../../utils/truncateTitle";
import SearchResultsRow from "./SearchResultRow";

const SearchResults = () => {
  const searchResultItems = useSelector(
    (state: RootState) => state.search.searchResultItems
  );
  return (
    <div className="w-full px-1 bg-white-900 absolute rounded shadow-md max-h-[250px] overflow-y-scroll overflow-x-hidden text-[12px] flex flex-col gap-2 mt-1 z-[3]">
      {searchResultItems.map((item) => (
        <SearchResultsRow
          id={item.id}
          title={truncateTitle(item.title, 20)}
          image={item.image}
          category={item.category}
        />
      ))}
    </div>
  );
};

export default SearchResults;
