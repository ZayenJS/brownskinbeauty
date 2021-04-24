import { combineReducers } from 'redux';
import pages, { pagesState } from './pages';
import forms, { FormsState } from './forms';

export interface State {
  pages: pagesState;
  forms: FormsState;
}

const reducer = combineReducers<State>({ pages, forms });

export default reducer;
