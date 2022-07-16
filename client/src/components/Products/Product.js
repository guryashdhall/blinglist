import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import axios from "axios";
import { BACKEND_URL } from "../../config/config";
import { useNavigate } from "react-router-dom";
import { isUserLoggedIn } from "../../Helpers/helper";

const Product = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem("user"))
      if (!isUserLoggedIn()) {
        navigate('/')
      } else {
        async function fetchData() {
          const res = await axios.get(BACKEND_URL + "products/getproducts?" + `id=${user._id}`)
          console.log(res.data.data)
          if (res.data.success) {
            setProducts(res.data.data)
          }
        }
        fetchData()
      }
    }
    catch (error) { console.log(error) }
  }, [])


  return (
    <div>
      <Container maxWidth="lg">
        <h1 margin-top="200px" align="left">
          Products
        </h1>
        <Box sx={{ flexGrow: 1, mx: "auto", mt: 4 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {products.length == 0 ?
              <h3>Loading Products...</h3>
              : products.map((product) => (
                <Grid item>
                  <ProductCard data={product} />
                </Grid>
              ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default Product;
