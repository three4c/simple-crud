import actionCreatorFactory from 'typescript-fsa';

export const actionCreator = actionCreatorFactory();

export const formActions = {
  changeName: actionCreator<string>('CHANGE_NAME'),
  changeAge: actionCreator<string>('CHANGE_AGE'),
  initializeForm: actionCreator<void>('INITIALIZE_FORM'),
  postForm: actionCreator.async<any, any, any>('POST_FORM'),
};

export const characterActions = {
  editName: actionCreator<string>('EDIT_NAME'),
  editAge: actionCreator<string>('EDIT_AGE'),
  getCharacters: actionCreator.async<any, any>('GET_CHARACTERS'),
  updateCharacters: actionCreator.async<any, any>('UPDATE_CHARACTERS'),
  deleteCharacters: actionCreator.async<any, any>('DELETE_CHARACTERS'),
};
