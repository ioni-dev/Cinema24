import { CHANGE_SEARCHFIELD,
    REQUEST_MOVIES_PENDING,
    REQUEST_MOVIES_SUCCESS,
    REQUEST_MOVIES_FAILED,
    INCREMENT_PAGE     } from './constants'; 
    // api key
 
 

    export const setSearchField = (text) => ({
        type: CHANGE_SEARCHFIELD,
        payload: text
    });
    
    export const bothFunction = pageNumber => {
        return dispatch => {
            dispatch(changePage(pageNumber))
            dispatch(requestMovies(pageNumber))
        }
    }

    export const changePage = pageNumber => {
        return {
           type: INCREMENT_PAGE,
            ageNumber: 1 
        }
    }
    

    export const requestMovies = (serchField, pageNumber) => (dispatch) => {
            dispatch ({ type: REQUEST_MOVIES_PENDING });
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${serchField}&page=${pageNumber}`)
            .then(response => response.json())
            .then(data => { let a = data.results; dispatch({ type: REQUEST_MOVIES_SUCCESS, payload: a })})
            .catch(error => dispatch({ type: REQUEST_MOVIES_FAILED, payload: error }))
    } 