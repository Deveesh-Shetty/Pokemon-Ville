import React from "react";
import "../Components/Loader/Loader.css";
import LoaderImage from "../Assets/Pokeball.png";

function LoaderPage() {
  return (
    <div id="loader">
      <div>
        <img src={LoaderImage} alt="Loader" className="loader-pokeball" />
      </div>
    </div>
  );
}

export default LoaderPage;
