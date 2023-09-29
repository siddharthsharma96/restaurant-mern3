import { Link } from "react-router-dom";
import { useState } from "react";
import AuthModal from "./AuthModal";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-around items-center shadow-lg m-2">
      <div>
        <img
          className="w-20"
          src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000"
          alt="res-logo"
        ></img>
      </div>
      <div className="nav-items">
        <ul className="flex">
          <li className="px-4">
          <Link to="/">Home</Link>
          </li>
         <li className="px-4">
         <Link to="/about">About Us</Link>
         </li>
          <li>
          <Link to="/contact">Contact Us</Link>
          </li>
  
          <li> Cart</li>
          {isLoggedIn ? (
            <button onClick={() => setIsLoggedIn(false)}>Logout</button>
          ) : (
            <button onClick={openModal}>Login</button>
          )}
        </ul>

        <AuthModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
};

export default Header;
