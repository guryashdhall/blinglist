import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";
import Summary from "./Summary";
import { Theme } from "@mui/material";

function Cart() {
  const boxStyles =(Theme) => ({
    background: "#f3e5f5", width: "95%",mt:4,m:'auto',p:3,
    [Theme.breakpoints.down('md')]: {
      background: "#f3e5f5", width: "100%",mt:4,m:'auto',
      }
});
  return (
    <>
    <Box>
        <Typography variant="h2" sx={{ p:2 }}>
            Your Cart
          </Typography>
    </Box>
      <Grid
        container
        sx={boxStyles}
        direction="row"
        justifyContent="center"
      >
        
        <Grid container item  xs={12} md={8} >
        <Grid item xs={12} md={8} sx={{ mb:1,mt:1 }}>
            <ProductCard />
        </Grid>
        <Grid item xs={12} md={8} sx={{ mb:1 }}>
            <ProductCard />
        </Grid>
        <Grid item xs={12} md={8} sx={{ mb:1 }}>
            <ProductCard />
        </Grid>
        </Grid>
        <Grid item xs={12} md={3} sx ={{mb:6,mr:2,mt:1}}>
          <Summary />
        </Grid>
      </Grid>
    </>
  );
}

export default Cart;
