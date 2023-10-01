import logo from "./logo.svg";
import React, { Fragment } from "react";
import Header from "./components/Header";
import BodyComponent from "./components/BodyComponent";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import appStore from "./common/appStore";
import UserContext from "./common/UserContext";
import { useState } from "react";

/**
 *  Header
 *    ---- Logo
 *   ---- Navigation bar items
 *
 * Body
 *
 *  ----Search
 * ---- Restaurant Cards
 *
 * Footer
 *  --- Copyright
 * ---- Links
 *
 */

// Component Composition

function App() {
  const [userName, setUserName] = useState("anshika");

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
}

// React.createElement(h1, {} , "Learning Functional Components")
// Babel

export default App;
