import React from "react";
// import { Route, Switch } from "react-router";

// import Login from "./pages/Login";
// import Index from "./pages/Index/index";
import HomeNavigation from "./components/HomeNavigation";
import HomeContent from "./components/HomeContent";
import { BrowserRouter } from "react-router-dom";


function App(props) {
  return (
    <BrowserRouter>
      <HomeNavigation />
      <HomeContent />
    </BrowserRouter>
  );
}

export default App;
