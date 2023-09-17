import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constant";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData(resId);
  }, [resId]);

  const fetchData = async (restaurantId) => {
    try {
      const data = await fetch(MENU_API + restaurantId);
      if (!data.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await data.json();
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
