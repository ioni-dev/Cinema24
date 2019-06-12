import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import Main from './Main';
import { Link, withRouter } from 'react-router';
import React from 'react';
import { setSearchField, requestMovies } from '../actions/actionCreators';

 
const mapstateToProps = state => {
    return {
        searchField: state.searchMovies.searchField,
        movies: state.requestMovies.movies,
        isPending: state.requestMovies.isPending,
        error: state.requestMovies.error  
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestMovies: (searchField) => dispatch(requestMovies(searchField))
     }
}

const App = withRouter(connect(mapstateToProps, mapDispatchToProps)(Main));
export default App;