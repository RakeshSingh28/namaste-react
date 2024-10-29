import { CDN_URL } from "../utils/constants";
import { RATING_ICON_URL } from "../utils/constants";

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
      <div className="card-info">
        <h2>{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <div className="ratingEta">
          {avgRating && (
            <>
              <h5>
                <img
                  style={{ height: "20px", width: "20px", marginRight: "8px" }}
                  src={RATING_ICON_URL}
                ></img>{" "}
                {avgRating}
              </h5>
              <h5>
                <ul className="slaCss">
                  <li>{sla.slaString}</li>
                </ul>
              </h5>
            </>
          )}
          {!avgRating && <h5>{sla.slaString}</h5>}
        </div>
        <h5>{costForTwo}</h5>
        <h5>{areaName}</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
