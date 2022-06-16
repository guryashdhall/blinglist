const initstate ={
    reviews: [
    {'title':'Great Product','description':'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica','rating':2},
    {'title':'Great Product','description':'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica','rating':3},
    {'title':'Great Product','description':'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica','rating':4},
]
}
const jewelsReducer = (state = initstate, action) => {
    switch (action.type) {
        case 'INSERT_REVIEW':
            state = {reviews:[...state.reviews,{title:action.title,description:action.description,ratings:action.rating}]}
            return state;
        default:
            console.log(state.reviews)
            return state;
    }
}

export default jewelsReducer;