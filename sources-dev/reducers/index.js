import { combineReducers } from 'redux';

import { SEASON_LOADED, IS_ADDED, SEASON_LOADING } from "../actions/" //Import the actions types constant we defined in our actions

let seriesState = { series: [], loading: false };

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

const series = (state = seriesState, action) => {
    switch (action.type) {
        case SEASON_LOADING:
            state = { ...state, loading: true };
            return state
        case SEASON_LOADED:
            state = { series: action.series, loading: false };
            return state
        default:
            return state;
    }
};


// Combine all the reducers
const rootReducer = combineReducers({
    //dataReducer,
    data,
    series
})

export default rootReducer;