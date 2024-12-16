import { useSelector, useDispatch } from "react-redux";
import MenuItems from "./MenuItems";
import { clearCart } from "../store/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store)=> store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = ()=> {
    // dispatch action to clear cart
    dispatch(clearCart());
  }
  return (
    <div className="cart text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button className="bg-red-500 text-white rounded-md p-2" onClick={handleClearCart}>Clear Cart</button>
      <div className="w-6/12 m-auto">
        {cartItems.length === 0 ? <p>Cart is empty</p> : <MenuItems items={cartItems} />}
      </div>
    </div>
  );
};

export default Cart;
