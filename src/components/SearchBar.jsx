import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Unstable_Grid2";

import { FormControl, FormLabel } from "@mui/material";
// require("dotenv").config();
import axios from "axios";

function FullWidthTextField(props) {
  const [text, setText] = React.useState("");
  const [recipes, setRecipes] = React.useState([]);

  function handleChange(e) {
    setText(e.target.value);
  }

  const searchEdamam = async (searchTerm) => {
    let response;

    try {
      response = await axios.get(
        "https://api.edamam.com/api/recipes/v2?type=public&q=" +
          searchTerm +
          "&app_id=" +
          process.env.REACT_APP_APP_ID +
          "&app_key=" +
          process.env.REACT_APP_APP_KEY
      );
      setRecipes(response.data.hits);
      props.getResults(response.data.hits);
    } catch (e) {
      // catch error
      throw new Error(e.message);
    }
  };

  function handleSubmit(e) {
    searchEdamam(text);
  }

  return (
    <Grid container>
      <Grid fontStyle={{ marginTop: "5%" }} item xs={12}>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 350,
            mx: "auto",
            my: "40px",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            onChange={handleChange}
            className="inputMain"
            type="text"
            value={text}
            fullWidth
            placeholder="Search Recipes or Ingredients"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton
            onClick={handleSubmit}
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default FullWidthTextField;
