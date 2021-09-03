import { FILL_DATA, GIVE_ACCESS } from "../constants/index";

//This is the initial state of the project
const initialState = {
    movie: {},
    access: false
}

//this is the reducer that is responsible for executing actions on the state
const MovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILL_DATA:
            return Object.assign({}, state, {
                movie: action.movie
            })
        case GIVE_ACCESS:
            return {
                ...state,
                access: !state.access
            }
        default:
            return state;
    }
}

export default MovieReducer;