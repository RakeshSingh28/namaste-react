import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import {
  CDN_URL,
  RATING_ICON_URL,
  AVG_RATING_ICON_URL,
} from "../utils/constants";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { id } = useParams();
  const resMenu = useRestaurantMenu(id);

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
  const categories =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="menu card-info">
      <div className="res-info-design">
        <div>
          <h2>{name}</h2>
          <div className="ratingEta">
            {avgRating && (
              <>
                <h4 style={{ display: "flex" }}>
                  <img
                    style={{
                      height: "20px",
                      width: "20px",
                      marginRight: "8px",
                      borderRadius: "50%",
                    }}
                    src={avgRating >= 3 ? RATING_ICON_URL : AVG_RATING_ICON_URL}
                  ></img>
                  {avgRating} (
                  {Math.floor(totalRatings / 1000) === 0
                    ? `${totalRatings} `
                    : `${Math.floor(totalRatings / 1000)}K+ `}
                  ratings)
                </h4>
                <h4>
                  <ul className="slaCss ml-2">
                    <li className="list-disc">{costForTwoMessage}</li>
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
      <h3 className="flex justify-center mt-5"> ~~~ MENU ~~~ </h3>
      {categories.map((category, idx) => (
        //Controlled Component
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          expand={idx === showIndex}
          setShowIndex={() => setShowIndex(idx === showIndex ? null : idx)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
