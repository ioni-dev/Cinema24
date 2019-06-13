import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Single from './components/Single';
import MovieGrid from './components/MovieGrid';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';
import Home from './components/Home';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
 
import { routerReducer } from 'react-router-redux';
import { searchMovies, requestMovies } from './reducers/reducers';
import thunkMiddleware from 'redux-thunk';
import { combineReducers, applyMiddleware, createStore} from 'redux';
import { Provider } from 'react-redux';

import { syncHistoryWithStore } from 'react-router-redux';




import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({ searchMovies, requestMovies, routing: routerReducer })

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export const history = syncHistoryWithStore(browserHistory, store);


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
               <IndexRoute component={Home} />
               <Route path="/View/:movieId" component={Single} />
               <Route path="/about" component={About} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/*" compornet={NotFound} />
                
                
            </Route>
        </Router> 
     </Provider>   
        , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
