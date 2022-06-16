
import { Box, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { Button } from '@mui/material';
import blingsvg from '../../images/User Profile.svg';
import NavBar from "../NavBar";
import "./Profile.css";
import useForm from '../../Helpers/useForm'



const Profile = () => {
    const [title, setTitle] = React.useState("User Profile");
    const [color, setColor] = React.useState("#000000");
    const[user,setUser]=React.useState({firstName:'Guryash Singh', lastName:'Dhall', email:'guryash.dhall@dal.ca'});
   
    const handleChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
      };
     return (
        
        <Grid container >
           
             <Grid xs={12} align="center" mb={3} >
             <NavBar title={title} color={color}></NavBar>
            <Paper
                elevation={24}      
                sx={{ width: "90%", height: "100%", padding: "30px", spacing: 5 , display: "flex",
                flexFlow:"row"} }
            >

                    
                {/* Grid for User Profile Image */}
                <Grid item sm={6}  alignContent='center'>
                    <Box sx={{
                        display: 'flex',
                        flexFlow: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 'auto',
                        height: '50%',
                        margin: 'auto'
                    }}>
                        <img src={blingsvg} alt="bling" width="100%" height="100%" min-width="300" alignitems='left' className="center bling-image" />
                    </Box>
                </Grid>
                 {/* Grid for Other Fields */}
                <Grid item sm={6}>
                    <Typography mt={2} ml={1} variant="p" gutterBottom component="div">
                        <TextField
                            label="First Name"
                            id='firstName'
                            type="text"
                            name="firstName"
                            className='form-inputs'
                            placeholder='Update your First Name'
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
                            className='form-input'
                            placeholder='Update your Last Name'
                            variant="outlined"
                            color="secondary"
                            value={user.lastName}
                            onChange={handleChange} />
                        <br />
                        <br />
                        <TextField
                            label="Email"
                            id="email"
                            type="email"
                            name="email"
                            className='form-input'
                            placeholder='Update your Email'
                            variant="outlined"
                            color="secondary"
                            value={user.email}
                            onChange={handleChange}
                        />
                        <br />
                        <br />
                        <br />
                        <Typography >
                            <Button
                                className='form-input-btn'
                                variant="contained"
                                type='submit'
                                style={{ color: 'secondary', maxWidth: "200px", maxHeight: "200px", background: '#6A0DAD', textAlign: 'center', alignItems: "center", justifyContent: "center", alignContent: 'center' }}>Save Profile</Button>
                        </Typography>
                    </Typography>

                </Grid>
            </Paper>
            </Grid>
        </Grid>
    );
};

export default Profile;
