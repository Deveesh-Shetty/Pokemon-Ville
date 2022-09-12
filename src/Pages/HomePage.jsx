import React from "react";
import Background from "../Components/Home/Components/Background";
import MainHeader from "../Components/Home/Components/MainHeader";
import "../Components/Home/Home.css";
import Navbar from "../Components/UI Components/Navbar/Navbar";

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
