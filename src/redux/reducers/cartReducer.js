import { INCREAMENT, DECREAMENT, ADD_BY_AMOUNT } from "../actions/types";

const count = { count: 0 }

const cartReducer = (state = count, action) => {
    switch (action.type) {
        case INCREAMENT:
            return { ...state, count: state.count + 1 }
        case DECREAMENT:
            return { ...state, count: state.count - 1 }
        case ADD_BY_AMOUNT:
            return { ...state, count: state.count + action.payload }
        default:
            return state;
    }
}

export default cartReducer