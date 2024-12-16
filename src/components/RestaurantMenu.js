import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useFetchRestMenu from "../utils/useFetchRestMenu";
import { useState } from "react";
import RestaurantMenuCategory from "./RestaurantMenuCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  // Fetching menu data using custom hook
  const resInfo = useFetchRestMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  // Extracting required data from the fetched response
  const restaurantInfo = resInfo?.cards[2]?.card?.card?.info;
  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const handleCategoryClick = (index) => {
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <>
      <div className="text-center m-2 p-2">
        <p className="font-bold text-lg m-2">
          {restaurantInfo.name} - {restaurantInfo.areaName}
        </p>
        <p className="font-semibold text-md">
          {restaurantInfo.cuisines.join(", ")} - {restaurantInfo.costForTwoMessage}
        </p>
        {categories.map((category, index) => (
          <RestaurantMenuCategory
            data={category?.card?.card}
            key={category?.card.card.title}
            isOpen={index === showIndex}
            setShowIndex={() => handleCategoryClick(index)}
          />
        ))}
      </div>
    </>
  );
};
export default RestaurantMenu;
