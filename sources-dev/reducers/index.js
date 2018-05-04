import { combineReducers } from 'redux';

import { IS_ADDED, SEASON_LOADED, SEASON_LOADING, SERIE_ID_LOADED, SERIE_ID_LOADING } from "../actions/" //Import the actions types constant we defined in our actions

let seriesState = { series: [], loading: false }

let dataState = { data: null, loading: false, error: null}

let serieState = { serie: [], loading: false}

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

const serie = (state = serieState, action) => {
    switch (action.type) {
        case SERIE_ID_LOADING:
            state = { ...state, loading: true };
            return state
        case SERIE_ID_LOADED:
            state = { serie: action.serie, loading: false };
            return state
        default:
            return state;
    }
};


// Combine all the reducers
const rootReducer = combineReducers({
    //dataReducer,
    data,
    series,
    serie
})

export default rootReducer;