import { MENU_API_URL } from "./constants";
import { useEffect , useState } from "react";
const useFetchRestMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{fetchMenu()},[])
    const fetchMenu = async ()=>{
        const response = await fetch(MENU_API_URL+resId);
        const data = await response.json();
        setResInfo(data.data);
    }
    return resInfo;
}
export default useFetchRestMenu;



