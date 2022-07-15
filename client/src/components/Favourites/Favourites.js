import React, { Component } from "react";
import FavouriteCard from "./FavouriteCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import axios from "axios";

class Favourites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourites: [],
    };
  }

  componentDidMount = async () => {
    try {
      const user=JSON.parse(localStorage.getItem("user"))
      console.log(user);
      console.log(user._id)
      const res = await axios.get("http://localhost:8080/favourites/fetchfavourites?"+`id=${user._id}`)
      console.log(res.data.data)

      if(res.data.success){
        this.setState({ favourites: res.data.data})
      }
    }
    catch (error) { console.log(error) }
    const { favourites } = this.state;
    console.log(favourites);
  };

  render() {
    const { favourites } = this.state;
    console.log(favourites)
    return (
      <div>
        <Container maxWidth="lg">
          <h1 margin-top="200px" align="left">
            My Wishlist
          </h1>
          <Box sx={{ flexGrow: 1, mx: "auto", mt: 4 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {favourites==undefined?<h3>You do not have any products added to Wishlist</h3>:favourites.length==0?
              <h3>You do not have any products added to Wishlist</h3>
              :favourites.map((favourite) => (
                <Grid item>
                  <FavouriteCard data={favourite} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </div>
    );
  }
}

export default Favourites;
