import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import "./App.scss";
import AppState from "./context/app/AppState";
import CountryState from "./context/country/CountryState";

function App() {
  return (
    <AppState>
      <CountryState>
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </Router>
      </CountryState>
    </AppState>
  );
}

export default App;
