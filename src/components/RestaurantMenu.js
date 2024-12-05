import Shimmer from "./Shimmer";
import MenuCard from "./MenuCard";
import { useParams } from "react-router";
import useFetchRestMenu from "../utils/useFetchRestMenu";

const RestaurantMenu = ()=>{ 
    const {resId} = useParams();
    
    // creating custom hook to fetch menu of the restaurant with resId
    const resInfo = useFetchRestMenu(resId);
    
    return resInfo===null ? <Shimmer/> : (
        <div className="menu">
            <MenuCard data={resInfo}/>
        </div>
    )
}
export default RestaurantMenu;