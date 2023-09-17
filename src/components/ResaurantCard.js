import { CDN_URL } from "../utils/constant";

const ResaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines, costForTwo, cloudinaryImageId } = resData?.info;

  return (
    <div className="m-4 p-4 w-64 h-80 flex flex-col justify-between bg-green-50 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-green-100 hover:shadow-lg">
      <img
        className="res-logo w-full h-32 object-cover rounded-t-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <div className="text-left">
        <h3 className="text-xl font-semibold">{name}</h3>
        <h4 className="text-sm text-gray-600">{cuisines.join(", ")}</h4>
        <h4 className="text-sm">{avgRating} stars</h4>
        <h4 className="text-sm">{costForTwo} for two</h4>
      </div>
    </div>
  );

};


// *** Higher Order Components ***

export const withPromotedLabel = (ResaurantCard) => {
  return (props) => {
    return (
      <div >
      <label className="relative  bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
      <ResaurantCard {...props} />
    </div>
    
    )
  }
}

export default ResaurantCard;
