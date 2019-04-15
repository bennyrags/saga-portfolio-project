import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
//axios
import axios from 'axios';

//sagas that use ajax get request to get, delete, and post

function* getProjects(action) {
    const response = yield axios.get('/portfolio');
    yield put({ type: 'SET_PROJECTS', payload: response.data })
}

function* deleteProject(action) {
    yield console.log(`inside deleteProject func, here is id`, action.payload);
    yield axios.delete(`/portfolio/${action.payload}`);
    yield put({ type: 'GET_PROJECTS' });
}
function* newProject(action) {
    yield axios.post(`/portfolio/`, action.payload);
    yield put({ type: 'GET_PROJECTS' });
}

// Create the rootSaga generator function
//There is a takeEvery for each kind of inteaction with the DB
function* rootSaga() {
    yield takeEvery('GET_PROJECTS', getProjects);
    yield takeEvery('DELETE_PROJECT', deleteProject);
    yield takeEvery('NEW_PROJECT', newProject)
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
