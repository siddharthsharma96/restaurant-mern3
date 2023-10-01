import { CDN_URL } from "../common/constants";
import UserContext from "../common/UserContext";
import { useContext } from "react";

function RestaurantCard(props) {
  const { name, avgRating, cuisines, cloudinaryImageId } = props.res_details;

  const { loggedInUser } = useContext(UserContext);
  return (
    <div data-testid="resCard" className="res-card bg-gray-100 rounded-lg">
      <img
        className="rounded-lg res-image"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant"
      ></img>

      <div className="res-details">
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h3> {avgRating}</h3>
        <h4> {cuisines}</h4>
        <h4>{loggedInUser}</h4>
      </div>
    </div>
  );
}

export default RestaurantCard;
