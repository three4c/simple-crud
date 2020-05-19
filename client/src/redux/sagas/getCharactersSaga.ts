import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { characterActions } from "../actions";

const getCharacters = () => {
  return axios
    .get("/api/characters")
    .then((response) => {
      const characterArray = response.data;
      return { characterArray };
    })
    .catch((error) => {
      return { error };
    });
};

function* runGetCharacters() {
  const { characterArray, error } = yield call(getCharacters);

  if (characterArray) {
    yield put(
      characterActions.getCharacters.done({
        params: {},
        result: characterArray,
      })
    );
  } else {
    yield put(
      characterActions.getCharacters.failed({ params: {}, error: error })
    );
  }
}

export const watchGetCharacters = [
  takeLatest(characterActions.getCharacters.started, runGetCharacters),
];
