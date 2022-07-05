import {
  Button,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router-dom";
function Summary() {
  const navigate = useNavigate();
  const boxStyles = (Theme) => ({
    width: "100%",
    [Theme.breakpoints.down("md")]: {
      width: "95%",
      m: "auto",
    },
  });
  return (
    <>
      <Paper elevation={10} sx={boxStyles}>
        <Grid container direction="column" alignItems={"center"}>
          <Grid item xs={12} sx={{ m: 2 }}></Grid>
          <Grid item xs={12}>
            <Typography variant="h4">Order Summary</Typography>
          </Grid>
          <Grid item xs={12}>
            <TableContainer sx={{ width: "100%" }}>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Product Name</TableCell>
                  <TableCell align="center">Quantity</TableCell>
                  <TableCell align="center">Total Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center">Jwellery</TableCell>
                  <TableCell align="center">{1}</TableCell>
                  <TableCell align="center">{400}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">Jwellery</TableCell>
                  <TableCell align="center">{1}</TableCell>
                  <TableCell align="center">{400}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">Jwellery</TableCell>
                  <TableCell align="center">{1}</TableCell>
                  <TableCell align="center">{400}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">Discount</TableCell>
                  <TableCell align="center">{}</TableCell>
                  <TableCell align="center">{-40}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">Total Price</TableCell>
                  <TableCell align="center">{}</TableCell>
                  <TableCell align="center">{14000}</TableCell>
                </TableRow>
              </TableBody>
            </TableContainer>
          </Grid>
          <Grid item md={12} xs={12}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => {navigate("/checkout")}}
              sx={{ m: 2 }}
            >
              Checkout
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default Summary;
