import React from "react";
import HomeNavigation from "./components/HomeNavigation";
import HomeContent from "./components/HomeContent";
import { Redirect, Route, Switch } from "react-router-dom";
import Student from "./pages/Student";
import Teacher from "./pages/Teacher";

function App() {
  // const userType = window.localStorage.getItem('userType');
  // const redirectUrl = `/${userType}`;
  // const loginState = window.localStorage.getItem('loginState');
  const HomePage = () => <div><HomeNavigation/><HomeContent/></div>
  return (
    <Switch>
      <Route path="/teacher/" component={ Teacher } />
      <Route path="/student/" exact component={ Student } />
      <Route path="/" render={() => (
        // loginState === '1' ? <Redirect to={redirectUrl}/>  : <HomePage />
        <HomePage />
        )}  />
    </Switch>
  );
}

export default App;
