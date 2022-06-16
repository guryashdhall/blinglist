import React, { useState } from "react";
import { Container, Box, Grid, Typography } from "@mui/material";
import useStyles from "./Styles.js";

const Category = () => {
  const [carHover, setcarHover] = useState(false);
  const classes = useStyles();
  return (
    <>
      <Container sx={{ textAlign: "center" }}>
        <Box mt={4} mb={2} sx={{ flexGrow: 1 }}>
          <Grid alignContent="center">
            <Grid container xs={12} spacing={2}>
              <Grid item xs={2}>
                <div className={classes.gridItem}>
                  <div className={classes.img_root}>
                    <img
                      className={classes.img_responsive}
                      src={`./images/ring.svg`}
                      alt="ah"
                    />
                  </div>
                  <Typography variant="h5" align="center">
                    Rings
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={2}>
                <div
                  onMouseLeave={() => {
                    setcarHover(false);
                  }}
                  onMouseEnter={() => {
                    setcarHover(true);
                  }}
                  className={classes.gridItem}
                >
                  <div className={classes.img_root}>
                    <img
                      className={classes.img_responsive}
                      src={`./images/necklace.svg`}
                      alt="ah"
                    />
                  </div>
                  <Typography variant="h5" align="center">
                    Necklaces
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={2}>
                <div
                  onMouseLeave={() => {
                    setcarHover(false);
                  }}
                  onMouseEnter={() => {
                    setcarHover(true);
                  }}
                  className={classes.gridItem}
                >
                  <div className={classes.img_root}>
                    <img
                      className={classes.img_responsive}
                      src={`./images/earring.svg`}
                      alt="ah"
                    />
                  </div>
                  <Typography variant="h5" align="center">
                    Earrings
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
export default Category;
