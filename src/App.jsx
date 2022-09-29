import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import PokemonsPage from "./Pages/PokemonsPage";
import PokemonPage from "./Pages/PokemonPage";
import Background from "./Components/UI Components/Background/Background";
import LoaderPage from "./Pages/LoaderPage";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <Background />
      {loading ? (
        <LoaderPage />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pokemons" element={<PokemonsPage />} />
            <Route path="/pokemon/:pokemonName" element={<PokemonPage />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
