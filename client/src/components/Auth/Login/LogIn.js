import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import blingsvg from "../../../images/LOGO BLING SVG.svg";
import useForm from "../../../Helpers/useForm";
import validate, { validateEmail } from "../../../Helpers/validateInfo";
import Switch from '@mui/material/Switch';
import axios from "axios";
import SuccessAlert from "../../SuccessAlert";
import M from "materialize-css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const theme = createTheme();

export default function SignIn() {

  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    errors: {
      email: '',
      password: ''
    }
  });

  const handleEmailErrors = () => {
    setUserInfo({
      ...userInfo,
      errors: {
        ...userInfo.errors,
        email: validateEmail(userInfo.email)
      }
    })

  }

  const handlePwdErrors = () => {
    if (!userInfo.password) {
      setUserInfo({
        ...userInfo, errors: {
          ...userInfo.errors,
          password: "Password is required"
        }
      })
    } else if (userInfo.password.length < 8) {

      setUserInfo({
        ...userInfo, errors: {
          ...userInfo.errors, password: "Password needs to be 8 characters or more"
        }
      })
    }
    else {
      setUserInfo({
        ...userInfo, errors: {
          ...userInfo.errors, password: ""
        }
      })
    }
  }

  const onhandleChange = (name, value) => {
    setUserInfo({

      ...userInfo,
      [name]: value
    })
  }

  // const [checked, setChecked] = useState(true)

  const onhandleSubmit = (e) => {
    e.preventDefault();
    if (userInfo.errors.email == '' && userInfo.errors.password == '') {
      axios.post("http://localhost:8080/login", {
        email: userInfo.email,
        password: userInfo.password
      }).then(res => {
        console.log(res.data);
        if (res.data.success === true) {
          if (res.data.user.role == "customer") {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("role", res.data.user.role);

            console.log("I AM HERE" + res.data.message);
            toast.success(res.data.message, {
              position: "top-right",
              theme: "dark",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              onClose: () => {
                navigate("/recommendation");
              }
            });
          }
          else {
            toast.success(res.data.message, {
              position: "top-right",
              theme: "dark",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              onClose: () => {
                navigate("/admin");
              }
            });

          }
        }
        else {
          toast.error(res.data.message, {
            position: "top-right",
            theme: "dark",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          })
        }
      }
      ).catch(err => {
        console.log(err);
      }
      );
    }
    else {
      handleEmailErrors();
      handlePwdErrors();
    }
  }
  return (
    <ThemeProvider theme={theme}>
      {console.log(userInfo.errors)}
      <Box
        sx={{
          display: "flex",
          flexFlow: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
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
            alignitems="center"
            className="center bling-image"
          />
        </Box>
        <Container
          component="main"
          maxWidth="xs"
          margin="auto"
          alignitems="center"
        >
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignitems: "center",
            }}
          >
            <Box >
              <Typography component="h1" variant="h5">
                Already a member?
              </Typography>

              <form onSubmit={(e) => { onhandleSubmit(e); }}>

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={userInfo.email}
                  error={userInfo.errors.email !== ""}
                  helperText={userInfo.errors.email}
                  onChange={(e) => onhandleChange("email", e.target.value)}
                  onBlur={handleEmailErrors}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  // autoComplete="current-password"
                  value={userInfo.password}
                  error={userInfo.errors.password !== ""}
                  helperText={userInfo.errors.password}
                  onChange={(e) => onhandleChange("password", e.target.value)}
                  onBlur={handlePwdErrors}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  sx={{ mt: 3, mb: 2, backgroundColor: "black", color: "white" }}
                  onSubmit={<SuccessAlert />}
                // onClick={(e) => { onhandleSubmit(e); }}
                >
                  Log In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="/forgotPwd" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Box>
        </Container>
        <ToastContainer />
      </Box>
    </ThemeProvider>
  );
}

