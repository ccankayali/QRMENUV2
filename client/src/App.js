import React, { useState, useEffect } from "react";
import Sidebar from "./Home/Sidebar";
import Loading from "./Home/Loading";

import Home from "./Components/Home";
import Breakfast from "./Components/Breakfast";
import Burger from "./Components/Burger";
import Pizza from "./Components/Pizza";
import Mangal from "./Components/Mangal";
import Meat from "./Components/Meat";
import Beyaz from "./Components/Beyaz";
import Salat from "./Components/Salat";
import Desert from "./Components/Desert";
import Coffee from "./Components/Coffee";
import Hot from "./Components/Hot";
import Cold from "./Components/Cold";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="position-fixed">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Sidebar changePage={changePage} currentPage={currentPage} />
          <div className="content">
            {currentPage === "Home" && <Home />}
            {currentPage === "Breakfast" && <Breakfast />}
            {currentPage === "Burger" && <Burger />}
            {currentPage === "Pizza" && <Pizza />}
            {currentPage === "Mangal" && <Mangal />}
            {currentPage === "Meat" && <Meat />}
            {currentPage === "Beyaz" && <Beyaz />}
            {currentPage === "Salat" && <Salat />}
            {currentPage === "Desert" && <Desert />}
            {currentPage === "Coffee" && <Coffee />}
            {currentPage === "Hot" && <Hot />}
            {currentPage === "Cold" && <Cold />}
          </div>
        </>
      )}
    </div>
  );
}

export default App;