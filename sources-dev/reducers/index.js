import { combineReducers } from 'redux';

import { /* DATA_AVAILABLE, */ IS_ADDED } from "../actions/" //Import the actions types constant we defined in our actions

//let dataState = { data: [], loading: true };

let dataState = { data: null, loading: false, error: null}

/* const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case DATA_AVAILABLE:
            state = Object.assign({}, state, { data: action.data, loading: false });
            return state;
        default:
            return state;
    }
}; */

const data = (state = dataState, action) => {
    switch (action.type) {
        case IS_ADDED:
            state = { data: action.data, loading: false, error: null };
            return state 
        default:
            return state;
    }
};


// Combine all the reducers
const rootReducer = combineReducers({
    //dataReducer,
    data
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})

export default rootReducer;