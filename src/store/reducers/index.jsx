import { combineReducers } from 'redux';
import appReducer from './appReducer.jsx';
import routesReducer from './routesReducer.jsx';
import vehiclesReducer from './vehiclesReducer.jsx';

const rootReducer = combineReducers({
    appReducer: appReducer,
    routesReducer: routesReducer,
    vehiclesReducer: vehiclesReducer
});

export default rootReducer;