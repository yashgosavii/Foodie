import MenuItems from "./MenuItems";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
const RestaurantMenuCategory = ({ data, isOpen, setShowIndex }) => {
  return (
    <div>
      {/* Accordion Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-sm p-4 rounded-sm">
        <div
          className="flex justify-between cursor-pointer"
          onClick={setShowIndex}
        >
          <span className="font-semibold">
            {data.title + " (" + data.itemCards.length + ")"}
          </span>
          <span>{isOpen ? <FaCaretUp/> : <FaCaretDown/>}</span>
        </div>
        {/* Accordion Body */}
        {isOpen && <MenuItems items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantMenuCategory;
