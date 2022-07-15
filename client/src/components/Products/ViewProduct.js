import { Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isUserLoggedIn } from "../../Helpers/helper";
import ReviewPage from "../Review/ReviewPage";

import "./Product.css";

const ViewProduct = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let role = localStorage.getItem("role");
    isUserLoggedIn()
      ? role === "customer"
        ? navigate("/viewdetails")
        : navigate("/admin")
      : navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Grid align="center" mt={4} mb={4}>
        <Typography
          className="product-details-heading"
          variant="p"
          mb={4}
          gutterBottom
          component="div"
          color="initial"
        >
          Product Details
        </Typography>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper elevation={24} className="product-details">
                <Grid xs={12} container>
                  <Grid xs={3} align="left">
                    <img
                      alt=""
                      src="https://cdn-fsly.yottaa.net/609426734f1bbfff95ac5607/ca.pandora.net/v~4b.5/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw83b3044f/productimages/main/791678C01_RGB.JPG?sw=150&sh=150&sm=fit&sfrm=png&bgcolor=F5F5F5&yocs=1_"
                      height="100%"
                      width="90%"
                    />
                  </Grid>
                  <Grid xs={6} align="left">
                    <Typography
                      className="product-name"
                      variant="h4"
                      gutterBottom
                      component="div"
                    >
                      Tropical Starfish & Shell Clip Charm
                    </Typography>
                    <div>
                      <Typography className="item-info-text">
                        <b>Product number: </b> 791678C01
                      </Typography>
                      <Typography className="item-info-text">
                        <b>Metal: </b> Sterling Silver
                      </Typography>
                      <Typography className="item-info-text">
                        <b>Type: </b> Pendant
                      </Typography>
                      <Typography className="item-info-text">
                        <b>Color: </b> Blue
                      </Typography>
                      <Stack mt={3} spacing={2} direction="row">
                        <button
                          onClick={() => {
                            navigate("/favorites");
                          }}
                          className="product-btn"
                        >
                          ADD TO FAVORITES
                        </button>
                        <button
                          onClick={() => {
                            navigate("/cart");
                          }}
                          className="product-btn"
                        >
                          ADD TO CART
                        </button>
                      </Stack>
                    </div>
                  </Grid>
                  <Grid xs={2} align="right">
                    <b>$7.99</b>
                  </Grid>
                </Grid>
                <Grid xs={12} align="left" mt={4}>
                  <ReviewPage />
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </div>
  );
};

export default ViewProduct;
