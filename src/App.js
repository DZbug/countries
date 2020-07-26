import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Country from "./components/countries/Country";
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
              <Route exact path="/country/:alpha3Code" component={Country} />
            </Switch>
          </div>
        </Router>
      </CountryState>
    </AppState>
  );
}

export default App;
