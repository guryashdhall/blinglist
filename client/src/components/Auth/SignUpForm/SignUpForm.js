import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../../Helpers/useForm";
import validate from "../../../Helpers/validateInfo";
// import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import NavBar from "../../NavBar";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const FormSignUp = () => {
  const navigate = useNavigate();

  const { handleChange, values, handleSubmit, errors } = useForm(validate);
  //const [SecurityQuestion, setSecurityQuestion] = React.useState("");
  //console.log(setSecurityQuestion(""))
  const SecurityQuestion = "";

  const title = "Join us Today!";
  const color = "#000000";
  return (
    <div className="form-content-right">
      <NavBar title={title} color={color}></NavBar>
      <form
        className="form"
        style={{
          display: "flex",
          flexFlow: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <h1> Join us today! Please enter the details below</h1> */}
        <br />
        <br />
        <div className="form-inputs">
          <label htmlFor="firstName" className="form-label"></label>
          <TextField
            label="First Name"
            id="firstName"
            type="text"
            name="firstName"
            className="form-inputs"
            placeholder="Enter your First Name"
            value={values.firstName}
            onChange={handleChange}
            variant="outlined"
          />
          {errors.firstName && (
            <p
              style={{
                color: "#FF0000",
                alignItems: "center",
                textAlign: "center",
                margin: "5px",
              }}
            >
              {errors.firstName}
            </p>
          )}
        </div>
        <br />
        <div className="form-inputs">
          <label htmlFor="lastName" className="form-label"></label>
          <TextField
            label="Last Name"
            id="lastName"
            type="text"
            name="lastName"
            className="form-input"
            placeholder="Enter your Last Name"
            value={values.lastName}
            onChange={handleChange}
            color="secondary"
          />
        </div>
        {errors.lastName && (
          <p
            style={{
              color: "#FF0000",
              alignItems: "center",
              textAlign: "center",
              margin: "5px",
            }}
          >
            {errors.lastName}
          </p>
        )}
        <br />
        <div className="form-inputs">
          <label htmlFor="email" className="form-label"></label>
          <TextField
            label="Email"
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your Email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        {errors.email && (
          <p
            style={{
              color: "#FF0000",
              alignItems: "center",
              textAlign: "center",
              margin: "5px",
            }}
          >
            {errors.email}
          </p>
        )}
        <br />
        <div className="form-inputs">
          <label htmlFor="password]" className="form-label"></label>
          <TextField
            label="Password"
            id="password"
            type="password"
            name="password"
            className="form-inputs"
            placeholder="Enter your Password"
            value={values.password}
            onChange={handleChange}
          />
        </div>

        {errors.password && (
          <p
            style={{
              color: "#FF0000",
              alignItems: "center",
              textAlign: "center",
              margin: "5px",
            }}
          >
            {errors.password}
          </p>
        )}
        <br />
        <div className="form-inputs">
          <label htmlFor="confirmPassword" className="form-label"></label>
          <TextField
            label="Confirm Password"
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            className="form-inputs"
            placeholder="Enter your Password"
            value={values.confirmPassword}
            onChange={handleChange}
          />
        </div>
        {errors.confirmPassword && (
          <p
            style={{
              color: "#FF0000",
              alignItems: "center",
              textAlign: "center",
              margin: "5px",
            }}
          >
            {errors.confirmPassword}
          </p>
        )}
        <br />
        <Box sx={{ minWidth: 225 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" value={SecurityQuestion}>
              Security Question
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Security Question"
              onChange={handleChange}
            >
              <MenuItem value={"What's your pet name?"}>
                What's your pet name?
              </MenuItem>
              <MenuItem value={"What's your mother's maiden name?"}>
                What's your mother's maiden name?
              </MenuItem>
              <MenuItem value={"What's the brand of your first car?"}>
                What's the brand of your first car?
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <br />
        <br />
        <div className="form-inputs">
          <label htmlFor="Security Answer" className="form-label"></label>
          <TextField
            label="Security Answer"
            id="securityAnswer"
            type="text"
            name="securityAnswer"
            className="form-inputs"
            placeholder="Enter Security Answer"
            value={values.securityAnswer}
            onChange={handleChange}
            variant="outlined"
          />
          {errors.securityAnswer && (
            <p
              style={{
                color: "#FF0000",
                alignItems: "center",
                textAlign: "center",
                margin: "5px",
              }}
            >
              {errors.securityAnswer}
            </p>
          )}
        </div>
        <br />

        <Button
          className="form-input-btn"
          variant="contained"
          type="submit"
          style={{ background: "#000000" }}
          onClick={handleSubmit}
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default FormSignUp;
