import { useDispatch } from "react-redux";
import { clearCart } from "../common/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <h1>Cart Items</h1>
      <button
        className="m-2 p-2 bg-black text-white rounded-lg"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
    </>
  );
};

export default Cart;
