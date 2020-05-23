import { all } from 'redux-saga/effects';
import { watchPostForm } from './postFormSaga';
import { watchGetCharacters } from './getCharactersSaga';
import { watchUpdateCharacters } from './updateCharactersSaga';
import { watchDeleteCharacters } from './deleteCharactersSaga';

export default function* rootSaga() {
  yield all([
    ...watchPostForm,
    ...watchGetCharacters,
    ...watchUpdateCharacters,
    ...watchDeleteCharacters,
  ]);
}
