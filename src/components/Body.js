import RestaurantCard, { RestaurantCardPromoted } from "./RestaurantCard";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useBody from "../utils/useBody";
import useInternetStatus from "../utils/useInternetStatus";
import UserContext from "../utils/userContext";

const Body = () => {
  const [searchVal, changeSearchVal] = useState("");
  const [searchedValue, setSearchedValue] = useState("");
  const [userName, setUserName] = useState("");
  const { loggedInUser, setName } = useContext(UserContext);
  const [restaurantData, resData, changeState, dataLoading] = useBody();
  const internetStatus = useInternetStatus();
  const RestaurantCardWithLabel = RestaurantCardPromoted(RestaurantCard);

  if (!internetStatus)
    return (
      <div
        className="body"
        style={{
          display: "grid",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src="/images/no-internet.jpeg" alt="No Internet" />
        <h3>Connect to the Internet</h3>
        <h6 style={{ margin: "0px" }}>
          You are offline. Check your connection.
        </h6>
      </div>
    );

  //Conditional Rendering
  if (resData.length === 0 && !dataLoading)
    return (
      <div className="body ">
        <form role="search" className="search">
          <input
            type="search"
            placeholder="Search By Restaurant..."
            aria-label="Search"
            value={searchVal}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                setSearchedValue(searchVal);
                if (searchVal) {
                  const filteredRestaurants = restaurantData.filter(
                    (restaurant) =>
                      restaurant.info.name
                        .toLowerCase()
                        .includes(searchVal.toLowerCase())
                  );
                  changeState(filteredRestaurants);
                } else changeState(restaurantData);
              }
            }}
            onChange={(e) => {
              changeSearchVal(e.target.value);
              if (e.target.value === "") changeState(restaurantData);
            }}
          />
          <button
            type="button"
            className="search-btn"
            onClick={(e) => {
              e.preventDefault();
              setSearchedValue(searchVal);
              if (searchVal) {
                const filteredRestaurants = restaurantData.filter(
                  (restaurant) =>
                    restaurant.info.name
                      .toLowerCase()
                      .includes(searchVal.toLowerCase())
                );
                changeState(filteredRestaurants);
              } else changeState(restaurantData);
            }}
          >
            Search
          </button>
        </form>
        <div className="empty-container">
          <img src="https://t4.ftcdn.net/jpg/05/86/20/99/360_F_586209953_qUnJcI6blRTETJ5Dgo5K7Y5P1fJO7ItH.jpg"></img>
          <span>No match found for - {searchedValue}</span>
        </div>
      </div>
    );

  return resData.length === 0 && dataLoading ? (
    <Shimmer />
  ) : (
    <div className="body ">
      <form role="search" className="search">
        <input
          type="search"
          placeholder="Search By Restaurant..."
          aria-label="Search"
          value={searchVal}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              setSearchedValue(searchVal);
              if (searchVal) {
                const filteredRestaurants = restaurantData.filter(
                  (restaurant) =>
                    restaurant.info.name
                      .toLowerCase()
                      .includes(searchVal.toLowerCase())
                );
                changeState(filteredRestaurants);
              } else changeState(restaurantData);
            }
          }}
          onChange={(e) => {
            changeSearchVal(e.target.value);
            if (e.target.value === "") changeState(restaurantData);
          }}
        />
        <button
          type="button"
          className="search-btn"
          onClick={(e) => {
            e.preventDefault();
            setSearchedValue(searchVal);
            if (searchVal) {
              const filteredRestaurants = restaurantData.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchVal.toLowerCase())
              );
              changeState(filteredRestaurants);
            } else changeState(restaurantData);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            changeSearchVal("");
            changeState(
              restaurantData.filter(
                (restaurant) => restaurant.info.avgRating >= 4.5
              )
            );
          }}
        >
          Top Rated Restaurnts
        </button>
        <div className="flex items-center">
          <label className="px-2">UserName: </label>
          <input
            className="border-black border p-2 rounded-md"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
              setName(e.target.value);
            }}
          ></input>
        </div>
      </form>
      <div className="res-container">
        {resData.map((restaurant, idx) => (
          <Link
            to={`/restaurant/${restaurant?.info?.id}`}
            key={restaurant?.info?.id + idx}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {restaurant?.info?.promoted ? (
              <RestaurantCardWithLabel resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
