export const SEND_CONTACT_MESSAGE = 'SEND_CONTACT_MESSAGE';

interface SendContactMessagePayload {
  message: string;
  isSent: boolean;
}

export interface SendContactMessageAction {
  type: typeof SEND_CONTACT_MESSAGE;
  payload?: SendContactMessagePayload;
}

export const sendContactMessage = (
  payload?: SendContactMessagePayload,
): SendContactMessageAction => ({
  type: SEND_CONTACT_MESSAGE,
  payload,
});

export type FormActions = SendContactMessageAction;
