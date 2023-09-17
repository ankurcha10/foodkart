import React, { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="w-11/12 mx-auto my-4 bg-white border border-gray-200 rounded-lg">
      <div
        className={`flex justify-between items-center p-4 cursor-pointer ${
          showItems ? "border-b-2 border-indigo-500" : ""
        }`}
        onClick={handleClick}
      >
        <span className="text-xl font-semibold text-gray-800">
          {data.title} ({data.itemCards.length})
        </span>
        <span className={`text-xl ${showItems ? "transform rotate-180" : ""}`}>
          &#9660;
        </span>
      </div>
      {/* Place the ItemsList component here */}
      {showItems && (
        <div className="p-4 border-t border-gray-200">
          <ItemsList items={data.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
