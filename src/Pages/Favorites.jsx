import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import pantryImg1 from "../images/pantryImg1.jpg";
import RecipeReviewCard from "../components/RecipeCard";

function Favorites(props) {
  //   console.log("Favorites: " + JSON.parse(props));
  return (
    <Box className="container resultsContainer" sx={{ width: "100%" }}>
      {props.favorites.length > 0 ? (
        <div className="myRecipesHeading">
          {" "}
          <h1>My Recipes</h1>
        </div>
      ) : (
        <div className="favoritesHeading">
          {" "}
          <h1>You haven't saved any recipes yet!</h1>
        </div>
      )}
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {props.favorites.length > 0 ? (
          props.favorites.map((favorite) => (
            <Grid item xs={12} md={6} lg={4}>
              <RecipeReviewCard
                uri={favorite.uri}
                recipeName={favorite.recipeName}
                image={favorite.image}
                cookTime={favorite.totalTime}
                cuisine={favorite.cuisineType}
                ingredients={favorite.ingredients}
                onAdd={props.onAdd}
                onDelete={props.onDelete}
              />
            </Grid>
          ))
        ) : (
          <h1></h1>
        )}
      </Grid>
    </Box>
  );
}

export default Favorites;
