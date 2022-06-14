import React from 'react'
import { AppBar, Typography, TextField, Toolbar } from '@material-ui/core';
import useStyles from "./Styles.js";
import { Link } from 'react-router-dom';
import blingLogo from '../../images/logo.svg'
import bling from '../../images/bling.png'
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Navbar = () => {
    const classes = useStyles();

    return(
        <div>
            <AppBar className={classes.appBar} color="inherit">
                <Link to="/" className={classes.brandContainer}>
                    <img src={bling} alt="TheBlingList" height="45px"/>
                    <img className={classes.image} src={blingLogo} alt="memories" height="40px" />
                </Link>
                <Link to="/aboutus" style={{ color: 'inherit', textDecoration: 'inherit'}}><Typography>About Us</Typography></Link>
                <Link to="/products" style={{ color: 'inherit', textDecoration: 'inherit'}}><Typography>Products</Typography></Link>
                <Link to="/blogs" style={{ color: 'inherit', textDecoration: 'inherit'}}><Typography >Blogs</Typography></Link>
                <Link to="/contactus" style={{ color: 'inherit', textDecoration: 'inherit'}}><Typography >Contact Us</Typography></Link>
                <Toolbar>
                    <TextField
                        label="Search"
                        InputProps={{
                            endAdornment: (
                            <InputAdornment position='start'>
                                <IconButton>
                                <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                            )
                        }}
                    />
                    
                    <LocationOnOutlinedIcon style={{width: "50px", height: "35px"}}/>
                    <FavoriteBorderIcon style={{width: "50px", height: "35px"}}/>
                    <PersonOutlineOutlinedIcon style={{width: "50px", height: "35px"}}/>
                    <ShoppingBagOutlinedIcon style={{width: "50px", height: "35px"}}/>
                </Toolbar>
                
            </AppBar>
            
            
        </div>
    );
}

export default Navbar;