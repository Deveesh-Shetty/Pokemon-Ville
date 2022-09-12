import React from "react";
import Background from "../Components/UI Components/Background/Background";
import MainHeader from "../Components/Home/Components/MainHeader";
import Navbar from "../Components/UI Components/Navbar/Navbar";
import "../Components/Home/Home.css";

function HomePage() {
  return (
    <main id="home">
      <Background />
      <Navbar />
      <MainHeader />
    </main>
  );
}

export default HomePage;
