import React from "react";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import item2 from "../../images/j2.jpg";
import Cart from "../Cart/Cart";
import ReviewPage from "../Review/ReviewPage";
import { useNavigate } from "react-router-dom";

const theme = createTheme();
function OrderDetails() {
  const navigate = useNavigate();
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
          <Typography
            sx={{ color: "blueGrey" }}
            variant="h4"
            gutterBottom
            component="div"
          >
            Order Details
          </Typography>
          <Box
            //style={{ textAlign: 'left' }}
            sx={{
              border: 1,
              borderRadius: "10px",
              backgroundColor: "#800080db",
              color: "#ffffff",
              m: 1,
              p: 1,

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
              <Grid item xs style={{ textAlign: "right", paddingRight: 10 }}>
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
                  variant="body1"
                  gutterBottom
                  component="div"
                >
                  January 27, 2022
                </Typography>
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem />

              <Grid item xs style={{ paddingLeft: 10 }}>
                <Typography
                  sx={{ color: "#ffffff" }}
                  variant="body2"
                  gutterBottom
                  component="div"
                >
                  ORDER NO.
                </Typography>
                <Typography
                  sx={{ color: "#ffffff" }}
                  variant="body1"
                  gutterBottom
                  component="div"
                >
                  456-456-132
                </Typography>
              </Grid>
            </Grid>
          </Box>
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
            <Grid
              container
              component="form"
              sx={{
                p: 1,
                alignItems: "left",
                justifyContent: "left",
              }}
            >
              <Grid item xs style={{ maxInlineSize: "max-content" }}>
                <img
                  src={item2}
                  alt="earring1"
                  width="100"
                  height="70"
                  alignitems="left"
                />
                <br></br>
              </Grid>
              <Grid item xs style={{ padding: 5 }}>
                <Link href="#" sx={{ color: "purple" }} underline="hover">
                  Classic Multi Chain Necklace
                </Link>
                <Typography
                  sx={{ color: "#808080" }}
                  variant="caption"
                  gutterBottom
                  component="div"
                >
                  Silver
                </Typography>
                <Typography
                  sx={{ color: "black" }}
                  variant="body2"
                  gutterBottom
                  component="div"
                >
                  CA$ 14.29
                </Typography>
              </Grid>
              <Grid item xs style={{ padding: 5 }}>
                <Typography
                  sx={{ color: "black" }}
                  variant="caption"
                  gutterBottom
                  component="div"
                >
                  Quantity:
                </Typography>
                <Typography
                  sx={{ color: "black" }}
                  variant="body2"
                  gutterBottom
                  component="div"
                >
                  1
                </Typography>
              </Grid>
              <Grid item xs style={{ padding: 5 }}>
                <Typography
                  sx={{ color: "black" }}
                  variant="caption"
                  gutterBottom
                  component="div"
                >
                  Status:
                </Typography>
                <Typography
                  sx={{ color: "black" }}
                  variant="body2"
                  gutterBottom
                  component="div"
                >
                  Shipped
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
                xs
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
                  Repuchase
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Grid
            container
            component="form"
            sx={{
              p: 1,
              alignItems: "right",
              justifyContent: "right",
            }}
          >
            <Grid
              item
              xs
              style={{
                textAlign: "right",
                maxInlineSize: "max-content",
                padding: 3,
              }}
            >
              <Typography
                sx={{ color: "black" }}
                variant="body2"
                gutterBottom
                component="div"
              >
                Retail Price:
              </Typography>
              <Typography
                sx={{ color: "black" }}
                variant="body2"
                gutterBottom
                component="div"
              >
                Taxes Included:
              </Typography>
              <Typography
                sx={{ color: "black", fontWeight: "bold" }}
                variant="body2"
                gutterBottom
                component="div"
              >
                Total:{" "}
              </Typography>
              <Divider />
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
              <Typography
                sx={{ color: "black" }}
                variant="body2"
                gutterBottom
                component="div"
              >
                CA$12
              </Typography>
              <Typography
                sx={{ color: "black" }}
                variant="body2"
                gutterBottom
                component="div"
              >
                CA$2.29
              </Typography>
              <Typography
                sx={{ color: "black", fontWeight: "bold" }}
                variant="body2"
                gutterBottom
                component="div"
              >
                CA$14.29
              </Typography>
              <Divider />
            </Grid>
          </Grid>

          <Grid
            container
            component="form"
            sx={{
              p: 1,
              alignItems: "left",
              justifyContent: "left",
            }}
          >
            <Grid item xs={12} style={{ paddingRight: 10 }}>
              <Typography
                sx={{ color: "black", fontWeight: "bold" }}
                variant="caption"
                gutterBottom
                component="div"
              >
                Billing Information
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#808080" }}
                variant="body2"
                gutterBottom
                component="div"
              >
                UserName - Phone Number
              </Typography>
              <Typography
                sx={{ color: "#808080" }}
                variant="body2"
                gutterBottom
                component="div"
              >
                User Address{" "}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography
                sx={{ color: "black", fontWeight: "bold" }}
                variant="caption"
                gutterBottom
                component="div"
              >
                Shipping Information
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#808080" }}
                variant="body2"
                gutterBottom
                component="div"
              >
                User Name
              </Typography>
              <Typography
                sx={{ color: "#808080" }}
                variant="body2"
                gutterBottom
                component="div"
              >
                Shipping Addres
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            component="form"
            sx={{
              p: 1,
              alignItems: "left",
              justifyContent: "left",
            }}
          >
            <Grid item xs={12} style={{ paddingRight: 10 }}>
              <Typography
                sx={{ color: "black", fontWeight: "bold" }}
                variant="caption"
                gutterBottom
                component="div"
              >
                Shipping Method
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#808080" }}
                variant="body2"
                gutterBottom
                component="div"
              >
                Standard Shipping
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography
                sx={{ color: "black", fontWeight: "bold" }}
                variant="caption"
                gutterBottom
                component="div"
              >
                Payment Method
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#808080" }}
                variant="body2"
                gutterBottom
                component="div"
              >
                Credit Card/Gift Card
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default OrderDetails;
