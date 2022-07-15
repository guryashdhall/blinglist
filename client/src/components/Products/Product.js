import React, { Component } from "react";
import ProductCard from "./ProductCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ring1 from "../../images/ring1.jpg";
import ring2 from "../../images/ring2.jpg";
import ring3 from "../../images/ring3.jpg";
import ring4 from "../../images/ring4.jpg";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount = () => {
    this.setState({
      products: [
        {
          id: 1,
          title: "Jewels Of Rome",
          datePosted: "June 13, 2022",
          description:
            "This is my favorite jewellery among all the jewelleries seen so far! This is my favorite jewellery among all the jewelleries seen so far! This is my favorite jewellery among all the jewelleries seen so far!",
          cost: "5000",
          available: true,
          imageURL: ring1,
        },
        {
          id: 2,
          title: "Jewels of Halifax",
          datePosted: "June 7, 2022",
          description:
            "This is my favorite jewellery among all the jewelleries seen so far! This is my favorite jewellery among all the jewelleries seen so far! This is my favorite jewellery among all the jewelleries seen so far!",
          cost: "2000",
          available: true,
          imageURL: ring2,
        },
        {
          id: 3,
          title: "Jewels of Italy",
          datePosted: "May 30, 2022",
          description:
            "This is my favorite jewellery among all the jewelleries seen so far! This is my favorite jewellery among all the jewelleries seen so far! This is my favorite jewellery among all the jewelleries seen so far!",
          cost: "7100",
          available: true,
          imageURL: ring3,
        },
        {
          id: 4,
          title: "Jewels of Spain",
          datePosted: "May 12, 2022",
          description:
            "This is my favorite jewellery among all the jewelleries seen so far! This is my favorite jewellery among all the jewelleries seen so far! This is my favorite jewellery among all the jewelleries seen so far!",
          cost: "3100",
          available: true,
          imageURL: ring4,
        },
      ],
    });
  };

  render() {
    const { products } = this.state;
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
              {products.map((product) => (
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
}

export default Product;
