import * as React from "react";
import { useEffect, useState } from "react";

import { css } from "@emotion/css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

function ProductItem({ name, price, cover, setPanierProducts }) {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (quantity <= 0) {
      setPanierProducts((prev) => {
        const newArray = prev.filter((itm) => itm.itemName !== name);
        return [...newArray];
      });
    } else {
      setPanierProducts((prev) => {
        const newArray = prev.map((itm) => {
          if (itm.itemName === name) {
            return {
              itemName: itm.itemName,
              price: itm.price,
              quantity: quantity,
            };
          } else return itm;
        });
        return [...newArray];
      });
    }
  }, [quantity]);

  function handleClick() {
    setPanierProducts((prev) => {
      const found = prev.find((product) => product.itemName === name);
      if (found !== undefined) {
        const newArray = prev.map((itm) => {
          if (itm.itemName === name) {
            setQuantity(itm.quantity + 1);
            return {
              itemName: itm.itemName,
              price: itm.price,
              quantity: itm.quantity + 1,
            };
          } else return itm;
        });
        return [...newArray];
      } else {
        setQuantity(1);
        return [...prev, { itemName: name, price: price, quantity: 1 }];
      }
    });
  }

  return (
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
        {quantity > 0 ? (
          <div
            className={css`
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
            `}
          >
            <Button
              size="big"
              className={css`
                width: 30%;
                background-color: rgba(205, 50, 50, 0.1) !important;
                color: rgba(158, 3, 3, 0.8) !important;
              `}
              onClick={() => {
                setQuantity((q) => q - 1);
              }}
            >
              <b>-</b>
            </Button>
            <span>{quantity}</span>
            <Button
              size="big"
              className={css`
                width: 30%;
                background-color: rgba(24, 224, 14, 0.15) !important;
                color: rgba(11, 158, 3, 0.8) !important;
              `}
              onClick={() => {
                setQuantity((q) => q + 1);
              }}
            >
              <b>+</b>
            </Button>
          </div>
        ) : (
          <Button
            size="big"
            className={css`
              width: 100%;
              background-color: rgba(153, 205, 50, 0.1) !important;
              color: rgba(11, 158, 3, 0.8) !important;
            `}
            onClick={handleClick}
          >
            Ajouter au panier
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default ProductItem;
