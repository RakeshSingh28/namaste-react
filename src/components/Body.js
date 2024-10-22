import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [resData, changeState] = useState(restaurants);
  const [searchVal, changeSearchVal] = useState("");

  return (
    <div className="body ">
      <form role="search" className="search">
        <input
          type="search"
          placeholder="Search By Restaurant..."
          aria-label="Search"
          value={searchVal}
          onChange={(e) => {
            changeSearchVal(e.target.value);
            if (e.target.value === "") changeState(restaurants);
          }}
        />
        <button
          type="submit"
          className="search-btn"
          onClick={() => {
            if (searchVal) {
              const filteredRestaurants = restaurants.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchVal.toLowerCase())
              );
              changeState(filteredRestaurants);
            } else changeState(restaurants);
          }}
        >
          Search
        </button>
      </form>
      <button
        className="filter-btn"
        onClick={() => {
          changeState(
            resData.filter((restaurant) => restaurant.info.avgRating > 4.5)
          );
        }}
      >
        Top Rated Restaurnts
      </button>
      <div className="res-container">
        {resData.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
