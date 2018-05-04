import request from 'superagent';

//export const DATA_AVAILABLE = 'DATA_AVAILABLE';
export const IS_ADDED = 'IS_ADDED';

export const SEASON_LOADING = 'SEASON_LOADING';
export const SEASON_LOADED = 'SEASON_LOADED';

export const SERIE_ID_LOADING = 'SERIE_LOADING';
export const SERIE_ID_LOADED = 'SERIE_LOADED';

//Import the sample data
//import Data from '../instructions.json';
 
/* export function getData(){
    return (dispatch) => {
 
        //Make API Call
        //For this example, I will be using the sample data in the json file
        //delay the retrieval [Sample reasons only]
        setTimeout(() => {
            const data  = Data.instructions;
            dispatch({type: DATA_AVAILABLE, data:data});
        }, 2000);
 
    };
} */


export function addSerie(value) {
    return (dispatch) => {
        dispatch({ type: IS_ADDED, data: value });
    };
} 


export function fetchSeries(serieName) {
    return (dispatch, getState) => {
        dispatch({ type: SEASON_LOADING });
        request
            .get(`https://api.themoviedb.org/3/search/tv?api_key=f3f02998bdb1457a83e40072e6d2209a&language=fr-FR&query=${serieName}`)
            .then(
                (response) => {
                    dispatch({
                        type: SEASON_LOADED,
                        series: response.body
                    });
                }
            );
    };
}

export function getSerieById(idSerie) {
    return (dispatch, getState) => {
        dispatch({ type: SERIE_ID_LOADING });
        request
            .get(`https://api.themoviedb.org/3/tv/${idSerie}?api_key=f3f02998bdb1457a83e40072e6d2209a&language=fr-FR`)
            .then(
                (response) => {
                    dispatch({
                        type: SERIE_ID_LOADED,
                        serie: response.body
                    });
                }
            );
    };
}