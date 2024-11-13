import { Component } from "react";
import { connect } from "react-redux";
import { RATING_ICON_URL, AVG_RATING_ICON_URL } from "../utils/constants";
import "./MenuItemCard.css";
import { addItem, removeItem } from "../utils/cartSlice";

class MenuItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleAddItem = (item) => {
    this.setState({ count: this.state.count + 1 });
    this.props.dispatch(addItem(item));
  };
  handleRemoveItem = (item) => {
    this.setState({ count: this.state.count - 1 });
    this.props.dispatch(removeItem());
  };

  render() {
    const { name, price, rating, description, img } = this.props.itemInfo;

    return (
      <div className="item-card bg-gray-50 shadow-lg mt-1 rounded-lg">
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
                alt="Rating icon"
              />
              {rating.rating} ({rating.ratingCountV2})
            </h5>
          )}
          <div className="mb-2">{description}</div>
          {this.state.count === 0 ? (
            <button
              className="add-btn cursor-pointer"
              onClick={() => this.handleAddItem(this.props.itemInfo)}
            >
              <b>ADD</b>
            </button>
          ) : (
            <button className="add-btn cursor-default">
              <div
                className="sub-btn"
                onClick={() => this.handleRemoveItem(this.props.itemInfo)}
              >
                <b>–</b>
              </div>
              <b style={{ margin: "0px 24px" }}>{this.state.count}</b>
              <div
                className="more-btn"
                onClick={() => this.handleAddItem(this.props.itemInfo)}
              >
                <b>+</b>
              </div>
            </button>
          )}
        </div>
        {img && (
          <img
            className="item-img"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${img}`}
            alt="Item"
          />
        )}
      </div>
    );
  }
}

export default connect()(MenuItemCard);
