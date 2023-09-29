import { useState } from "react";

const SearchComponent = (props) => {
  const [searchText, setSearchText] = useState("");

  function filterRestaurants(searchText) {
    console.log("restaurants", props.restaurants);

    console.log("searchText", searchText);
    setSearchText(searchText);

    let filteredRestaurants = props.restaurants.filter((res) =>
      res.name.toLowerCase().includes(searchText.toLowerCase())
    );

    console.log("filteredRestaurants", filteredRestaurants);

    props.updateRestaurants(filteredRestaurants);
  }

  return (
    <div className="m-2 flex">
      <input
        type="text"
        className="border border-solid border-black"
        onChange={(e) => {
          filterRestaurants(e.target.value);
        }}
      ></input>
      <button className="px-4  py-2 bg-gray-100 rounded-lg" onClick={(e) => filterRestaurants(searchText)}>Search</button>
    </div>
  );
};

export default SearchComponent;
