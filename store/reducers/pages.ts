import { CHANGE_PAGE, PageActions } from '../actions';

export interface pagesState {
  prevPage: string;
}

const INITIAL_STATE: pagesState = { prevPage: '' };

const reducer = (state: pagesState = INITIAL_STATE, action: PageActions): pagesState => {
  switch (action.type) {
    case CHANGE_PAGE:
      return {
        ...state,
        prevPage: action.page,
      };
    default:
      return state;
  }
};

export default reducer;
