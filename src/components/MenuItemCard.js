import { Component } from "react";
import { RATING_ICON_URL } from "../utils/constants";
import "./MenuItemCard.css";

class MenuItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    const { name, price, rating, description, img } = this.props.itemInfo;

    return (
      <div className="item-card">
        <div className="item-detail">
          <h3>{name}</h3>
          <b>₹ {price}</b>
          {rating?.rating && (
            <h5 style={{ display: "flex" }}>
              <img
                style={{ height: "20px", width: "20px", marginRight: "8px" }}
                src={RATING_ICON_URL}
              />
              {rating.rating} ({rating.ratingCountV2})
            </h5>
          )}
          <div>{description}</div>
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
              <button
                className="sub-btn"
                onClick={() => {
                  this.setState({ count: this.state.count - 1 });
                }}
              >
                <b> – </b>
              </button>
              {this.state.count > 0 && (
                <b style={{ margin: "0px 24px" }}>{this.state.count}</b>
              )}
              <button
                className="more-btn"
                onClick={() => {
                  this.setState({ count: this.state.count + 1 });
                }}
              >
                <b> + </b>
              </button>
            </button>
          )}
        </div>
        { img && <img
          className="item-img"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${img}`}
        />}
      </div>
    );
  }
}

export default MenuItemCard;
