import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../../Helpers/useForm";
import validate, { validateEmail } from "../../../Helpers/validateInfo";
// import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import NavBar from "../../NavBar";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import validateInfo from "../../../Helpers/validateInfo";
import M from 'materialize-css';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FormSignUp = () => {
  const navigate = useNavigate();

  // const { handleChange, values, handleSubmit, errors } = useForm(validate);
  //const [SecurityQuestion, setSecurityQuestion] = React.useState("");
  //console.log(setSecurityQuestion(""))
  const SecurityQuestion = "";


  const [signUpInfo, setSignUpInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    securityAnswer: '',
    securityQuestion: '',
    errors: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      securityAnswer: '',
      securityQuestion: ''
    }
  });


  const handleEmailErrors = () => {
    setSignUpInfo({
      ...signUpInfo,
      errors: {
        ...signUpInfo.errors,
        email: validateEmail(signUpInfo.email)
      }
    })

  }

  const handleFirstNameErrors = () => {
    if (!signUpInfo.firstName) {
      setSignUpInfo({
        ...signUpInfo, errors: {
          ...signUpInfo.errors, firstName: "First Name is required"
        }
      })
    }
    else {
      setSignUpInfo({
        ...signUpInfo, errors: {
          ...signUpInfo.errors, firstName: ""
        }
      })
    }
  }



  const handleLastNameErrors = () => {
    if (!signUpInfo.lastName) {
      setSignUpInfo({
        ...signUpInfo, errors: {
          ...signUpInfo.errors, lastName: "Last Name is required"
        }
      })
    } else {
      setSignUpInfo({
        ...signUpInfo, errors: {
          ...signUpInfo.errors, lastName: ""
        }
      })
    }
  }
  const handlePwdErrors = () => {
    if (!signUpInfo.password) {
      setSignUpInfo({
        ...signUpInfo, errors: {
          ...signUpInfo.errors, password: "Password is required"
        }
      })
    } else if (signUpInfo.password.length < 8) {

      setSignUpInfo({
        ...signUpInfo, errors: {
          ...signUpInfo.errors, password: "Password needs to be 8 characters or more"
        }
      })
    }
    else {
      setSignUpInfo({
        ...signUpInfo, errors: {
          ...signUpInfo.errors, password: ""
        }
      })
    }
  }


  const handleConfirmPwdErrors = () => {
    if (!signUpInfo.confirmPassword) {
      setSignUpInfo({
        ...signUpInfo, errors: {
          ...signUpInfo.errors, confirmPassword: "Password is required"
        }
      })
    } else if (signUpInfo.confirmPassword.length < 8) {

      setSignUpInfo({
        ...signUpInfo, errors: {
          ...signUpInfo.errors, confirmPassword: "Password needs to be 8 characters or more"
        }
      })
    } else if (signUpInfo.confirmPassword !== signUpInfo.password) {
      setSignUpInfo({
        ...signUpInfo, errors: {
          ...signUpInfo.errors, confirmPassword: "Passwords do not match"
        }
      })
    }
    else {
      setSignUpInfo({
        ...signUpInfo, errors: {
          ...signUpInfo.errors, confirmPassword: ""
        }
      })
    }
  }


  const handleSecuritAnswerErrors = () => {
    if (!signUpInfo.securityAnswer) {
      setSignUpInfo({
        ...signUpInfo, errors: {
          ...signUpInfo.errors, securityAnswer: "Security Answer is required"
        }
      })
    }
    else {
      setSignUpInfo({
        ...signUpInfo, errors: {
          ...signUpInfo.errors, securityAnswer: ""
        }
      })
    }
  }
  const onhandleChange = (name, value) => {
    console.log(signUpInfo);
    setSignUpInfo({

      ...signUpInfo,
      [name]: value
    })
  }

  const onhandleSubmit = (e) => {
    e.preventDefault();
    console.log(signUpInfo);
    if (signUpInfo.errors.firstName === '' && signUpInfo.errors.lastName === '' && signUpInfo.errors.email === '' && signUpInfo.errors.password === '' && signUpInfo.errors.confirmPassword === '' && signUpInfo.errors.securityAnswer === '') 
    {
      console.log(signUpInfo);
      axios.post("http://localhost:8080/signup", {
        firstName: signUpInfo.firstName,
        lastName: signUpInfo.lastName,
        email: signUpInfo.email,
        password: signUpInfo.password,
        confirmPassword: signUpInfo.confirmPassword,
        securityAnswer: signUpInfo.securityAnswer,
        securityQuestion: signUpInfo.securityQuestion
      }).then(res => {
        if (res.data.success) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("role", res.data.user.role);
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
              navigate("/");
            }
          })
          // M.toast({ html: res.data.message, classes: "green", onClose: navigate("/login") });

        } else {
          toast.error(res.data.message, {
            position: "top-right",
            theme: "dark",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          });
        }
      }
      ).catch(err => {
        console.log(err);
      }
      );
    }
    else {
      handleFirstNameErrors();
      handleLastNameErrors();
      handleEmailErrors();
      handlePwdErrors();
    }
  }
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
            value={signUpInfo.firstName}
            error={signUpInfo.errors.firstName !== ""}
            helperText={signUpInfo.errors.firstName}
            onChange={(e) => onhandleChange("firstName", e.target.value)}
            onBlur={handleFirstNameErrors}
            variant="outlined"
          />
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
            value={signUpInfo.lastName}
            color="secondary"
            error={signUpInfo.errors.lastName !== ""}
            helperText={signUpInfo.errors.lastName}
            onChange={(e) => onhandleChange("lastName", e.target.value)}
            onBlur={handleLastNameErrors}
          />
        </div>
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
            value={signUpInfo.email}
            error={signUpInfo.errors.email !== ""}
            helperText={signUpInfo.errors.email}
            onChange={(e) => onhandleChange("email", e.target.value)}
            onBlur={handleEmailErrors}
          />
        </div>
        <br />
        <div className="form-inputs">
          <label htmlFor="password" className="form-label"></label>
          <TextField
            label="Password"
            id="password"
            type="password"
            name="password"
            className="form-inputs"
            placeholder="Enter your Password"
            value={signUpInfo.password}
            error={signUpInfo.errors.password !== ""}
            helperText={signUpInfo.errors.password}
            onChange={(e) => onhandleChange("password", e.target.value)}
            onBlur={handlePwdErrors}
          />
        </div>
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
            value={signUpInfo.confirmPassword}
            error={signUpInfo.errors.confirmPassword !== ""}
            helperText={signUpInfo.errors.confirmPassword}
            onChange={(e) => onhandleChange("confirmPassword", e.target.value)}
            onBlur={handleConfirmPwdErrors}
          />
        </div>
        <br />
        <Box sx={{ minWidth: 225 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" value={SecurityQuestion}>
              Security Question
            </InputLabel>
            <Select
              name="securityQuestion"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Security Question"
              onChange={(e) => onhandleChange("securityQuestion", e.target.value)}
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
            value={signUpInfo.securityAnswer}
            error={signUpInfo.errors.securityAnswer !== ""}
            helperText={signUpInfo.errors.securityAnswer}
            onChange={(e) => onhandleChange("securityAnswer", e.target.value)}
            onBlur={handleSecuritAnswerErrors}
          />
        </div>
        <br />

        <Button
          className="form-input-btn"
          variant="contained"
          type="submit"
          style={{ background: "#000000" }}
          onClick={onhandleSubmit}
        >
          Register
        </Button>
      </form>
      <ToastContainer />
    </div>
  );
 };

export default FormSignUp;
