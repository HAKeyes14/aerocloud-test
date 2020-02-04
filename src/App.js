import React from "react";
import "./App.css";
import Header from "./Components/Header";
import HotelList from "./Components/HotelList";
import ListSorter from "./Components/ListSorter";

function App() {
  return (
    <div className="App">
      <Header />
      <ListSorter />
      <HotelList />
    </div>
  );
}

export default App;
