const initstate = {
  stars: -1,
  reviews: [],
  filtered_reviews: [],
  cart: {userid:"",items:[]}
};
const jewelsReducer = (state = initstate, action) => {
  switch (action.type) {
    case "SET_STARS":
      if (action.stars === -1) {
        state.filtered_reviews = state.reviews;
      } else {
        state.filtered_reviews = state.reviews.filter((review) => {
          return review.rating === action.stars;
        });
      }
      state = {
        stars: action.stars,
        reviews: [...state.reviews],
        filtered_reviews: [...state.filtered_reviews],
      };
      return state;

    case "INITAL_REVIEW_STATE":
      state = { reviews: action.data, filtered_reviews: action.data };
      return state;

    case "INSERT_REVIEW":
      console.log( {
        title: action.title,
        description: action.description,
        rating: action.rating,
        user_name: action.user_name
      })
      state = {
        stars: -1,
        reviews: [
          ...state.reviews,
          {
            title: action.title,
            description: action.description,
            rating: action.rating,
            user_name: action.user_name
          },
        ],
        filtered_reviews: [
          ...state.reviews,
          {
            title: action.title,
            description: action.description,
            rating: action.rating,
            user_name: action.user_name
          },
        ],
      };
      return state;
    
    case "ADD_TO_CART":
      state.cart.items=[...state.cart.items,action.item]
      console.log(state.cart)
      return state;
    
    case "FETCH_TO_CART":
      state.cart= action.cart;
      return state;


    default:
      return state;
  }
};

export default jewelsReducer;
