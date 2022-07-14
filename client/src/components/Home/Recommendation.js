import React, { useEffect, useState } from "react";
import Poster from "./Poster/Poster";
import Slider from "./Slider/Slider";
import { Grid, Divider, CircularProgress } from "@material-ui/core";
import Category from "./Categories/Category";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { getNewArrivalsProducts } from "../../store/actions/recommendation";

const Recommendation = () => {
  const navigate = useNavigate();
  const [earringImages, setEarringImages] = useState([])
  const [necklaceImages, setNecklaceImages] = useState([])
  const [ringImages, setRingImages] = useState([])

  useEffect(() => {
    var jewels1 = []
    var jewels2 = []
    var jewels3 = []

    getNewArrivalsProducts().then((result) => {

      for (var i = 0; i < result["earring"].length; i++) {
        var arr1 = {
          label: result["earring"][i]["productName"],
          imgPath: result["earring"][i]["productImage"]
        }
        jewels1.push(arr1)
      }
      setEarringImages(jewels1)

      for (var i = 0; i < result["necklace"].length; i++) {
        var arr2 = {
          label: result["necklace"][i]["productName"],
          imgPath: result["necklace"][i]["productImage"]
        }
        jewels2.push(arr2)
      }
      setNecklaceImages(jewels2)

      for (var i = 0; i < result["ring"].length; i++) {
        var arr3 = {
          label: result["ring"][i]["productName"],
          imgPath: result["ring"][i]["productImage"]
        }
        jewels3.push(arr3)
      }
      setRingImages(jewels3)
    })
  }, [])

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
        {
          earringImages.length > 0 ? (
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
                images={earringImages}
              />
              <Slider
                onClick={() => {
                  navigate("/viewdetails");
                }}
                images={necklaceImages}
              />
              <Slider
                onClick={() => {
                  navigate("/viewdetails");
                }}
                images={ringImages}
              />
            </Grid>

          ) : <CircularProgress />
        }


      </div>

      <div style={{ margin: "70px" }}>
        <Divider style={{ width: "100%" }} />
        <br></br>
        <br></br>
        <Typography variant="h4" align="center">
          You May Also Like
        </Typography>

        {
          earringImages.length > 0 ? (
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
                images={earringImages}
              />
              <Slider
                onClick={() => {
                  navigate("/viewdetails");
                }}
                images={earringImages}
              />
              <Slider
                onClick={() => {
                  navigate("/viewdetails");
                }}
                images={earringImages}
              />
            </Grid>

          ) : <CircularProgress />
        }


      </div>

      <div style={{ margin: "70px" }}>
        <Divider style={{ width: "100%" }} />
        <br></br>
        <br></br>
        <Typography variant="h4" align="center">
          Most Popular
        </Typography>

        {
          earringImages.length > 0 ? (
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
                images={earringImages}
              />
              <Slider
                onClick={() => {
                  navigate("/viewdetails");
                }}
                images={earringImages}
              />
              <Slider
                onClick={() => {
                  navigate("/viewdetails");
                }}
                images={earringImages}
              />
            </Grid>

          ) : <CircularProgress />
        }
      </div>
    </div>
  );
};

export default Recommendation;
