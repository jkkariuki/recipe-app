import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import pantryImg1 from "../images/pantryImg1.jpg";
import RecipeReviewCard from "./RecipeCard";

function RecipeResults(props) {
  return (
    <Box className="container resultsContainer" sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {props.results.length > 0 ? (
          props.results.map((result) => (
            <Grid item xs={4}>
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
          <Grid item xs={12}>
            <article className="article">
              {/* <picture className="pantryImg"> */}
              {/* <img className="pantryImg" src={pantryImg1} alt="background" /> */}
              {/* </picture> */}
              <input className="inputMain" />
            </article>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default RecipeResults;
