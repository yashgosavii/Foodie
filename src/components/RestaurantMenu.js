import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useFetchRestMenu from "../utils/useFetchRestMenu";
import { DISH_IMG_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();

  // creating custom hook to fetch menu of the restaurant with resId
  const resInfo = useFetchRestMenu(resId);
  
  // extracting required data from the fetched data
  const restaurantInfo = resInfo?.cards[2]?.card?.card?.info;
  const menuList =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu-container">
      <div className="res-info">
        <div>
          <h1>{restaurantInfo.name}</h1>
          <p>{restaurantInfo.cuisines.join(",")}</p>
          <p>Location : {restaurantInfo.areaName}</p>
        </div>
        <div>
          <p>{restaurantInfo.costForTwoMessage}</p>
          <p>
            Avg Rating : {restaurantInfo.avgRatingString} - [
            {restaurantInfo.totalRatingsString}]
          </p>
        </div>
      </div>
      <div className="menu-info">
        <h1>Menu</h1>
        {menuList.map((item) => (
          <div className="dish" key={item.card?.info?.id}>
            <div>
              <p>DISH ID : {item.card?.info?.id}</p>
              <h3>
                {item.card?.info?.name}{" "}
                {item.card.info.isVeg !== 1 ? "🟥" : "🟩"}{" "}
              </h3>
              <p>{item.card?.info?.description}</p>
              <p>
                Price :{" "}
                {item.card?.info?.defaultPrice / 100 ||
                  item.card?.info?.price / 100}
              </p>
            </div>
            <div>
              <img
                src={DISH_IMG_URL + item.card?.info?.imageId}
                alt={item.card?.info?.name}
                className="dish-img"
              />
              <p>
                Rating : {item.card?.info?.ratings?.aggregatedRating?.rating}
              </p>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;