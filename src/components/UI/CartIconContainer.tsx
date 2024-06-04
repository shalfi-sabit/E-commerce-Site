import CircularCounterIcon from "./CircularCounterIcon";
import CartIcon from "../../assets/icons/CartIcon";
import { Link } from "react-router-dom";

type CartIconProps = {
  count: number;
};

const CartIconContainer: React.FC<CartIconProps> = ({ count }) => {
  return (
    <Link className="relative" to="/cart">
      {count > 0 && (
        <CircularCounterIcon
          count={count}
          className="absolute right-[-3px] top-[-3px]"
        />
      )}
      <CartIcon />
    </Link>
  );
};

export default CartIconContainer;
