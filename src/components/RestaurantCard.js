import { CDN_URL } from "../common/constants";

function RestaurantCard(props) {
  const { name, avgRating, cuisines, cloudinaryImageId } = props.res_details;
  return (
    <div data-testid="resCard" className="res-card bg-gray-100 rounded-lg">
      <img
        className="rounded-lg res-image"
        src= {CDN_URL + cloudinaryImageId }
        alt="restaurant"
      ></img>

      <div className="res-details">
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h3> {avgRating}</h3>
        <h4> {cuisines}</h4>
      </div>
    </div>
  );
}

export default RestaurantCard;
