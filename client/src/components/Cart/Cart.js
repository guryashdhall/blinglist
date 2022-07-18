import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isUserLoggedIn } from "../../Helpers/helper";
import { addToCart, fetchCart } from "../../store/actions/Jewels";
import ProductCard from "./ProductCard";
import Summary from "./Summary";
import { connect, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";
function Cart(props) {
  const location = useLocation();
  const cart_products = useSelector((state) => state.jewelsReducer.cart);
  useEffect(() => {
    getCart();
  }, []);
  const getCart = async () => {
    console.log("inside get ");
    await axios
      .post("http://localhost:8080/cart/getCart", {
        userid: JSON.parse(localStorage.getItem("user"))._id,
      })
      .then((data) => {
          if (localStorage.getItem("cart") == null) {
            localStorage.setItem("cart", JSON.stringify(data.data));
            props.fetchCart(data.data);
          } else {
            console.log("inside else");
            console.log(JSON.parse(localStorage.getItem("cart")));
            props.fetchCart(JSON.parse(localStorage.getItem("cart")));
            console.log(cart_products);
            axios
              .post("http://localhost:8080/cart/addCart", cart_products)
              .then((response) => {
                console.log('response')
                localStorage.setItem("cart", JSON.stringify(cart_products));
                props.fetchCart(JSON.parse(localStorage.getItem("cart")));
              })
              .catch((error) => {
                console.log(error);
              });
          }
        
      });
  };
  const boxStyles = (Theme) => ({
    background: "#f3e5f5",
    width: "95%",
    mt: 4,
    m: "auto",
    p: 3,
    [Theme.breakpoints.down("md")]: {
      background: "#f3e5f5",
      width: "100%",
      mt: 4,
      m: "auto",
    },
  });

  const navigate = useNavigate();
  useEffect(() => {
    let role = localStorage.getItem("role");
    isUserLoggedIn()
      ? role === "customer"
        ? navigate("/cart")
        : navigate("/admin")
      : navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (location.state) {
      props.setItem(location.state);
    }
  }, [cart_products]);

  return (
    <div>
      <Box>
        <Typography variant="h2" sx={{ p: 2 }}>
          Your Cart
        </Typography>
      </Box>
      <Grid container sx={boxStyles} direction="row" justifyContent="center">
        <Grid container item xs={12} md={8}>
          {cart_products.items.map((products, index) => {
            return (
              <Grid item xs={12} md={8} sx={{ mb: 1, mt: 1 }} key={index}>
                <ProductCard products={products} index={index} />
              </Grid>
            );
          })}
        </Grid>
        <Grid item xs={12} md={3} sx={{ mb: 6, mr: 2, mt: 1 }}>
          <Summary products={cart_products.items} />
        </Grid>
      </Grid>
    </div>
  );
}

const mapDispatchtoProps = (dispatch) => {
  return {
    setItem: (data) => {
      dispatch(addToCart(data));
    },
    fetchCart: (cart) => {
      dispatch(fetchCart(cart));
    },
  };
};
export default connect(null, mapDispatchtoProps)(Cart);
