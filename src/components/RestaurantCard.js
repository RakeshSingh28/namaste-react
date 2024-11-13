import { CDN_URL } from "../utils/constants";
import { RATING_ICON_URL, AVG_RATING_ICON_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    name = "",
    cuisines = [],
    avgRating = 0,
    sla = {},
    cloudinaryImageId = "",
    areaName = "",
    aggregatedDiscountInfoV3 = {},
  } = resData?.info || {};
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
        <h3>{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
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
                ></img>
                <div>{avgRating}</div>
              </h5>
              <h5>
                <ul className="slaCss">
                  <li className="list-disc">{sla.slaString}</li>
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

export const RestaurantCardPromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-1 ml-2 mt-1 rounded-lg z-10">
          Ad.
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
