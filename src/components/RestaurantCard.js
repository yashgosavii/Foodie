import { RestaurantIMG_URL } from "../utils/constants";
const RestaurantCard = (prop) => {  
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId,id} = prop.resData?.info;
    const slaString = prop.resData?.info.sla.slaString;
    RestaurantCard
    return (
      <div className="res-card m-4 p-4 w-[250px] bg-white dark:bg-slate-800 rounded-md cursor-pointer">
        {/* <p>Restaurant Id : {id}</p> */}
        <img className="res-image rounded-md" src={RestaurantIMG_URL+cloudinaryImageId} alt="restaurant-image"/>
        <div className="flex justify-between">
        <h3 className="font-bold font-mono py-4 text-xl dark:text-white ">{name}</h3> 
        <p className="font-bold font-mono py-4 px-0 text-md dark:text-white ">{avgRating}</p>
        </div>
        <p className="dark:text-white ">{cuisines.join(', ')}</p>
        <p className="dark:text-white ">Delivery Time : {slaString}</p>
        <p className="dark:text-white ">Price : Rs. {costForTwo}</p>

      </div>
    )
  }
export default RestaurantCard;

export const RestaurantWithDiscount = (RestaurantCard) => {
  return (prop) => {
    const data = prop?.resData?.info?.aggregatedDiscountInfoV3;
    return (
      <div>
        {
          data?.header && data?.subHeader &&
          <label className="absolute bg-black/30 text-white m-8 p-2 rounded-lg font-bold">{data?.header+" "+data?.subHeader}</label>
        }
        <RestaurantCard {...prop} />
      </div>
    )
  }
}
  