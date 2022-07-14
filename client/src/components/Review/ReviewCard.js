import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, Rating, Stack } from "@mui/material";
import { shallowEqual, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setIntialReviewState } from "../../store/actions/Jewels.js";
function ReviewCard(props) {
  useEffect(() => {
    axios.get("http://localhost:8080/reviews/getreviews").then((response) => {
      props.setIntialReviewState(response.data);
    });
  }, []);
  var reviews = useSelector(
    (state) => state.jewelsReducer.reviews,
    shallowEqual
  );
  var stars = useSelector((state) => state.jewelsReducer.stars, shallowEqual);
  var filtered_reviews = useSelector(
    (state) => state.jewelsReducer.filtered_reviews,
    shallowEqual
  );

  //setReviews([get_reviews])
  return (
    <>
      {filtered_reviews.map((review, index) => {
        return (
          <Card sx={{ width: "90%", m: 2 }} key={index}>
            <Stack direction="row">
              <Avatar sx={{ m: 1 }}>N</Avatar>
              <Typography sx={{ m: 2 }}>User_name</Typography>
            </Stack>

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {review.title}
              </Typography>
              <Rating readOnly name="size-medium" value={review.rating} />
              <Typography variant="body2" color="text.secondary">
                {review.description}
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        );
      })}
    </>
  );
}

const mapDispatchtoProps = (dispatch) => {
  return {
    setIntialReviewState: (data) => {
      dispatch(setIntialReviewState(data));
    },
  };
};
export default connect(null, mapDispatchtoProps)(ReviewCard);
