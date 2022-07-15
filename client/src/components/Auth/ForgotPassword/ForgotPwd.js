import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import NavBar from "../../NavBar";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { validateEmail } from "../../../Helpers/validateInfo";
import { useNavigate } from "react-router-dom";
import { isUserLoggedIn } from "../../../Helpers/helper";

const ForgotPwd = () => {
  const [SecurityQuestion, setSecurityQuestion] = React.useState("");

  const title = "Forgot Password?";
  const color = "#000000";
  const navigate = useNavigate();

  const [forgotPwdInfo, setforgotPwdInfo] = useState({
    email: "",
    securityAnswer: "",
    errors: {
      email: "",
      securityAnswer: "",
    },
  });

  useEffect(() => {
    let role = localStorage.getItem("role");
    isUserLoggedIn()
      ? role === "customer"
        ? navigate("/recommendation")
        : navigate("/admin")
      : navigate("/forgotPwd");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEmailErrors = () => {
    setforgotPwdInfo({
      ...forgotPwdInfo,
      errors: {
        ...forgotPwdInfo.errors,
        email: validateEmail(forgotPwdInfo.email),
      },
    });
  };
  const handleSecurityAnswerErrors = () => {
    if (!forgotPwdInfo.securityAnswer) {
      setforgotPwdInfo({
        ...forgotPwdInfo,
        errors: {
          ...forgotPwdInfo.errors,
          securityAnswer: "Security Answer is required",
        },
      });
    } else {
      setforgotPwdInfo({
        ...forgotPwdInfo,
        errors: {
          ...forgotPwdInfo.errors,
          securityAnswer: "",
        },
      });
    }
  };

  const onhandleChange = (name, value) => {
    setforgotPwdInfo({
      ...forgotPwdInfo,
      [name]: value,
    });
  };

  const onhandleSubmit = (e) => {
    if (
      forgotPwdInfo.errors.email == "" &&
      forgotPwdInfo.errors.securityAnswer == ""
    ) {
      navigate("/resetPwd");
    } else {
      handleEmailErrors();
      handleSecurityAnswerErrors();
    }
  };
  return (
    <div>
      <NavBar title={title} color={color}></NavBar>
      <form
        className="form"
        onSubmit={onhandleSubmit}
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
          <label htmlFor="email" className="form-label"></label>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={forgotPwdInfo.email}
            error={forgotPwdInfo.errors.email !== ""}
            helperText={forgotPwdInfo.errors.email}
            onChange={(e) => onhandleChange("email", e.target.value)}
            onBlur={handleEmailErrors}
          />
        </div>
        <br />
        <Box sx={{ minWidth: 225 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Security Question
            </InputLabel>
            <Select
              color="secondary"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={SecurityQuestion}
              label="Security Question"
              onChange={(e) => {
                setSecurityQuestion(e.target.value);
              }}
            >
              <MenuItem value={10}>What's your pet name?</MenuItem>
              <MenuItem value={20}>What's your mother's maiden name?</MenuItem>
              <MenuItem value={30}>
                What's the brand of your first car?
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
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
            value={forgotPwdInfo.securityAnswer}
            error={forgotPwdInfo.errors.securityAnswer !== ""}
            helperText={forgotPwdInfo.errors.securityAnswer}
            onChange={(e) => onhandleChange("securityAnswer", e.target.value)}
            onBlur={handleSecurityAnswerErrors}
          />
        </div>
        <br />
        <Button
          // href="/resetPwd"
          color="secondary"
          className="form-input-btn"
          variant="contained"
          type="submit"
          style={{ background: "#000000" }}
          // onClick={handleUserSubmit}
          onSubmit={onhandleSubmit}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ForgotPwd;
