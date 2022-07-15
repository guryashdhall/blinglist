import React from "react";
import { AppBar, Typography, TextField, Toolbar } from "@material-ui/core";
import useStyles from "./Styles.js";
import { Link, useNavigate } from "react-router-dom";
import bling from "../../images/bling.png";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.appBar} color="inherit">
        <Link to={"/"} className={classes.brandContainer}>
          <img src={bling} alt="TheBlingList" height="42px" />
        </Link>
        <Link
          to="/blogs"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <Typography>BLOGS</Typography>
        </Link>
        <Link
          to={"/recommendation"}
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <Typography>PRODUCTS</Typography>
        </Link>

        <Link
          to={"/giftcard"}
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <Typography>GIFT CARD</Typography>
        </Link>

        <Toolbar>
          <TextField
            label="Search"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Link to={"/map"}>
            <LocationOnOutlinedIcon
              style={{
                width: "50px",
                height: "35px",
                color: "black",
                paddingTop: "14%",
              }}
            />
          </Link>
          <Link to={"/favorites"}>
            <FavoriteBorderIcon
              style={{
                width: "50px",
                height: "35px",
                color: "black",
                paddingTop: "14%",
              }}
            />
          </Link>
          <Link to={"/profile"}>
            <PersonOutlineOutlinedIcon
              style={{
                width: "50px",
                height: "35px",
                color: "black",
                paddingTop: "14%",
              }}
            />
          </Link>
          <Link to={"/cart"}>
            <ShoppingBagOutlinedIcon
              style={{
                width: "50px",
                height: "35px",
                color: "black",
                paddingTop: "14%",
              }}
            />
          </Link>
          <div
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
          >
            <LogoutIcon
              style={{
                width: "50px",
                height: "35px",
                color: "black",
                paddingTop: "14%",
                cursor: "pointer",
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
