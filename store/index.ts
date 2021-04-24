import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { forms } from './middlewares';
import rootReducer from './reducers/index';

const composeEnhancers = composeWithDevTools({ trace: true });
const enhancers = composeEnhancers(applyMiddleware(forms));

const store = createStore(rootReducer, enhancers);

export default store;
