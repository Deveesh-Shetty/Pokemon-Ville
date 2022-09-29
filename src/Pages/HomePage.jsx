import React from "react";
import MainHeader from "../Components/Home/Components/MainHeader";
import Navbar from "../Components/UI Components/Navbar/Navbar";
import "../Components/Home/Home.css";

function HomePage() {
  return (
    <main id="home">
      <Navbar />
      <MainHeader />
    </main>
  );
}

export default HomePage;
