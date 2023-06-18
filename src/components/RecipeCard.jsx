import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import RamenDiningSharpIcon from "@mui/icons-material/RamenDiningSharp";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [favorited, setFavorited] = React.useState(false);
  const [location, setLocation] = React.useState(window.location.pathname);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <RamenDiningSharpIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
              }}
            />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.recipeName}
        subheader={props.cuisine}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Total Cooktime:{" "}
          {props.cookTime > 0 ? (
            <span>{props.cookTime} minutes</span>
          ) : (
            <span>N/A</span>
          )}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {location === "/favorites" ? (
          <IconButton
            onClick={() => props.onDelete(props)}
            aria-label="add to favorites"
          >
            <RemoveCircleOutlineIcon />
          </IconButton>
        ) : (
          <IconButton
            onClick={() => {
              props.onAdd(props);
            }}
            aria-label="add to favorites"
          >
            <i class="fa-sharp fa-regular fa-heart" />
          </IconButton>
        )}
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Ingredients:</Typography>

          <List>
            {props.ingredients.map((ingredient) => (
              <ListItem>
                <ListItemText primary={ingredient} />
              </ListItem>
            ))}
            <ListItemText primary="Step by Step guide" />
          </List>
        </CardContent>
      </Collapse>
    </Card>
  );
}
