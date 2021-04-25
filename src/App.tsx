import React, { FC, lazy } from "react";
import "./App.less";
import "tailwindcss/tailwind.css";
import { Route, Switch } from "react-router-dom";
const Home = lazy(() => import("./pages/home"));

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
