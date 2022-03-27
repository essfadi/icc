import React from "react";
import Rating from "@mui/material/Rating";
import { Box, ImageHolder, Image, Para, H3, Calory } from "./MealElements";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WhatshotIcon from '@mui/icons-material/Whatshot';

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

const Meal = ({ calories, content, image, type, rating }) => {
  console.log(calories, content, image, type);
  return (
    <Box>
      <ImageHolder>
        <Image src={image} alt={type} />
      </ImageHolder>
      <div className="content">
        <StyledRating
          name="customized-color"
          defaultValue={rating}
          getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          readOnly
        />
        <H3>{type}</H3>
        <Para>{content}</Para>
        <Calory>{calories} <WhatshotIcon fontSize="inherit"/></Calory>
      </div>
    </Box>
  );
};

export default Meal;
