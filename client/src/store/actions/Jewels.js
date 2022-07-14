import { INSERT_REVIEW } from "../constants";

export const insertReview = (title, description, rating) => {
  return {
    type: INSERT_REVIEW,
    title: title,
    description: description,
    rating: rating,
  };
};

export const setIntialReviewState = (data) => {
  console.log("inside action")
  return {
    type: 'INITAL_REVIEW_STATE',
    data: data
  };
};

export const setStars = (stars) => {
  console.log("inside action")
  return {
    type: 'SET_STARS',
    stars:stars
  };
};

