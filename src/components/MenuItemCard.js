import { Component } from "react";
import { RATING_ICON_URL, AVG_RATING_ICON_URL } from "../utils/constants";
import "./MenuItemCard.css";

class MenuItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    const { name, price, rating, description, img } = this.props.itemInfo;

    return (
      <div className="item-card bg-gray-50 shadow-lg mt-1">
        <div className="item-detail">
          <h3>{name}</h3>
          <b className="mb-2">₹ {price}</b>
          {rating?.rating && (
            <h5 style={{ display: "flex" }}>
              <img
                style={{
                  height: "20px",
                  width: "20px",
                  marginRight: "8px",
                  borderRadius: "50%",
                }}
                src={
                  rating?.rating >= 3 ? RATING_ICON_URL : AVG_RATING_ICON_URL
                }
              />
              {rating.rating} ({rating.ratingCountV2})
            </h5>
          )}
          <div className="mb-2">{description}</div>
          {this.state.count == 0 && (
            <button
              className="add-btn"
              onClick={() => {
                this.setState({ count: this.state.count + 1 });
              }}
            >
              {this.state.count == 0 && <b>ADD</b>}
            </button>
          )}
          {this.state.count > 0 && (
            <button className="add-btn">
              <div
                className="sub-btn"
                onClick={() => {
                  this.setState({ count: this.state.count - 1 });
                }}
              >
                <b> – </b>
              </div>
              {this.state.count > 0 && (
                <b style={{ margin: "0px 24px" }}>{this.state.count}</b>
              )}
              <div
                className="more-btn"
                onClick={() => {
                  this.setState({ count: this.state.count + 1 });
                }}
              >
                <b> + </b>
              </div>
            </button>
          )}
        </div>
        {img && (
          <img
            className="item-img"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${img}`}
          />
        )}
      </div>
    );
  }
}

export default MenuItemCard;
