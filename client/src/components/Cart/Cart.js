import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isUserLoggedIn } from "../../Helpers/helper";
import ProductCard from "./ProductCard";
import Summary from "./Summary";

function Cart() {
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
    isUserLoggedIn() ? navigate("/cart") : navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Box>
        <Typography variant="h2" sx={{ p: 2 }}>
          Your Cart
        </Typography>
      </Box>
      <Grid container sx={boxStyles} direction="row" justifyContent="center">
        <Grid container item xs={12} md={8}>
          <Grid item xs={12} md={8} sx={{ mb: 1, mt: 1 }}>
            <ProductCard />
          </Grid>
          <Grid item xs={12} md={8} sx={{ mb: 1 }}>
            <ProductCard />
          </Grid>
          <Grid item xs={12} md={8} sx={{ mb: 1 }}>
            <ProductCard />
          </Grid>
        </Grid>
        <Grid item xs={12} md={3} sx={{ mb: 6, mr: 2, mt: 1 }}>
          <Summary />
        </Grid>
      </Grid>
    </>
  );
}

export default Cart;
