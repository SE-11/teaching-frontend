import React from "react";
import HomeNavigation from "./components/HomeNavigation";
import HomeContent from "./components/HomeContent";
import { Route, Switch } from "react-router-dom";
import Student from "./pages/Student";
import Teacher from "./pages/Teacher";

function App() {
  const HomePage = () => <div><HomeNavigation/><HomeContent/></div>
  return (
    <Switch>
      <Route path="/teacher/" exact component={ Teacher } />
      <Route path="/student/" exact component={ Student } />
      <Route path="/" component={ HomePage } />
    </Switch>
  );
}

export default App;
