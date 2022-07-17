import { Box, Grid, TextField, Typography, IconButton, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Image } from "mui-image";
import Plus from "@mui/icons-material/Add";
import Subtract from "@mui/icons-material/Remove";
import { connect } from "react-redux";
import { increase,decrease } from "../../store/actions/Jewels";
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
function ProductCard(props) {
  const[quantity,setProduct] = useState({})
  useEffect(()=>{
    setProduct(props.products.quantity)
  },[props.products.quantity])
  const defaultValue = 1;
  const handleSubtract = () => {
    var temp = quantity -1
    setProduct(temp)
    props.decrease(props.index)
  }
  const handleAdd = () => {
    var temp = quantity +1
    setProduct(temp)
    props.increase(props.index)
  }
  return (
    <>
      <Box sx={boxStyles}>
        <Grid container direction="row" justifyContent={"flex-start"}>
          <Grid item md={5}>
            <Image src={props.products.productImage} sx={Imagestyles} />
          </Grid>
          <Grid item md={4} sx={{ m: 1 }}>
            <Typography gutterBottom variant="h6" component="div">
              {props.products.productName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {"Type:"+" "+props.products.productType}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.products.productDescription}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton sx={{ mt: 1, color: "blue" }} onClick={handleSubtract}>
                <Subtract />
              </IconButton>
              <TextField
                variant="filled"
                inputProps={{
                  style: {
                    height: "1vh",
                  },
                }}
                value={quantity}
                sx={{ maxWidth: "20%", mt: 1, maxHeight: "1" }}
              />
              <IconButton sx={{ mt: 1, color: "blue" }} onClick={handleAdd}>
                <Plus />
              </IconButton>
            </Box>
            <Button variant ="outlined" sx={{mt:5 ,ml:2,color:"red"}}>Remove</Button>
          </Grid>
          <Grid item md={2}>
            <TextField
              outlined
              label="Price"
              focused
              disabled
              value={props.products.productPrice}
              sx={Pricestyles}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
const mapDispatchtoProps = (dispatch) => {
  return {
    increase: (data) => {
      dispatch(increase(data));
    },
    decrease: (data) => {
      dispatch(decrease(data));
    }
  };
};
export default connect(null, mapDispatchtoProps) (ProductCard);
