import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import PokemonsPage from "./Pages/PokemonsPage";
import PokemonPage from "./Pages/PokemonPage";
import "./App.css";
import LoaderPage from "./Pages/LoaderPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemons" element={<PokemonsPage />} />
          <Route path="/pokemon/:pokemonName" element={<PokemonPage />} />
          <Route path="/loading" element={<LoaderPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
