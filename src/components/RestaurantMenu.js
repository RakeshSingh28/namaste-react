import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL, RATING_ICON_URL, RESTAURANT_MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import MenuItemCard from "./MenuItemCard";

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
    setResMenu(jsonData?.data);
  };

  if (resMenu?.cards === null || resMenu?.cards === undefined)
    return <Shimmer />;
  const {
    name,
    costForTwoMessage,
    cuisines,
    avgRating,
    sla,
    areaName,
    cloudinaryImageId,
    totalRatings,
  } = resMenu?.cards?.[2]?.card?.card?.info;
  const itemCards =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards ||
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards ||
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
      ?.itemCards;

  return (
    <div className="menu card-info">
      <div className="res-info-design">
        <div>
          <h2>{name}</h2>
          <div className="ratingEta">
            {avgRating && (
              <>
                <h4 style={{display: 'flex'}}>
                  <img style={{height: '20px', width: '20px', marginRight: '8px'}} src={RATING_ICON_URL}></img> {avgRating} (
                  {Math.floor(totalRatings / 1000) === 0
                    ? totalRatings
                    : `${Math.floor(totalRatings / 1000)}K+`}{" "}
                  ratings)
                </h4>
                <h4>
                  <ul className="slaCss">
                    <li>{costForTwoMessage}</li>
                  </ul>
                </h4>
              </>
            )}
            {!avgRating && (
              <h4 style={{ paddingLeft: "2px" }}>{costForTwoMessage}</h4>
            )}
          </div>
          <h5>{cuisines.join(", ")}</h5>
          <h5>{areaName}</h5>
          <h5>{sla.slaString}</h5>
        </div>
        <div>
          <img
            style={{ height: "200px", width: "300px", borderRadius: "5px" }}
            src={CDN_URL + cloudinaryImageId}
          />
        </div>
      </div>
      <h3
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        {" "}
        ~~~ MENU ~~~{" "}
      </h3>
      <ul>
        {itemCards?.map((item) => (
          <MenuItemCard
            key={item?.card?.info?.id}
            itemInfo={{
              name: item?.card?.info?.name,
              price:
                (item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                100,
              rating: item?.card?.info?.ratings?.aggregatedRating,
              description: item?.card?.info?.description,
              img: item?.card?.info?.imageId,
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
