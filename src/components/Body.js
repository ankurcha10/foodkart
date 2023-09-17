import React, { useEffect, useState, useContext} from "react";
import ResaurantCard, {withPromotedLabel} from "./ResaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/UserContext";
const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setsearchText] = useState("");

  const ResaurantCardPromoted = withPromotedLabel(ResaurantCard)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();

      const restaurants =
        data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setRestaurantData(restaurants);
      setFilteredData(restaurants); // Initialize filtered data with all restaurants
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filterTopRated = () => {
    const topRatedRestaurants = restaurantData.filter(
      (res) => res.info.avgRating >= 4.1
    );
    setFilteredData(topRatedRestaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline. Please check your Internet Connection</h1>
    );

      const {loggedInUser,setUserName} = useContext(userContext)

  return restaurantData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex ">
        <div className="search m-4 p-4 ">
          <input
            type="text"
            className="border border-black p-2 rounded-md"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />

          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaurant = restaurantData.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredData(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
      <div className="m-4 p-4 flex items-center">
      <button className="px-4 py-2 bg-yellow-100 rounded-lg" onClick={filterTopRated}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="search m-4 p-4 flex items-center text-md font-semibold">
          <label>UserName :  </label>
          <input
            className="border border-black p-2 m-1"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
    
      <div className="flex flex-wrap">
        {filteredData.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
           
            {
              restaurant.info.promoted ? (<ResaurantCardPromoted resData={restaurant}/> ):( <ResaurantCard resData={restaurant} />)
            }
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
