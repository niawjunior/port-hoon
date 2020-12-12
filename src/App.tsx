import React, { FC } from "react";
import "./App.less";
import "tailwindcss/tailwind.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home";

const App: FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default App;
