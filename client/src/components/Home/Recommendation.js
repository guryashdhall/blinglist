import React, { useEffect, useState } from "react";
import Poster from "./Poster/Poster";
import Slider from "./Slider/Slider";
import { Grid, Divider, CircularProgress } from "@material-ui/core";
import Category from "./Categories/Category";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import {
  getNewArrivalsProducts,
  getMostPopularProducts,
} from "../../store/actions/recommendation";
import { isUserLoggedIn } from "../../Helpers/helper";

const Recommendation = () => {
  const navigate = useNavigate();
  const [earringImages, setEarringImages] = useState([]);
  const [necklaceImages, setNecklaceImages] = useState([]);
  const [ringImages, setRingImages] = useState([]);

  const [earringMpImages, setEarringMpImages] = useState([]);
  const [necklaceMpImages, setNecklaceMpImages] = useState([]);
  const [ringMpImages, setRingMpImages] = useState([]);

  useEffect(() => {
    if (isUserLoggedIn()) {
      var jewels1 = [];
      var jewels2 = [];
      var jewels3 = [];

      getNewArrivalsProducts().then((result) => {
        for (var i = 0; i < result["earring"].length; i++) {
          var arr1 = {
            label: result["earring"][i]["productName"],
            imgPath: result["earring"][i]["productImage"],
            productID: result["earring"][i]["_id"]
          };
          jewels1.push(arr1);
        }
        setEarringImages(jewels1);

        for (var i = 0; i < result["necklace"].length; i++) {
          var arr2 = {
            label: result["necklace"][i]["productName"],
            imgPath: result["necklace"][i]["productImage"],
            productID: result["necklace"][i]["_id"]
          };
          jewels2.push(arr2);
        }
        setNecklaceImages(jewels2);

        for (var i = 0; i < result["ring"].length; i++) {
          var arr3 = {
            label: result["ring"][i]["productName"],
            imgPath: result["ring"][i]["productImage"],
            productID: result["ring"][i]["_id"]
          };
          jewels3.push(arr3);
        }
        setRingImages(jewels3);
      });

      var mp_earring = [];
      var mp_necklace = [];
      var mp_ring = [];

      getMostPopularProducts().then((result) => {
        for (var i = 0; i < result["message"].length; i++) {
          if (result["message"][i]["productsList"]["productType"] === "ring") {
            var arr1 = {
              label: result["message"][i]["productsList"]["productName"],
              imgPath: result["message"][i]["productsList"]["productImage"],
              productID: result["message"][i]["productsList"]["_id"]
            };
            mp_ring.push(arr1);
          }
        }
        setRingMpImages(mp_ring);

        for (var i = 0; i < result["message"].length; i++) {
          if (
            result["message"][i]["productsList"]["productType"] === "necklace"
          ) {
            var arr2 = {
              label: result["message"][i]["productsList"]["productName"],
              imgPath: result["message"][i]["productsList"]["productImage"],
              productID: result["message"][i]["productsList"]["_id"]
            };
            mp_necklace.push(arr2);
          }
        }
        setNecklaceMpImages(mp_necklace);

        for (var i = 0; i < result["message"].length; i++) {
          if (
            result["message"][i]["productsList"]["productType"] === "earring"
          ) {
            var arr3 = {
              label: result["message"][i]["productsList"]["productName"],
              imgPath: result["message"][i]["productsList"]["productImage"],
              productID: result["message"][i]["productsList"]["_id"]
            };
            mp_earring.push(arr3);
          }
        }
        setEarringMpImages(mp_earring);
      });
    } else {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        {earringImages.length > 0 ? (
          <Grid
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Slider
              images={earringImages}
            />
            <Slider
              images={necklaceImages}
            />
            <Slider
              images={ringImages}
            />
          </Grid>
        ) : (
          <CircularProgress />
        )}
      </div>

      <div style={{ margin: "70px" }}>
        <Divider style={{ width: "100%" }} />
        <br></br>
        <br></br>
        <Typography variant="h4" align="center">
          You May Also Like
        </Typography>

        {earringImages.length > 0 ? (
          <Grid
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Slider
              images={earringImages}
            />
            <Slider 
              images={earringImages}
            />
            <Slider
              images={earringImages}
            />
          </Grid>
        ) : (
          <CircularProgress />
        )}
      </div>

      <div style={{ margin: "70px" }}>
        <Divider style={{ width: "100%" }} />
        <br></br>
        <br></br>
        <Typography variant="h4" align="center">
          Most Popular
        </Typography>

        {earringImages.length > 0 ? (
          <Grid
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Slider
              images={ringMpImages}
            />
            <Slider
              images={necklaceMpImages}
            />
            <Slider
              images={earringMpImages}
            />
          </Grid>
        ) : (
          <CircularProgress />
        )}
      </div>
    </div>
  );
};

export default Recommendation;
