import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Alert, Snackbar, TextField } from "@mui/material";
import { Rating } from "@mui/material";
import { insertReview } from "../../store/actions/Jewels.js"

import { connect } from "react-redux";

function InputCard(props) {
  const [check_title, setCheckTitle] = useState(false);
  const [check_description, setCheckDescription] = useState(false);
  const [checkRating, setCheckRating] = useState(false);
  const [titlehelpertext, settitleHelperText] = useState("");
  const [deschelpertext, setdescHelperText] = useState("");
  const [snackbar, setSnackbar] = useState("");
  const [openbar, setOpenbar] = useState(false);
  const [titleValue, setTitle] = useState("");
  const [descriptionValue, setDescription] = useState("");
  const [ratingValue, setRating] = useState(0);
  const rating = (e) => {
    console.log(e.target.value);
    if (e.target.value > 0) {
      console.log("inside if");
      setCheckRating(true);
      setRating(e.target.value);
    } else {
      setCheckRating(false);
    }
  };
  const title = (e) => {
    if (e.target.value.length !== 0) {
      setCheckTitle(true);
      setTitle(e.target.value);
      settitleHelperText("");
    } else {
      setCheckTitle(false);
      settitleHelperText("Field Required");
    }
  };
  const description = (e) => {
    if (e.target.value.length !== 0) {
      setCheckDescription(true);
      setDescription(e.target.value);
      setdescHelperText("");
    } else {
      setCheckDescription(false);
      setdescHelperText("Field Required");
    }
  };
  const insertReview = () => {
    if (
      check_title === false ||
      check_description === false ||
      checkRating === false
    ) {
      setSnackbar("error");
      setOpenbar(true);
    } else {
      props.insertReview(titleValue, descriptionValue, ratingValue);
      console.log("dispatced event");
      setTitle("")
      setDescription("")
      setRating(0)
      setSnackbar("success");
      setOpenbar(true);
      
    }
  };
  const handleClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenbar(false);
  };
  return (
    <>
      <Snackbar open={openbar} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity={snackbar} onClose={handleClose} sx={{ width: "100%" }}>
          {snackbar}
        </Alert>
      </Snackbar>
      <Card sx={{ m: 2, width: "90%" }} direction="column">
        <Typography sx={{ p: 1, ml: 1 }} gutterBottom variant="h5">
          Please Add Review
        </Typography>
        <Rating sx={{ p: 1, ml: 1 }} name="size-medium" onClick={rating} />
        <CardContent>
          <TextField
            outlined
            label="Title"
            placeholder="Enter review title"
            onChange={title}
            helperText={titlehelpertext}
            error={titlehelpertext !== ""}
            fullWidth
          />
        </CardContent>
        <CardContent>
          <TextField
            fullWidth
            sx={{ mt: 1 }}
            outlined
            label="Description"
            placeholder="Give us a short description"
            multiline
            rows={4}
            onChange={description}
            helperText={deschelpertext}
            error={deschelpertext !== ""}
          />
        </CardContent>
        <CardActions>
          <Button size="small" onClick={insertReview}>
            Share
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

const mapDispatchtoProps = (dispatch) => {
  return {
    insertReview: (title, description, rating) => {
      dispatch(insertReview(title,description,rating));
    },
  };
};

export default connect(null, mapDispatchtoProps)(InputCard);
