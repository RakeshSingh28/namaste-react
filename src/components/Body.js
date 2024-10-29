import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantData, changeRestaurantData] = useState([]);
  const [resData, changeState] = useState([]);
  const [searchVal, changeSearchVal] = useState("");
  const [searchedValue, setSearchedValue] = useState("");
  const [dataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setDataLoading(true);
      const response1 = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6924004&lng=88.4653367&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!response1.ok) {
        throw new Error(`GET request failed with status: ${response1.status}`);
      }

      const jsonData = await response1.json();

      // const response2 = await fetch(
      //   "https://www.swiggy.com/dapi/restaurants/list/update",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      // body: JSON.stringify({ lat: 22.6924004, lng: 88.4653367 }),
      //   }
      // );

      // if (!response2.ok) {
      //   throw new Error(`POST request failed with status: ${response2.status}`);
      // }

      // const jsonData1 = await response2.json();

      const combinedRestaurants =
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      changeRestaurantData(combinedRestaurants);
      changeState(combinedRestaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setDataLoading(false);
    }
  };

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
      </form>
      <div className="res-container">
        {resData.map((restaurant) => (
          <Link
            to={`/restaurant/${restaurant?.info?.id}`}
            key={restaurant?.info?.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
