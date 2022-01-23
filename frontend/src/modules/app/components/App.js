import React from "react";

import { HashRouter as Router } from "react-router-dom";

import Body from "./Body";

const App = () => {
  return (
    <Router basename="/rentberry">
      <Body />
    </Router>
  );
};

export default App;
