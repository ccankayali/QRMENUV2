import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Breakfast from "./Components/Breakfast";
import Burger from "./Components/Burger";
import Pizza from "./Components/Pizza";


function App() {
  const  [currentPage, setCurrentPage] = useState("Breakfast");

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="position-fixed">
      <Sidebar changePage={changePage} currentPage={currentPage} />
      <div className="content">
        {currentPage === "Breakfast" && <Breakfast />}
        {currentPage === "Burger" && <Burger />}
        {currentPage === "Pizza" && <Pizza />}
      </div>
    </div>
  );
}

export default App;
