import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { RESTAURANT_MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      RESTAURANT_MENU_API + id + "&catalog_qa=undefined&submitAction=ENTER"
    );

    const jsonData = await data.json();
    setResMenu(jsonData.data);
  };

  if (resMenu === null) return <Shimmer />;
  const { name, costForTwoMessage, cuisines, avgRating, sla, areaName, cloudinaryImageId } =
    resMenu?.cards?.[2]?.card?.card?.info;
  const itemCards =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards;

  return (
    <div className="menu card-info">
      <div className="res-info-design" >
        <div>
        <h2>{name}</h2>
        <div className="ratingEta">
          <h4>⭐️ {avgRating}</h4>
          <h4>
            <ul className="slaCss">
              <li>{costForTwoMessage}</li>
            </ul>
          </h4>
        </div>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{sla.slaString}</h5>
        <h5>{areaName}</h5>
        </div>
        <div><img style={{height: '200px', width: '300px', borderRadius: '5px'}} src={CDN_URL + cloudinaryImageId} /></div>
      </div>
      <h3>Menu - </h3>
      <ul>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name}{" "}
            <b> - Rs.{(item?.card?.info?.price || item?.card?.info?.defaultPrice )/ 100}</b>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
