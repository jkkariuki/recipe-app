import React, { useState, useEffect } from "react";
import ResponsiveAppBar from "./components/AppBar";
import FullWidthTextField from "./components/SearchBar";
import RecipeReviewCard from "./components/RecipeCard";
import RecipeResults from "./components/RecipeResults";
import Favorites from "./Pages/Favorites";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";

const favoritesFromLocalStorage = JSON.parse(
  localStorage.getItem("favorites") || "[]"
);

function App() {
  const [recipeResults, setRecipeResults] = useState([]);
  const [favorites, setFavorites] = useState(favoritesFromLocalStorage);

  useEffect(() => {
    const json = JSON.stringify(favorites);
    localStorage.setItem("favorites", json);
  }, [favorites]);

  function onAdd(recipe) {
    console.log(recipe);
    const exist = favorites.find((favorite) => favorite.uri === recipe.uri);

    if (exist) {
      alert("already added this recipe");
      setFavorites(
        favorites.map((fave) => (fave.uri === recipe.uri ? { ...exist } : fave))
      );
    } else {
      alert("recipe added");
      setFavorites([...favorites, recipe]);
    }

    // setFavorites([...favorites, recipe]);
    // console.log(favorites);
  }

  function onDelete(recipe) {
    const exist = favorites.find((fave) => fave.uri === recipe.uri);

    if (exist) {
      //find the cart item and delete it from the cart regardless of qty. Return all other products
      setFavorites(favorites.filter((fave) => fave.uri !== recipe.uri));
    }
  }

  function getResults(recipes) {
    setRecipeResults(recipes);
  }
  return (
    <BrowserRouter>
      <div className="App">
        <ResponsiveAppBar />

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <FullWidthTextField getResults={getResults} />
                <RecipeResults
                  results={recipeResults}
                  onAdd={onAdd}
                  onDelete={onDelete}
                />
              </div>
            }
          ></Route>
          <Route
            path="/favorites"
            element={<Favorites favorites={favorites} onDelete={onDelete} />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
