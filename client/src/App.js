import React, { useState, useEffect } from "react";
import Sidebar from "./Home/Sidebar";
import Loading from "./Home/Loading";
import Breakfast from "./Components/Breakfast";
import Burger from "./Components/Burger";
import Pizza from "./Components/Pizza";


function App() {
  const [currentPage, setCurrentPage] = useState("Breakfast");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

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
            {currentPage === "Breakfast" && <Breakfast />}
            {currentPage === "Burger" && <Burger />}
            {currentPage === "Pizza" && <Pizza />}
          </div>
        </>
      )}
    </div>
  );
}

export default App;