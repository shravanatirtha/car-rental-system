import React from "react";

import { Route, Switch, withRouter } from "react-router-dom";

import Home from "./Home";
import Test from "./Test";

const Body = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/test" component={Test} />
    </Switch>
  );
};

export default withRouter(Body);
