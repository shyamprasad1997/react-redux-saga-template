import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { RouteWithLayout } from "./components";
import { Main as MainLayout, Minimal as MinimalLayout } from "./layouts";

const Routes = () => {
  return (
    <Switch>
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
