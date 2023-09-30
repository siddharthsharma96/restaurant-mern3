import { useParams } from "react-router-dom";
import { restaurant_info } from "../common/restaurant_info";
import { REST_IMG_URL, CDN_URL } from "../common/constants";

const RestaurantMenu = () => {
  const params = useParams();

  return (
    <div className="flex text-center">
      <div className="rest-menu-list">
        {restaurant_info[0].menu.items.map(item => (
           <div
           data-testid="foodItems"
           key={item.id}
           className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
         >
         <div className="w-9/12">
           <div className="py-2">
             <span>{item.name}</span>
             <span>
                - ₹
               {restaurant_info[0].menu.items[0].price
                   ? restaurant_info[0].menu.items[0].name.price / 100
                   : restaurant_info[0].menu.items[0].name / 100}
              </span>
           </div>
           <p className="text-xs">{restaurant_info[0].menu.items[0].description}</p>
         </div>
         <div className="w-3/12 p-4">
          <div className="absolute">
           <button
             className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
           >
             Add +
           </button>
         </div>
         <img src={CDN_URL + restaurant_info[0].menu.items[0].imageId} className="w-full" />
         </div>
       </div>
          

      ))}
           </div>
           </div>
       
  );
};

export default RestaurantMenu;
