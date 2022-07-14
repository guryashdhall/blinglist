
const initstate ={
    stars:-1,
    reviews: [],
    filtered_reviews:[]
}
const jewelsReducer = (state = initstate, action) => {
    switch (action.type) {
        case 'SET_STARS':
            console.log(action)
            if(action.stars === -1){
                state.filtered_reviews = state.reviews
            }
            else
            {
                state.filtered_reviews = state.reviews.filter((review) => { return (review.rating === action.stars)})
            }
            state = {stars:action.stars,reviews:[...state.reviews],filtered_reviews:[...state.filtered_reviews]}
            console.log(state)
            return state;

        case 'INITAL_REVIEW_STATE':
            console.log(action)
            state = {reviews:action.data,filtered_reviews:action.data}
            console.log(state)
            return state;

        case 'INSERT_REVIEW':
            console.log({title:action.title,description:action.description,ratings:action.rating})
            state = {reviews:[...state.reviews,{title:action.title,description:action.description,rating:action.rating}]}
            return state;
             
        default:
            console.log(state.reviews)
            return state;
    }
}

export default jewelsReducer;