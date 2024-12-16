import { DISH_IMG_URL } from "../utils/constants";
const MenuItems = ({ items }) => {
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
        <button className="bg-green-400 text-white rounded-md">Add to Cart</button>
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
