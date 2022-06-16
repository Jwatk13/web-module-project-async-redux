import { FETCH_START, FETCH_SUCCESS } from './actionTypes'

const initialState = {
    agifs: [],
    loading: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                loading: true,
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                agifs: action.payload
            };
        default:
            return(state);
    };
}

export default reducer;