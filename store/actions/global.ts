export const INPUT_CHANGE = 'INPUT_CHANGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

export interface InputChangeAction {
  type: typeof INPUT_CHANGE;
  name: string;
  value: string;
  reducerName?: string;
}
export interface RemoveMessageAction {
  type: typeof REMOVE_MESSAGE;
}

export const inputChange = (
  name: string,
  value: string,
  reducerName?: string,
): InputChangeAction => ({
  type: INPUT_CHANGE,
  name,
  value,
  reducerName,
});
export const removeMessage = (): RemoveMessageAction => ({ type: REMOVE_MESSAGE });

export type GlobalActions = InputChangeAction | RemoveMessageAction;
