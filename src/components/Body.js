import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
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

  // Theme

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // fetch restaurants from API
  const fetchRestaurants = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    // set the original list of restaurants and filtered list of restaurants
    setListOfRestaurant(
      data?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      data?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // filter top rated restaurants
  const topRatedRestaurantsFilter = () => {
    const filtredList = listOfRestaurants.filter(
      (res) => res.info.avgRating >= 4.0
    );
    setFilteredRestaurants(filtredList);
  };

  // filter veg only restaurants
  const vegOnly = () => {
    const filtredList = listOfRestaurants.filter(
      (res) => res.info.veg === true
    );
    setFilteredRestaurants(filtredList);
  };

  // filter based on search
  const search = () => {
    const filtredList = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtredList);
  };

  // reset filters to original list
  const resetFilters = () => {
    setFilteredRestaurants(listOfRestaurants);
    setSearchText("");
  };

  const getOnlineStatus = useOnlineStatus();

  if (getOnlineStatus === false) {
    return (
      <div className="offline">
        <p>You are offline</p>
      </div>
    );
  }

  // Shimmer Effect until data is fetched (conditional rendering) and then render the data
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* Search */}
      <div className="search-filter flex space-x-2 bg-green-100 items-center justify-center">
      <div className="search m-4 p-4">
        <input type="text" className="border border-solid border-black" value={searchText} placeholder="Search for restaurants"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="px-4 py-2 bg-green-300 m-4 rounded-2xl" onClick={search}> Search </button>
      </div>

      <div className="filter m-4 p-4">
        {/* Filter - Top Rated Restaurant */}
        <button
          className="topRatedRestaurants px-4 py-2 bg-green-300 m-4 rounded-2xl"
          onClick={topRatedRestaurantsFilter}
        >
          Top Rated Restaurants
        </button>
        {/* Filter - Veg */}
        <button className="vegOnly px-4 py-2 bg-green-300 m-4 rounded-2xl" onClick={vegOnly}>
          Veg Only
        </button>
        {/* Filter - Reset */}
        <button className="reset px-4 py-2 bg-red-500 m-4 rounded-2xl" onClick={resetFilters}>
          Reset Filters
        </button>

          {/* Toggle dark ligh mode */}
          <button
        onClick={toggleTheme}
        className="px-4 py-2 text-sm font-medium text-gray-800 bg-gray-200 rounded dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
      >
        Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      </div>
      </div>
      {/* Restaurants */}
      <div className="res-container flex flex-wrap">
        {filteredRestaurants?.map((data) => {
          return (
            <Link key={data.info.id} to={"/restaurant/" + data.info.id}>
              <RestaurantCard resData={data} />{" "}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
