import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // State Variable [React Super Powerful Variable]
  // we use hook 'useState'

  const [originalList] = useState(resList);

  const [listOfRestaurants, setListOfRestaurant] = useState(resList);

  // filter top rated restaurants
  const topRatedRestaurantsFilter = () => {
    const filtredList = originalList.filter((res) => res.info.avgRating >= 4.0);
    setListOfRestaurant(filtredList);
  };

  // filter veg only restaurants
  const vegOnly = () => {
    const filtredList = originalList.filter((res) => res.info.veg === true);
    setListOfRestaurant(filtredList);
  };

  // reset filters to original list
  const resetFilters = () => {
    setListOfRestaurant(originalList);
  };

  return (
    <div className="body">
      {/* Search */}
      <div className="search">
        <input type="text" placeholder="Search for food items" />
        <button>Search</button>
      </div>

      <div className="filter">
        {/* Filter - Top Rated Restaurant */}
        <button
          className="topRatedRestaurants"
          onClick={topRatedRestaurantsFilter}
        >
          Top Rated Restaurants
        </button>
        {/* Filter - Veg */}
        <button className="vegOnly" onClick={vegOnly}>
          Veg Only
        </button>
        {/* Filter - Reset */}
        <button className="reset" onClick={resetFilters}>
          Reset Filters
        </button>
      </div>

      {/* Restaurants */}
      <div className="res-container">
        {listOfRestaurants?.map((data) => {
          return <RestaurantCard resData={data} key={data.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
