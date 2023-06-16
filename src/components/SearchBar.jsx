import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";

import SearchIcon from "@mui/icons-material/Search";
import { FormControl, FormLabel } from "@mui/material";
import axios from "axios";

function FullWidthTextField(props) {
  const [text, setText] = React.useState("");
  const [recipes, setRecipes] = React.useState([]);

  function handleChange(e) {
    setText(e.target.value);
    console.log(text);
  }

  const searchEdamam = async (searchTerm) => {
    let response;

    try {
      response = await axios.get(
        "https://api.edamam.com/api/recipes/v2?type=public&q=" +
          searchTerm +
          "&app_id=" +
          process.env.APP_ID +
          "_key=" +
          process.env.APP_KEY
      );
      console.log(response.data.hits);
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
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 500,
        mx: "auto",
        my: "40px",
      }}
    >
      {/* <FormControl> */}
      {/* <TextField
          type="text"
          value={text}
          onChange={handleChange}
          fullWidth
          label="Search Recipes or Ingredients"
          id="fullWidth"
        /> */}
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        onChange={handleChange}
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
      {/* </FormControl> */}
    </Paper>
  );
}

export default FullWidthTextField;
