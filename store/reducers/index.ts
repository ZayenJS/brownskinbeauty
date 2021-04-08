import { combineReducers } from 'redux';
import pages, { pagesState } from './pages';

export interface State {
  pages: pagesState;
}

const reducer = combineReducers<State>({ pages });

export default reducer;
