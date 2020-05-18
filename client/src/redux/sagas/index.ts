import { all, fork } from "redux-saga/effects";
import { watchGetCharacters } from "./getCharactersSaga";
import { watchUpdateCharacters } from "./updateCharactersSaga";

export default function* rootSaga() {
  yield all([fork(watchGetCharacters), fork(watchUpdateCharacters)]);
}
