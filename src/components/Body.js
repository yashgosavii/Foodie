import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search for food items" />
        <button>Search</button>
      </div>
      <div className="res-container">
        {/* Meghana Foods */}
        {/* <RestaurantCard resName="Meghana Foods" cuisine="Hyderabadi, Biryani, North Indian" rating="4.5" deliveryTime="10 mins" price="200" /> */}

        {/*Real Data - Idli Spot*/}
        {/* <RestaurantCard resData = {resList[0]} />
          <RestaurantCard resData = {resList[1]} /> */}

        {/*Looping over the resList */}
        {resList?.map((data) => {
          return <RestaurantCard resData={data} key={data.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;