import { Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isUserLoggedIn } from "../../Helpers/helper";
import ReviewPage from "../Review/ReviewPage";
import axios from "axios";
import "./Product.css";
import { BACKEND_URL } from "../../config/config";
import Product from "./Product";

const ViewProduct = () => {
  const navigate = useNavigate();
  const [product, setProducts]=useState({})
  useEffect(() => {
    let role = localStorage.getItem("role");
    isUserLoggedIn()
      ? role === "customer"
        ? navigate("/viewdetails")
        : navigate("/admin")
      : navigate("/");

      async function fetchData() {
        console.log("Fetching data..."+localStorage.getItem("productDetailsId"));
        // Temporary
        localStorage.getItem("productDetailsId")?localStorage.getItem("productDetailsId"):localStorage.setItem("productDetailsId", "62cdae4b200dc61b6c6080b2")
        const res = await axios.get(BACKEND_URL + "products/getproductsById?" + `id=${localStorage.getItem("productDetailsId")}`);
        console.log(res.data.data)
        if (res.data.success) {
          setProducts(res.data.data)
        }
      }
      fetchData()
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
                      src={product.productImage}
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
                      {product.productName}
                    </Typography>
                    <div>
                      <Typography className="item-info-text">
                        <b>Product number: </b> {product._id}
                      </Typography>
                      <Typography className="item-info-text">
                        <b>Metal: </b> {product.metalType}
                      </Typography>
                      <Typography className="item-info-text">
                        <b>Type: </b> {product.productType}
                      </Typography>
                      <Typography className="item-info-text">
                        <b>Color: </b> {product.productColor}
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
                    <b>CAD {product.productPrice}</b>
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
