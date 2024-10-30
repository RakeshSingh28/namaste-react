import { CDN_URL } from "../utils/constants";
import { RATING_ICON_URL, AVG_RATING_ICON_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    sla,
    cloudinaryImageId,
    areaName,
    aggregatedDiscountInfoV3,
  } = resData?.info;
  return (
    <div className="res-card">
      <div className="res-img-card">
        {aggregatedDiscountInfoV3?.header && (
          <h5 className="discount-header">
            {aggregatedDiscountInfoV3.header +
              " " +
              aggregatedDiscountInfoV3.subHeader}
          </h5>
        )}
        <img
          className="res-logo"
          src={CDN_URL + cloudinaryImageId}
          alt="Restaurant Logo"
        />
      </div>
      <div className="card-info">
        <h2>{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <div className="ratingEta">
          {avgRating && (
            <>
              <h5 style={{ display: "flex", alignItems: "center" }}>
                <img
                  style={{
                    height: "20px",
                    width: "20px",
                    marginRight: "8px",
                    borderRadius: "50%",
                  }}
                  src={avgRating >= 3 ? RATING_ICON_URL : AVG_RATING_ICON_URL}
                ></img>{" "}
                <div>{avgRating}</div>
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
        <h5>{areaName}</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
