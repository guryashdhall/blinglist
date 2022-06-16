import React from "react";
import { Avatar, Grid, Paper, Typography } from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import { deepPurple } from "@mui/material/colors";

import "./Blogs.css";

const ViewBlog = () => {
  return (
    <Grid container>
      <Grid xs={12} >
        <Typography
          variant="h4"
          gutterBottom
          component="div"
          className="blog-heading"
          alignItems="center"
          justifyContent={"center"}
          alignContent="center"
          textAlign={"center"}
        >
          Bling Stories and Blogs
        </Typography>
      </Grid>
      <Grid xs={12} align="center" mb={3}>
        <Paper
          elevation={24}
          sx={{ width: "90%", textAlign: "left", padding: "30px" }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>G</Avatar>
            <div>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                className="blog-text"
                style={{ marginLeft: "12px", marginTop: "8px" }}
              >
                <span className="blog-title">Guryash Singh Dhall </span>
              </Typography>
            </div>
          </div>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            className="blog-text"
            mt={2}
            ml={1}
          >
            <b>  </b> <span className="blog-title">THE CROWNING GLORY</span>
          </Typography>
          <Typography mt={2} ml={1} variant="p" gutterBottom component="div">
            A majestic emerald fit for a queen, Bulgari high jewelry has created another stunning masterpiece with their Jubilee Emerald Garden Tiara in celebration of the 2022 Platinum Jubilee of Her Majesty Queen Elizabeth II. So thrilling! It’s my first time seeing a Bulgari tiara and I can’t wait to show you.

            Founded in Rome in 1884, Bulgari jewelry has built a world-renowned reputation over the years for their Italian excellence, masterful craftsmanship and magnificent coloured gems, especially emeralds – the queen of gems. From Cleopatra to Queen Elizabeth II, emeralds have been the favourite among the royals and the Jubilee Emerald Garden Tiara is no exception
          </Typography>
          <div style={{ marginTop: "30px", display: "flex" }}>
            <ThumbUpOutlinedIcon />
            <span
              style={{
                marginLeft: "2px",
                marginRight: "10px",
                fontWeight: "bolder",
              }}
            >
              30
            </span>
            <ThumbDownOffAltOutlinedIcon />
            <span
              style={{
                marginLeft: "2px",
                marginRight: "10px",
                fontWeight: "bolder",
              }}
            >
              2
            </span>
          </div>
        </Paper>
      </Grid>
      <Grid xs={12} align="center" mb={3}>
        <Paper
          elevation={24}
          sx={{ width: "90%", textAlign: "left", padding: "30px" }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>D</Avatar>
            <div>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                className="blog-text"
                style={{ marginLeft: "12px", marginTop: "8px" }}
              >
                <span className="blog-title"> Doctor</span>
              </Typography>
            </div>
          </div>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            className="blog-text"
            mt={2}
            ml={1}
          >
            <b></b> <span className="blog-title">TABAYER’S OERA COLLECTION</span>
          </Typography>
          <Typography mt={2} ml={1} variant="p" gutterBottom component="div">
            The TABAYER Oera collection draws upon ancient wisdom, spiritual protection and a sculptural abstract of gold and diamonds. First launched at Paris Fashion Week in autumn 2021, the collection will now travel to COUTURE 2022 at Wynn Las Vegas held from June 9-12. I met with Tabayer founder Nigora Tokhtabayeva in Paris to get an intimate look at this timeless yet modern jewellery collection.

            As you know, I won’t recommend any jewels without trying them on myself first. So when I have the opportunity to photograph jewels up close, it is a truly precious and meditative experience. I really get to know the pieces, how they’re crafted, designed and polished, so I can show you my favourite pieces in the best possible light.
          </Typography>
          <div style={{ marginTop: "30px", display: "flex" }}>
            <ThumbUpOutlinedIcon />
            <span
              style={{
                marginLeft: "2px",
                marginRight: "10px",
                fontWeight: "bolder",
              }}
            >
              30
            </span>
            <ThumbDownOffAltOutlinedIcon />
            <span
              style={{
                marginLeft: "2px",
                marginRight: "10px",
                fontWeight: "bolder",
              }}
            >
              2
            </span>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ViewBlog;
