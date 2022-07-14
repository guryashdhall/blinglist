import { Box, Grid, TextField, Typography, IconButton, Button } from "@mui/material";
import React from "react";
import { Image } from "mui-image";
import Plus from "@mui/icons-material/Add";
import Subtract from "@mui/icons-material/Remove";

const Pricestyles = (Theme) => ({
  minWidth: "90%",
  m: 4,
  [Theme.breakpoints.down("md")]: {
    width: "15vh",
    height: "50%",
  },
});
const Imagestyles = (Theme) => ({
  width: "100%",
  height: "100%",
  [Theme.breakpoints.down("md")]: {
    width: "50%",
    height: "50%",
  },
});
const boxStyles = (Theme) => ({
  width: "90vh",
  backgroundColor: "background.paper",
  [Theme.breakpoints.down("md")]: {
    width: "100%",
    backgroundColor: "background.paper",
  },
});
function ProductCard() {
  const defaultValue = 1;
  return (
    <>
      <Box sx={boxStyles}>
        <Grid container direction="row" justifyContent={"flex-start"}>
          <Grid item md={5}>
            <Image src={require("../../images/j1.jpg")} sx={Imagestyles} />
          </Grid>
          <Grid item md={4} sx={{ m: 1 }}>
            <Typography gutterBottom variant="h6" component="div">
              Product_Name
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Product_Size:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is a short product description
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton sx={{ mt: 1, color: "blue" }}>
                <Subtract />
              </IconButton>
              <TextField
                variant="filled"
                inputProps={{
                  style: {
                    height: "1vh",
                  },
                }}
                value={defaultValue}
                sx={{ maxWidth: "20%", mt: 1, maxHeight: "1" }}
              />
              <IconButton sx={{ mt: 1, color: "blue" }}>
                <Plus />
              </IconButton>
            </Box>
            <Button variant ="outlined" sx={{mt:5 ,ml:2,color:"red"}}>Remove</Button>
          </Grid>
          <Grid item md={2}>
            <TextField
              outlined
              label="Price"
              disabled
              value={400}
              sx={Pricestyles}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default ProductCard;
