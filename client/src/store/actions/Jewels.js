import { INSERT_REVIEW } from "../constants";

export const insertReview = (title, description, rating) => {
  return {
    type: INSERT_REVIEW,
    title: title,
    description: description,
    rating: rating,
  };
};
