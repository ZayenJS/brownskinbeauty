import {
  INPUT_CHANGE,
  REMOVE_MESSAGE,
  GlobalActions,
  SEND_CONTACT_MESSAGE,
  FormActions,
} from '../actions';

export interface FormsState {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  serverResponse: string;
}

const INITIAL_STATE: FormsState = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
  serverResponse: '',
};

const formsReducer = (state: FormsState = INITIAL_STATE, action: GlobalActions | FormActions) => {
  switch (action.type) {
    case REMOVE_MESSAGE:
      return {
        ...state,
        message: '',
      };
    case SEND_CONTACT_MESSAGE:
      return {
        ...state,
        serverResponse: action.payload?.message,
        firstName: action.payload?.isSent ? '' : state.firstName,
        lastName: action.payload?.isSent ? '' : state.lastName,
        email: action.payload?.isSent ? '' : state.email,
        message: action.payload?.isSent ? '' : state.message,
      };
    case INPUT_CHANGE:
      if (action.reducerName === 'forms') {
        return {
          ...state,
          [action.name]: action.value,
        };
      }
      return state;
    default:
      return state;
  }
};

export default formsReducer;
