import JustForYou from "./JustForYou";
import Wrapper from "../../UI/Wrapper";
import WishListItems from "./WishListItems";
import OutlinedButton from "../../UI/Button/OutlinedButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux-store/redux-store";
import { snackbarActions } from "../../../redux-store/slices/snackbarSlice";
import { wishlistActions } from "../../../redux-store/slices/wishlistSlice";
import { cartActions } from "../../../redux-store/slices/cartSlice";
import EmptyWishlist from "../../EmptyListContainer";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(
    (state: RootState) => state.wishlist.wishlistItems
  );

  const moveAllToBagHandler = () => {
    wishlistItems.forEach((item) => {
      const curProduct = {
        id: item.id,
        title: item.title,
        item: item.price,
        description: item.description,
        category: item.category,
        image: item.image,
        rating: {
          rate: item.rating.rate,
          count: item.rating.count,
        },
      };
      dispatch(cartActions.handleProductAdd(curProduct));
      dispatch(
        snackbarActions.handleSnackbarOpen({
          severity: "success",
          message: "Wishlist products added to cart",
        })
      );
      dispatch(wishlistActions.handleClearWishlist());
    });
  };

  return (
    <Wrapper>
      {wishlistItems.length === 0 && (
        <EmptyWishlist
          title="Your wishlist is empty!"
          subTitle="You've no items in your wishlist."
          secondarySubTitle="Let's go buy something"
        />
      )}
      {wishlistItems.length > 0 && (
        <>
          <div className="flex justify-between items-center mt-10 ">
            <p>Wishlist({wishlistItems.length})</p>
            <OutlinedButton
              text="Move All To Bag"
              onClick={moveAllToBagHandler}
            />
          </div>
          <WishListItems wishlistItems={wishlistItems} />
        </>
      )}
      <JustForYou />
    </Wrapper>
  );
};

export default Wishlist;
