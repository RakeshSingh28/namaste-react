import { useState, useEffect } from "react";

const useBody = () => {
  const [restaurantData, changeRestaurantData] = useState([]);
  const [resData, changeState] = useState([]);
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

      const response2 = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6924004&lng=88.4653367&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );

      if (!response2.ok) {
        throw new Error(`POST request failed with status: ${response2.status}`);
      }

      const jsonData1 = await response2.json();

      let combinedRestaurants =
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      combinedRestaurants = [
        ...combinedRestaurants,
        { info: jsonData1?.data?.cards[3]?.card?.card?.info },
        { info: jsonData1?.data?.cards[4]?.card?.card?.info },
        { info: jsonData1?.data?.cards[5]?.card?.card?.info },
        { info: jsonData1?.data?.cards[6]?.card?.card?.info },
        { info: jsonData1?.data?.cards[7]?.card?.card?.info },
        { info: jsonData1?.data?.cards[8]?.card?.card?.info },
        { info: jsonData1?.data?.cards[9]?.card?.card?.info },
      ];
      changeRestaurantData(combinedRestaurants);
      changeState(combinedRestaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setDataLoading(false);
    }
  };
  return [restaurantData, resData, changeState, dataLoading];
};

export default useBody;
