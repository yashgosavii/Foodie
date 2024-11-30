import { RestaurantIMG_URL } from "../utils/constants";
const RestaurantCard = (prop) => {  
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = prop.resData?.info;
    const slaString = prop.resData?.info.sla.slaString;
    
    return (
      <div className="res-card">
        <img className="res-image" src={RestaurantIMG_URL+cloudinaryImageId} alt="restaurant-image"/>
        <h3>{name}</h3>
        <p>{cuisines.join(', ')}</p>
        <p>Rating : {avgRating}</p>
        <p>Delivery Time : {slaString}</p>
        <p>Price : Rs. {costForTwo}</p>
      </div>
    )
  }
  
export default RestaurantCard;
  