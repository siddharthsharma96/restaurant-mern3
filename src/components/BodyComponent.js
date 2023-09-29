import RestaurantCard from "./RestaurantCard";
import SearchComponent from "./Search";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useOnline } from "../common/useOnline";

const restaurantDetails = [
  {
    id: "1",
    name: "Bhatura Co",
    avgRating: "3.3",
    cuisines: ["Fast Food, Beverages"],
  },
  {
    id: "2",
    name: "Big Bowl",
    avgRating: "4.3",
    cuisines: ["Fast Food, Beverages"],
  },
  {
    id: "3",
    name: "Third Wave Coffee",
    avgRating: "4.3",
    cuisines: ["Fast Food, Beverages"],
  },
  {
    id: "4",
    name: "Oye Yummy Paratha",
    avgRating: "4.0",
    cuisines: ["Fast Food, Beverages"],
  },
  {
    id: "5",
    name: "Steamed & Fried",
    avgRating: "4.3",
    cuisines: ["Fast Food, Beverages"],
  },
];

const BodyComponent = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  function updateRestaurants(filteredRestaurants) {
    console.log("list of filetred", filteredRestaurants);
    setFilteredRestaurants(filteredRestaurants);
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Offline, Please check your Internet Connection</h1>;
  }

  function getRestaurants() {
    console.log("fetching restaurants");

     //setAllRestaurants(restaurantDetails);
     //setFilteredRestaurants(restaurantDetails);

    fetch("http://localhost:9000/api/restaurants")
      .then((res) => res.json())
      .then((response) => {
        console.log("response", response);
        setAllRestaurants(response);
        setFilteredRestaurants(response);
      });
  }

  function filterTopRatedRestaurants() {
    const topRatedRest = filteredRestaurants.filter(
      (restaurant) => restaurant.avgRating > 4.0
    );

    setFilteredRestaurants(topRatedRest);
  }

  return (
    <div className="body">
      <div className="filter-bar">
        <SearchComponent
          restaurants={allRestaurants}
          updateRestaurants={updateRestaurants}
        />
        <button
          className="top-rated-restaurants"
          onClick={filterTopRatedRestaurants}
        >
          Top Rated Restaurants
        </button>
      </div>

      {filteredRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap">
          {filteredRestaurants.map((res) => {
            return (
              <Link to={`restaurant/${res._id}`} key={res._id}>
                <RestaurantCard key={res._id} res_details={res} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BodyComponent;
