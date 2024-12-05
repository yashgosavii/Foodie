import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import MenuCard from "./MenuCard";
import { useParams } from "react-router";

const RestaurantMenu = ()=>{
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    useEffect(()=>{fetchMenu();},[])

    const fetchMenu = async()=>{
        const response = await fetch(MENU_API_URL+resId);
        const data = await response.json();
        setResInfo(data.data);
    }
    
    return resInfo===null ? <Shimmer/> : (
        <div className="menu">
            <MenuCard data={resInfo}/>
        </div>
    )
}
export default RestaurantMenu;