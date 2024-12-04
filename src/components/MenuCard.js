import { DISH_IMG_URL } from "../utils/constants";
const MenuCard = (prop) => {
    const resInfo = prop.data.cards[2]?.card?.card?.info;
    const {itemCards} = prop.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;    
    return (
    <div className="menu-container">
        <div className="res-info">
            <div>
            <h1>{resInfo.name}</h1>
            <p>{resInfo.cuisines.join(',')}</p>
            <p>Location : {resInfo.areaName}</p>
            </div>
            <div>
            <p>{resInfo.costForTwoMessage}</p>
            <p>Avg Rating : {resInfo.avgRatingString} - [{resInfo.totalRatingsString}]</p>
            </div>
        </div>
        <div className="menu-info">
            <h1>Menu</h1>
            {itemCards.map((item) => (
                <div className="dish" key={item.card?.info?.id}>
                <div>
                <p>DISH ID : {item.card?.info?.id}</p>
                <h3>{item.card?.info?.name} {(item.card.info.isVeg !== 1) ? '🔴' : '🟢' } </h3> 
                <p>{item.card?.info?.description}</p>
                <p>Price : {item.card?.info?.defaultPrice/100 || item.card?.info?.price/100}</p>
                </div>
                <div>
                <img src={DISH_IMG_URL+item.card?.info?.imageId} alt={item.card?.info?.name} className="dish-img" />
                <p>Rating : {item.card?.info?.ratings?.aggregatedRating?.rating}</p>
                <button>Add to Cart</button>
                </div>
                </div>
            ))}
            
        </div>
    </div>
    )
}

export default MenuCard;