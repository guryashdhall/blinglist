import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import blingsvg from "../../../images/LOGO BLING SVG.svg";
import useForm from "../../../Helpers/useForm";
import validate from "../../../Helpers/validateInfo";
// import LoggedInAlert from './components/SuccessAlert';

const theme = createTheme();

export default function SignIn() {
  const { values, errors, handleSubmit, handleChange } = useForm(validate);

  return (
    <ThemeProvider theme={theme}>
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
            {/* <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br /> */}
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <Typography component="h1" variant="h5">
                Already a member?
              </Typography>

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
                autoComplete="email"
                autoFocus
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p style={{ color: "#FF0000" }}>{errors.email}</p>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={values.password}
                onChange={handleChange}
              />

              {errors.password && (
                <p style={{ color: "#FF0000" }}>{errors.password}</p>
              )}
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                // onClick={() => {
                //   setLoggedInStatus(true)}}
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2, backgroundColor: "black", color: "white" }}
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
              {/* {loggedInStatus?<LoggedInAlert alertMsg={"Logged In Successfully !"}/>:<></>} */}
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
