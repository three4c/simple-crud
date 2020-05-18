import { all, fork } from "redux-saga/effects";
import { watchPostForm } from "./postFormSaga";
import { watchGetCharacters } from "./getCharactersSaga";
import { watchUpdateCharacters } from "./updateCharactersSaga";
import { watchDeleteCharacters } from "./deleteCharactersSaga";

export default function* rootSaga() {
  yield all([
    fork(watchPostForm),
    fork(watchGetCharacters),
    fork(watchUpdateCharacters),
    fork(watchDeleteCharacters),
  ]);
}
