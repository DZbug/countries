import React from "react";
import Search from "../countries/Search";
import Filter from "../countries/Filter";
import Countries from "../countries/Countries";

const Home = () => {
  return (
    <div className="container">
      <form className="form">
        <Search />
        <Filter />
      </form>
      <Countries />
    </div>
  );
};

export default Home;
