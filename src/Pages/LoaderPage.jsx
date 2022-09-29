import React from "react";
import "../Components/Loader/Loader.css";
import Background from "../Components/UI Components/Background/Background";

function LoaderPage() {
  return (
    <div id="loader">
      <Background />
      <div>
        <img
          src="Assets/Pokeball.png"
          alt="Loader"
          className="loader-pokeball"
        />
      </div>
    </div>
  );
}

export default LoaderPage;
