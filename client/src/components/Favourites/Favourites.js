import React, { useEffect, useState } from "react";
import FavouriteCard from "./FavouriteCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import axios from "axios";
import { BACKEND_URL } from "../../config/config";
import { useNavigate } from "react-router-dom";
import { isUserLoggedIn } from "../../Helpers/helper";

const Favourites = () => {
  const navigate = useNavigate();
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem("user"))
      console.log(user._id);
      console.log(user)
      if (!isUserLoggedIn()) {
        navigate('/')
      } else {
        async function fetchData() {
          const res = await axios.get(BACKEND_URL + "favourites/fetchfavourites?" + `id=${user._id}`)
          console.log(res)
          if (res.data.success) {
            setFavourites(res.data.data)
          }
        }
        fetchData()

      }

    }
    catch (error) { console.log(error) }
  }, [])


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
            {favourites == undefined ? <h3>You do not have any products added to Wishlist</h3> : favourites.length == 0 ?
              <h3>You do not have any products added to Wishlist</h3>
              : favourites.map((favourite) => (
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

export default Favourites;
