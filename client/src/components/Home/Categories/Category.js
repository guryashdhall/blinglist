import React from "react";
import { Container, Box, Grid, Typography} from "@mui/material";
import useStyles from "./Styles.js";

const Category = () => {
  const classes = useStyles();
  return (
    <>
      <Container >
        <Box mt={4} mb={2} sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item lg={4} md={2} xs={4}>
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
            <Grid item lg={4} md={2} xs={4}>
            <div className={classes.gridItem}>
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
            <Grid item lg={4} md={2} xs={4}>
            <div className={classes.gridItem}>
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
        </Box>
      </Container>
    </>
  );
};
export default Category;
