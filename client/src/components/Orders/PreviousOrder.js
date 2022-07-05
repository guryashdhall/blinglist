
import React from "react";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import item1 from "../../images/ring1.jpg";
import item2 from "../../images/j2.jpg";
import OrderDetails from "./OrderDetails";
import ReviewPage from "../Review/ReviewPage";
import Cart from "../Cart/Cart";
import { useNavigate } from "react-router-dom";


const theme = createTheme();

function PreviousOrder() {
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    <OrderDetails />;
    navigate("/orderDetails");
  };

  const toReviews = (e) => {
    e.preventDefault();
    <ReviewPage />;
    navigate("/reviews");
  };

  const toCart = (e) => {
    e.preventDefault();
    <Cart />;
    navigate("/cart");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexFlow: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignitems: "center",
          width: "100%",
        }}
      >
        <Container
          component="main"
          sx={{
            p: 2,
            width: "100%",
          }}
        >
          <Grid container alignItems="flex-end" justifyContent="flex-end">
            <Grid item xs>
              <Typography
                sx={{ color: "blueGrey" }}
                variant="h4"
                gutterBottom
                component="div"
              >
                Your Orders
              </Typography>
            </Grid>
            <Grid
              item
              xs
              style={{
                textAlign: "right",
                maxInlineSize: "max-content",
                padding: 3,
              }}
            ></Grid>
            <Grid
              item
              xs
              style={{
                textAlign: "right",
                maxInlineSize: "max-content",
                padding: 3,
              }}
            >
              <TextField
                color="secondary"
                label="Search product"
                id="outlined-size-small"
                size="small"
              />
            </Grid>
            <Grid
              item
              xs
              style={{
                textAlign: "right",
                maxInlineSize: "max-content",
                padding: 3,
              }}
            >
              <Button
                sx={{
                  color: "#800080",
                  border: "1px solid #80008059",
                  "&:hover": {
                    backgroundColor: "#e8b8ff96",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
                onClick={() => alert("search performed")}
              >
                Search
              </Button>
            </Grid>
          </Grid>
          <Box
            //style={{ textAlign: 'left' }}
            sx={{
              border: 1,
              borderRadius: "10px",
              m: 1,
              borderColor: "#757575",
              p: 1,
              color: "#ffffff",

              //textTransform: 'none',
            }}
          >
            <Box
              //style={{ textAlign: 'left' }}
              sx={{
                border: 1,
                borderRadius: "10px",
                backgroundColor: "#800080db",
                color: "#ffffff",

                //textTransform: 'none',
              }}
            >
              <Grid
                container
                component="form"
                sx={{
                  p: 1,
                  alignItems: "left",
                  justifyContent: "left",
                }}
              >
                <Grid item xs>
                  <Typography
                    sx={{ color: "#ffffff" }}
                    variant="body2"
                    gutterBottom
                    component="div"
                  >
                    ORDER PLACED
                  </Typography>
                  <Typography
                    sx={{ color: "#ffffff" }}
                    variant="body2"
                    gutterBottom
                    component="div"
                  >
                    January 27, 2022
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography
                    sx={{ color: "#ffffff" }}
                    variant="body2"
                    gutterBottom
                    component="div"
                  >
                    TOTAL
                  </Typography>
                  <Typography
                    sx={{ color: "#ffffff" }}
                    variant="body2"
                    gutterBottom
                    component="div"
                  >
                    CDN$ 29.00
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography
                    sx={{ color: "#ffffff" }}
                    variant="body2"
                    gutterBottom
                    component="div"
                  >
                    SHIPPED TO
                  </Typography>
                  <Typography
                    sx={{ color: "#ffffff" }}
                    variant="body2"
                    gutterBottom
                    component="div"
                  >
                    User Name
                  </Typography>
                </Grid>
                <Grid item xs style={{ textAlign: "right" }}>
                  <Typography
                    sx={{ color: "#ffffff" }}
                    variant="body2"
                    gutterBottom
                    component="div"
                  >
                    ORDER # 465-456-789
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Grid
              container
              component="form"
              sx={{
                p: 1,
                alignItems: "left",
                justifyContent: "left",
              }}
            >
              <Grid item xs={6} md={3} style={{ maxInlineSize: "max-content" }}>
                <Typography
                  sx={{ color: "black" }}
                  variant="body2"
                  gutterBottom
                  component="div"
                >
                  DELIVERED Feb. 8, 2022
                </Typography>
                <img
                  src={item2}
                  alt="earring1"
                  width="100"
                  height="70"
                  alignitems="left"
                />
                <br></br>
              </Grid>
              <Grid item xs={6} md={5} style={{ padding: 5 }}>
                <br></br>
                <Link href="#" sx={{ color: "purple" }} underline="hover">
                  Classic Multi Chain Necklace
                </Link>
              </Grid>
              <Grid
                item
                xs={12}
                md={2}
                style={{
                  textAlign: "right",
                  maxInlineSize: "max-content",
                  padding: 3,
                }}
              >
                <br></br>
                <Button
                  sx={{
                    color: "#800080",
                    border: "1px solid #80008059",
                    "&:hover": {
                      backgroundColor: "#e8b8ff96",
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                  onClick={toReviews}
                >
                  Write a review
                </Button>
              </Grid>
              <Grid
                item
                xs={12}
                md={1}
                style={{
                  textAlign: "right",
                  maxInlineSize: "max-content",
                  padding: 3,
                }}
              >
                <br></br>
                <Button
                  sx={{
                    color: "#800080",
                    border: "1px solid #80008059",
                    "&:hover": {
                      backgroundColor: "#e8b8ff96",
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                  onClick={toCart}
                >
                  Repurchase
                </Button>
              </Grid>
              <Grid
                item
                xs={12}
                md={2}
                style={{
                  textAlign: "right",
                  maxInlineSize: "max-content",
                  padding: 3,
                }}
              >
                <br></br>
                <Button
                  sx={{
                    color: "#800080",
                    border: "1px solid #80008059",
                    "&:hover": {
                      backgroundColor: "#e8b8ff96",
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                  onClick={onSubmit}
                >
                  Order Details
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Divider />
          <Box
            //style={{ textAlign: 'left' }}
            sx={{
              border: 1,
              borderRadius: "10px",
              m: 1,
              borderColor: "#757575",
              p: 1,
              color: "#ffffff",

              //textTransform: 'none',
            }}
          >
            <Box
              //style={{ textAlign: 'left' }}
              sx={{
                border: 1,
                borderRadius: "10px",
                backgroundColor: "#800080db",
                color: "#ffffff",

                //textTransform: 'none',
              }}
            >
              <Grid
                container
                component="form"
                sx={{
                  p: 1,
                  alignItems: "left",
                  justifyContent: "left",
                }}
              >
                <Grid item xs>
                  <Typography
                    sx={{ color: "#ffffff" }}
                    variant="body2"
                    gutterBottom
                    component="div"
                  >
                    ORDER PLACED
                  </Typography>
                  <Typography
                    sx={{ color: "#ffffff" }}
                    variant="body2"
                    gutterBottom
                    component="div"
                  >
                    January 31, 2022
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography
                    sx={{ color: "#ffffff" }}
                    variant="body2"
                    gutterBottom
                    component="div"
                  >
                    TOTAL
                  </Typography>
                  <Typography
                    sx={{ color: "#ffffff" }}
                    variant="body2"
                    gutterBottom
                    component="div"
                  >
                    CDN$ 19.49
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography
                    sx={{ color: "#ffffff" }}
                    variant="body2"
                    gutterBottom
                    component="div"
                  >
                    SHIPPED TO
                  </Typography>
                  <Typography
                    sx={{ color: "#ffffff" }}
                    variant="body2"
                    gutterBottom
                    component="div"
                  >
                    User Name
                  </Typography>
                </Grid>
                <Grid item xs style={{ textAlign: "right" }}>
                  <Typography
                    sx={{ color: "#ffffff" }}
                    variant="body2"
                    gutterBottom
                    component="div"
                  >
                    ORDER # 465-456-123
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Grid
              container
              component="form"
              sx={{
                p: 1,
                alignItems: "left",
                justifyContent: "left",
              }}
            >
              <Grid item xs={6} md={3} style={{ maxInlineSize: "max-content" }}>
                <Typography
                  sx={{ color: "black" }}
                  variant="body2"
                  gutterBottom
                  component="div"
                >
                  DELIVERED Feb. 4, 2022
                </Typography>
                <img
                  src={item1}
                  alt="earring1"
                  width="100"
                  height="70"
                  alignitems="left"
                />
                <br></br>
              </Grid>
              <Grid item xs={6} md={5} style={{ padding: 5 }}>
                <br></br>
                <Link href="#" sx={{ color: "purple" }} underline="hover">
                  Sparkling Triangle Drop Earrings
                </Link>
              </Grid>
              <Grid
                item
                xs={12}
                md={2}
                style={{
                  textAlign: "right",
                  maxInlineSize: "max-content",
                  padding: 3,
                }}
              >
                <br></br>
                <Button
                  sx={{
                    color: "#800080",
                    border: "1px solid #80008059",
                    "&:hover": {
                      backgroundColor: "#e8b8ff96",
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                  onClick={toReviews}
                >
                  Write a review
                </Button>
              </Grid>
              <Grid
                item
                xs={12}
                md={1}
                style={{
                  textAlign: "right",
                  maxInlineSize: "max-content",
                  padding: 3,
                }}
              >
                <br></br>
                <Button
                  sx={{
                    color: "#800080",
                    border: "1px solid #80008059",
                    "&:hover": {
                      backgroundColor: "#e8b8ff96",
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                  onClick={toCart}
                >
                  RePurchase
                </Button>
              </Grid>
              <Grid
                item
                xs={12}
                md={2}
                style={{
                  textAlign: "right",
                  maxInlineSize: "max-content",
                  padding: 3,
                }}
              >
                <br></br>
                <Button
                  sx={{
                    color: "#800080",
                    border: "1px solid #80008059",
                    "&:hover": {
                      backgroundColor: "#e8b8ff96",
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                  onClick={onSubmit}
                >
                  Order Details
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default PreviousOrder;
