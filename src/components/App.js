import { connect } from 'react-redux';
import Main from './Main';
import {  withRouter } from 'react-router';
import { setSearchField, requestMovies, changePage, bothFunction } from '../actions/actionCreators';

 
const mapstateToProps = state => {
    return {
        searchField: state.searchMovies.searchField,
        pageNumber: state.changePage.pageNumber,
        movies: state.requestMovies.movies,
        isPending: state.requestMovies.isPending,
        error: state.requestMovies.error  
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestMovies: (searchField, pageNumber) => dispatch(requestMovies(searchField, pageNumber)),
        onChangePage: (pageNumber) => dispatch(changePage(pageNumber)),
        onBothFunction: (pageNumber) => dispatch(bothFunction(pageNumber))
     }
}

const App = withRouter(connect(mapstateToProps, mapDispatchToProps)(Main));
export default App;