import actionCreatorFactory from 'typescript-fsa';
import { CharactersState } from './reducers/charactersReducer';

const actionCreator = actionCreatorFactory();

export const formActions = {
  changeName: actionCreator<string>('CHANGE_NAME'),
  changeAge: actionCreator<string>('CHANGE_AGE'),
  initializeForm: actionCreator<void>('INITIALIZE_FORM'),
  postForm: actionCreator.async<{}, {}>('POST_FORM'),
};

export const characterActions = {
  editName: actionCreator<string>('EDIT_NAME'),
  editAge: actionCreator<string>('EDIT_AGE'),
  getCharacters: actionCreator.async<{}, CharactersState['characterArray']>(
    'GET_CHARACTERS',
  ),
  updateCharacters: actionCreator.async<{}, CharactersState['characterArray']>(
    'UPDATE_CHARACTERS',
  ),
  deleteCharacters: actionCreator.async<{}, CharactersState['characterArray']>(
    'DELETE_CHARACTERS',
  ),
};
