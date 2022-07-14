import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Alert, Snackbar, TextField } from "@mui/material";
import { Rating } from "@mui/material";
import { insertReview } from "../../store/actions/Jewels.js"
import { setIntialReviewState } from "../../store/actions/Jewels.js"

import { connect } from "react-redux";
import axios from "axios";

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
  const [message,setMessage]= useState("");
  const rating = (e) => {
    console.log(e.target.value);
    if (e.target.value > 0) {
      console.log("inside if");
      setRating(e.target.value)
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
      setTitle("")
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
      setDescription("")
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
      setMessage("Please Fill all the details")
      setSnackbar("error");
      setOpenbar(true);

    } else {
      console.log({title:titleValue,
        description:descriptionValue,
        rating:ratingValue})
      props.insertReview(titleValue, descriptionValue, ratingValue)
      console.log("dispatced event");
      axios.post("http://localhost:8080/reviews/addReviews",{
        title:titleValue,
        description:descriptionValue,
        rating:ratingValue
      }).then(response => {
      setTitle("");
      setCheckTitle(false);
      setDescription("");
      setCheckDescription(false);
      setRating(0);
      setCheckRating(false);
      setMessage("Review added Successfully")
      setSnackbar("success");
      setOpenbar(true);
      })  
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
          {message}
        </Alert>
      </Snackbar>
      <Card sx={{ m: 2, width: "90%" }} direction="column">
        <Typography sx={{ p: 1, ml: 1 }} gutterBottom variant="h5">
          Please Add Review
        </Typography>
        <Rating sx={{ p: 1, ml: 1 }} name="size-medium" onClick={rating} value={ratingValue} />
        <CardContent>
          <TextField
            outlined
            label="Title"
            placeholder="Enter review title"
            onChange={title}
            helperText={titlehelpertext}
            error={titlehelpertext !== ""}
            fullWidth
            value={titleValue}
          ></TextField>
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
            value={descriptionValue}
    
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
      console.log({itle:title,
        description:description,
        rating:rating})
      dispatch(insertReview(title,description,rating));
    },
  };
};

export default  (InputCard);
