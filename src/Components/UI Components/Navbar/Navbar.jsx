import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function Navbar() {
  const primaryNav = useRef(null);
  const toggleBtn = useRef(null);
  const toggleNav = () => {
    if (primaryNav.current.style.display === "none") {
      toggleBtn.current.style.transform = "rotate(90deg)";
      primaryNav.current.style.display = "flex";
    } else {
      primaryNav.current.style.display = "none";
      toggleBtn.current.style.transform = "rotate(0)";
    }
  };
  return (
    <nav>
      <ul ref={primaryNav}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pokemons">Pokemons</Link>
        </li>
        <li>Trainers</li>
        <li>Regions</li>
        <li>About</li>
      </ul>
      <li>
        <FontAwesomeIcon
          icon={faBars}
          color="var(--clr-secondary-400)"
          size="2x"
          className="toggle-btn"
          onClick={toggleNav}
          ref={toggleBtn}
        />
      </li>
    </nav>
  );
}

export default Navbar;
