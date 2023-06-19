import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import pantryImg1 from "../images/pantryImg1.jpg";
import RecipeReviewCard from "./RecipeCard";

function RecipeResults(props) {
  return (
    <Box className="resultsContainer" sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {props.results.length > 0 ? (
          props.results.map((result) => (
            <Grid style={{ alignItems: "center" }} item xs={12} md={6} lg={4}>
              <RecipeReviewCard
                uri={result.recipe.uri.substr(50, 63)}
                recipeName={result.recipe.label}
                image={result.recipe.image}
                cookTime={result.recipe.totalTime}
                cuisine={result.recipe.cuisineType}
                ingredients={result.recipe.ingredientLines}
                onAdd={props.onAdd}
                onDelete={props.onDelete}
              />
            </Grid>
          ))
        ) : (
          <h2 style={{ margin: "0px 5%", textAlign: "center", color: "white" }}>
            Lookup and save recipes for your favorite dishes or find recipes
            that work with the ingredients you already have!
          </h2>
        )}
      </Grid>
    </Box>
  );
}

export default RecipeResults;
