import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, Rating, Stack } from "@mui/material";
import { shallowEqual, useSelector } from "react-redux";

function ReviewCard(props) {
  //const [reviews,setReviews] = useState([])
  const reviews = useSelector((state) => state.jewelsReducer.reviews, shallowEqual);
  //setReviews([get_reviews])
  return (
    <>
      {reviews.map((review, index) => {
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
              <Rating readOnly name="size-medium" defaultValue={2} />
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

export default ReviewCard;
