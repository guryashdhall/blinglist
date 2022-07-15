import { Box, Grid, Paper, TextField, Typography } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import React, { useEffect } from "react";
import { Button } from "@mui/material";
import blingsvg from "../../images/User Profile.svg";
import "./Profile.css";
import NavBarProfile from "../NavbarProfile";
import { useNavigate } from "react-router-dom";
import { isUserLoggedIn } from "../../Helpers/helper";

const Profile = () => {
  const navigate = useNavigate();

  const title = "User Profile";
  const color = "#000000";
  // const [user, setUser] = React.useState({
  //   firstName: "Guryash Singh",
  //   lastName: "Dhall",
  //   email: "guryash.dhall@dal.ca",
  // });

  useEffect(() => {
    let role = localStorage.getItem("role");
    isUserLoggedIn()
      ? role === "customer"
        ? navigate("/profile")
        : navigate("/admin")
      : navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const saveProfile = () => {
    toast.success("Profile Updated Susccessfully!", {
      position: "bottom-right",
      theme: "dark",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <Grid container>
      <Grid xs={12} align="center" mb={3}>
        <div>
          <NavBarProfile title={title} color={color} />
        </div>
        <Paper
          elevation={24}
          sx={{
            width: "90%",
            height: "100%",
            padding: "30px",
            spacing: 5,
            display: "flex",
            flexFlow: "row",
          }}
        >
          {/* Grid for User Profile Image */}
          <Grid item sm={6} alignContent="center">
            <Box
              sx={{
                display: "flex",
                flexFlow: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "auto",
                height: "50%",
                margin: "auto",
              }}
            >
              <img
                src={blingsvg}
                alt="bling"
                width="100%"
                height="100%"
                min-width="300"
                alignitems="left"
                className="center bling-image"
              />
            </Box>
          </Grid>
          {/* Grid for Other Fields */}
          <Grid item sm={6}>
            <Typography mt={2} ml={1} variant="p" gutterBottom component="div">
              <TextField
                label="First Name"
                id="firstName"
                type="text"
                name="firstName"
                className="form-inputs"
                placeholder="Update your First Name"
                variant="outlined"
                color="secondary"
                value={user.firstName}
                onChange={handleChange}
              />
              <br />
              <br />
              <TextField
                label="Last Name"
                id="lastName"
                type="text"
                name="lastName"
                className="form-input"
                placeholder="Update your Last Name"
                variant="outlined"
                color="secondary"
                value={user.lastName}
                onChange={handleChange}
              />
              <br />
              <br />
              <TextField
                label="Email"
                id="email"
                type="email"
                name="email"
                className="form-input"
                placeholder="Update your Email"
                variant="outlined"
                color="secondary"
                value={user.email}
                onChange={handleChange}
              />
              <br />
              <br />
              <br />
              <Typography>
                <Button
                  className="form-input-btn"
                  variant="contained"
                  type="submit"
                  style={{
                    color: "secondary",
                    maxWidth: "200px",
                    maxHeight: "200px",
                    background: "#6A0DAD",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                  onClick={saveProfile}
                >
                  Save Profile
                </Button>
              </Typography>
            </Typography>
          </Grid>
        </Paper>
      </Grid>
      <ToastContainer />
    </Grid>
  );
};

export default Profile;
