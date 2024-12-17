import { DISH_IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";
import { ToastContainer, toast } from "react-toastify";
const MenuItems = ({ items }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatching action to addItem to cart
    // dispatch(addItem(data))
    // { payload : "data"};
    toast.success("Item added to cart");
    dispatch(addItem(item));
  }

  return (
    <div>
  {items.map((item) => (
    <div
      key={item.card.info.id}
      className="p-2 m-2 border-b-4 border-gray-600 flex justify-between"
    >
      <div className="py-2 text-left w-9/12">
        { item.card.info.isVeg ? '🟩' : '🟥'} 
        <p className="font-semibold text-md">{item.card.info.name}</p>
        <p className="font-medium">
          {" ₹" + (item.card.info.defaultPrice / 100 || item.card.info.price / 100)}
        </p>
        <p className="font-thin text-sm">{item.card.info.description}</p>
      </div>
      <div className="w-2/12 m-2">
      <div className="absolute">
        <button className="bg-green-400 text-white rounded-md" onClick={() => handleAddItem(item)} >Add to Cart</button>
        <ToastContainer />
      </div>
        <img
          src={DISH_IMG_URL + item.card.info.imageId}
          alt={item.card.info.name}
          className="object-cover w-32 h-30 rounded-md shadow-md"
        />
      </div>
    </div>
  ))}
</div>
  );
};

export default MenuItems;
