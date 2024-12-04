import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import {Link} from "react-router";
const Body = () => {
  // listOfRestaurants - original list of restaurants fetched from API
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  // filteredRestaurants - list of restaurants after applying filters
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // searchText - search text entered by user
  const [searchText, setSearchText] = useState("");

  // Body will render first and then useEffect will run
  useEffect(() => {
    fetchRestaurants();
  }, []);

  // fetch restaurants from API
  const fetchRestaurants = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    // set the original list of restaurants and filtered list of restaurants
    setListOfRestaurant(data?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(data?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  // filter top rated restaurants
  const topRatedRestaurantsFilter = () => {
    const filtredList = listOfRestaurants.filter((res) => res.info.avgRating >= 4.0);
    setFilteredRestaurants(filtredList);
  };

  // filter veg only restaurants
  const vegOnly = () => {
    const filtredList = listOfRestaurants.filter((res) => res.info.veg === true);
    setFilteredRestaurants(filtredList);
  };

  // filter based on search
  const search = () => {
    const filtredList = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredRestaurants(filtredList);
  }

  // reset filters to original list
  const resetFilters = () => {
    setFilteredRestaurants(listOfRestaurants);
    setSearchText("");
  };

  // Shimmer Effect until data is fetched (conditional rendering) and then render the data
  return listOfRestaurants.length === 0 ? <Shimmer/> : (
    <div className="body">
      {/* Search */}
      <div className="search">
        <input type="text" className="search-input" value={searchText} placeholder="Search for restaurants" onChange={(e)=>{setSearchText(e.target.value)}}/>
        <button className="search-button" onClick={search}>Search</button>
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
        {filteredRestaurants?.map((data) => {
          return <Link key={data.info.id} to={"/restaurant/"+data.info.id}><RestaurantCard resData={data} /> </Link>;
        })}
      </div>
    </div>
  );
};

export default Body;
