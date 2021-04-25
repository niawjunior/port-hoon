import React, { FC, lazy } from "react";
import "./App.less";
import "tailwindcss/tailwind.css";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./pages/about";
const Home = lazy(() => import("./pages/home"));

const App: FC = () => {
  return (
    <Switch>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route path="/">
        <Redirect to="/home"></Redirect>
      </Route>
    </Switch>
  );
};

export default App;
