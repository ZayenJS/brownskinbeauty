import axios from 'axios';
import { Dispatch } from 'react';
import { AnyAction, MiddlewareAPI } from 'redux';
import { FormActions, SEND_CONTACT_MESSAGE } from '../actions';
import { State } from '../reducers';

export const forms = (store: MiddlewareAPI) => (next: Dispatch<AnyAction>) => async (
  action: FormActions,
) => {
  switch (action.type) {
    case SEND_CONTACT_MESSAGE:
      try {
        const { forms } = store.getState() as State;
        const data = {
          firstName: forms.firstName,
          lastName: forms.lastName,
          email: forms.email,
          message: forms.message,
        };

        const { status } = await axios.post('/api/contact', data);

        if (status === 200)
          action.payload = {
            message: 'Message envoyé avec succès !',
            isSent: true,
          };

        next(action);
      } catch (error) {
        action.payload = {
          message: "Erreur lors de l'envoi du message! Réessayez.",
          isSent: false,
        };

        next(action);
      }
      break;
    default:
      next(action);
  }
};
