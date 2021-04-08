export const CHANGE_PAGE = 'CHANGE_PAGE';

export interface ChangePageAction {
  type: typeof CHANGE_PAGE;
  page: string;
}

export const changePage = (page: string): ChangePageAction => ({
  type: CHANGE_PAGE,
  page,
});

export type PageActions = ChangePageAction; /* | SomeOtherAction | ... */
