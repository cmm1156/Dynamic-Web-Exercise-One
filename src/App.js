import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import ArticleListing from "./containers/ArticleListing";
import Article from "./containers/Article";

function App() {
  // this is JavaScript
  return (
    // This is React JSX
    //Note that className is not same as class
    <div className="App">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
      </style>

      <Router>
        <Switch>
          <Route path="/article/:id">
            <Article />
          </Route>
          <Route path="/">
            <ArticleListing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
