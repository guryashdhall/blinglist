import { INSERT_REVIEW } from "../constants";

export const insertReview = (title, description, rating,user_name) => {
  return {
    type: INSERT_REVIEW,
    title: title,
    description: description,
    rating: rating,
    user_name: user_name
  };
};

export const setIntialReviewState = (data) => {
  return {
    type: "INITAL_REVIEW_STATE",
    data: data,
  };
};

export const setStars = (stars) => {
  return {
    type: "SET_STARS",
    stars: stars,
  };
};
