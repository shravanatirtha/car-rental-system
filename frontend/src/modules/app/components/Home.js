import React, { useState, useEffect } from "react";
import "./App.css";
import { config } from "../../../config/constants.js";

const Home = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(config.BASE_PATH + "/hello")
      .then((response) => response.text())
      .then((error) => {
        setMessage(error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={process.env.PUBLIC_URL + "/assets/logo.svg"}
          className="App-logo"
          alt="logo"
        />
        <h1 className="App-title">{message}</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
};

export default Home;
