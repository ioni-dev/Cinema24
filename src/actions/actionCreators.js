import { CHANGE_SEARCHFIELD,
    REQUEST_MOVIES_PENDING,
    REQUEST_MOVIES_SUCCESS,
    REQUEST_MOVIES_FAILED     } from './constants'; 
    // api key

    export const setSearchField = (text) => ({
        type: CHANGE_SEARCHFIELD,
        payload: text
    });
    
    
    export const requestMovies = (serchField) => (dispatch) => {
            dispatch ({ type: REQUEST_MOVIES_PENDING });
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${serchField}`)
            .then(response => response.json())
            .then(data => { let a = data.results; dispatch({ type: REQUEST_MOVIES_SUCCESS, payload: a })})
            .catch(error => dispatch({ type: REQUEST_MOVIES_FAILED, payload: error }))
    } 