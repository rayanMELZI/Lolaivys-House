import * as React from "react";

import { css } from "@emotion/css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

function ProductItem({ name, price, cover }) {
  return (
    // <li className="li">
    //   <img src={cover} alt={`${name} cover`} />
    //   <h3>{name}</h3>
    //   <p>{price} DZD</p>
    //   <button>Acheter</button>
    // </li>

    <Card sx={{ maxWidth: 345 }} className="product-item">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={cover}
          alt={`${name} cover`}
          className={css`
            height: 228px;
          `}
        />
        <CardContent
          className={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
          `}
        >
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="h8" color="text.secondary">
            {price} DZD
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="big"
          className={css`
            width: 100%;
            background-color: rgba(153, 205, 50, 0.1) !important;
            color: rgba(11, 158, 3, 0.8) !important;
          `}
        >
          Acheter
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductItem;
