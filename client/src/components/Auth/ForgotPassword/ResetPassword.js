import React, { useEffect } from "react";
import useForm from "../../../Helpers/useForm";
import validate from "../../../Helpers/validateInfo";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import NavBar from "../../NavBar";
import SuccessAlert from "../../SuccessAlert";
import { isUserLoggedIn } from "../../../Helpers/helper";
import { useNavigate } from "react-router-dom";

const PasswordReset = () => {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);
  const navigate = useNavigate();

  const title = "Reset Password";
  const color = "#000000";

  useEffect(() => {
    let role = localStorage.getItem("role");
    isUserLoggedIn()
      ? role === "customer"
        ? navigate("/recommendation")
        : navigate("/admin")
      : navigate("/resetPwd");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="form-content-right">
      <NavBar title={title} color={color}></NavBar>
      <form
        className="form"
        onSubmit={handleSubmit}
        s
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
          <label htmlFor="newpassword" className="form-label"></label>
          <TextField
            color="secondary"
            label="New Password"
            id="newpassword"
            type="password"
            name="newpassword"
            className="form-inputs"
            placeholder="Enter your New Password"
            value={values.newpassword}
            onChange={handleChange}
          />
        </div>
        <br />
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
        <div className="form-inputs">
          <label htmlFor="confirmNewPassword" className="form-label"></label>
          <TextField
            color="secondary"
            label="Confirm New Password"
            id="confirmNewPassword"
            type="password"
            name="confirmNewPassword"
            className="form-inputs"
            placeholder="Enter your New Password"
            value={values.confirmNewPassword}
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

        <Button
          onSubmit={<SuccessAlert />}
          className="form-input-btn"
          variant="contained"
          type="submit"
          style={{ background: "#000000" }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default PasswordReset;
