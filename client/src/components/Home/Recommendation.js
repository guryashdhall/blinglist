import React from "react";
import Poster from "./Poster/Poster";
import Slider from "./Slider/Slider";
import { Grid, Divider } from "@material-ui/core";
import Category from "./Categories/Category";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const Recommendation = () => {
  const navigate = useNavigate();
  const rings = [
    {
      label: "Knotted Heart Ring",
      imgPath: "images/ring1.jpg",
    },
    {
      label: "Clear Heart Solitaire Ring",
      imgPath: "images/ring2.jpg",
    },
    {
      label: "Bands of Hearts Ring",
      imgPath: "images/ring3.jpg",
    },
    {
      label: "Wheat Grains Wishbone Ring",
      imgPath: "images/ring5.jpg",
    },
  ];

  const necklaces = [
    {
      label: "Three Piece Set Necklace",
      imgPath: "images/j1.jpg",
    },
    {
      label: "Stone Necklace",
      imgPath: "images/j2.jpg",
    },
    {
      label: "Infinity Necklace",
      imgPath: "images/j3.jpg",
    },
    {
      label: "Heart Necklace",
      imgPath: "images/j4.jpg",
    },
  ];

  const earrings = [
    {
      label: "Heart Earrings",
      imgPath: "images/earring1.jpg",
    },
    {
      label: "Spiral Earrings",
      imgPath: "images/earring2.jpg",
    },
    {
      label: "Twisted earrings",
      imgPath: "images/earring3.jpg",
    },
    {
      label: "Designer Earrings",
      imgPath: "images/earring4.jpg",
    },
  ];

  return (
    <div>
      <Poster />
        
      <Category />

      <div style={{ margin: "70px" }}>
        <Divider style={{ width: "100%" }} />
        <br></br>
        <br></br>
        <Typography variant="h4" align="center">
          New Arrivals
        </Typography>

        <Grid
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Slider
            onClick={() => {
              navigate("/viewdetails");
            }}
            images={rings}
          />
          <Slider
            onClick={() => {
              navigate("/viewdetails");
            }}
            images={necklaces}
          />
          <Slider
            onClick={() => {
              navigate("/viewdetails");
            }}
            images={earrings}
          />
        </Grid>
      </div>

      <div style={{ margin: "70px" }}>
        <Divider style={{ width: "100%" }} />
        <br></br>
        <br></br>
        <Typography variant="h4" align="center">
          You May Also Like
        </Typography>

        <Grid
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Slider
            onClick={() => {
              navigate("/viewdetails");
            }}
            images={rings}
          />
          <Slider
            onClick={() => {
              navigate("/viewdetails");
            }}
            images={necklaces}
          />
          <Slider
            onClick={() => {
              navigate("/viewdetails");
            }}
            images={earrings}
          />
        </Grid>
      </div>

      <div style={{ margin: "70px" }}>
        <Divider style={{ width: "100%" }} />
        <br></br>
        <br></br>
        <Typography variant="h4" align="center">
          Most Popular
        </Typography>

        <Grid
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Slider
            onClick={() => {
              navigate("/viewdetails");
            }}
            images={rings}
          />
          <Slider
            onClick={() => {
              navigate("/viewdetails");
            }}
            images={necklaces}
          />
          <Slider
            onClick={() => {
              navigate("/viewdetails");
            }}
            images={earrings}
          />
        </Grid>
      </div>
    </div>
  );
};

export default Recommendation;
