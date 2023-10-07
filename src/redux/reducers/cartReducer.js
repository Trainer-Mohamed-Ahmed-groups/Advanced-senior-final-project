import { INCREAMENT, DECREAMENT } from "../actions/types";


const cartReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case INCREAMENT:
            return { ...state, count: state.count + 1 }
        case DECREAMENT:
            return { ...state, count: state.count - 1 }
        default:
            return state;
    }
}

export default cartReducer