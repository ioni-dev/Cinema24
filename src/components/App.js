import { connect } from 'react-redux';
import Main from './Main';
import {  withRouter } from 'react-router';
import { setSearchField, requestMovies, changePage } from '../actions/actionCreators';

 
const mapstateToProps = state => {
    return {
        searchField: state.searchMovies.searchField,
        page: state.changePage.pageNumber,
        movies: state.requestMovies.movies,
        isPending: state.requestMovies.isPending,
        error: state.requestMovies.error  
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestMovies: (searchField) => dispatch(requestMovies(searchField)),
        onChangePage: () => dispatch(changePage())
     }
}

const App = withRouter(connect(mapstateToProps, mapDispatchToProps)(Main));
export default App;