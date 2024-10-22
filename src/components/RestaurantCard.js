import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    sla,
    cloudinaryImageId,
    costForTwo,
    areaName,
  } = resData?.info;
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <div className="ratingEta">
        <h5>⭐️ {avgRating}</h5>
        <h5>
          <ul className="slaCss">
            <li>{sla.slaString}</li>
          </ul>
        </h5>
      </div>
      <h5>{costForTwo}</h5>
      <h5>{areaName}</h5>
    </div>
  );
};

export default RestaurantCard;
