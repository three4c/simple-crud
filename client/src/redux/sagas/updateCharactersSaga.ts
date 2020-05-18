import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { characterActions } from "../actions";

const updateCharacters = (id: string) => {
  return axios
    .put("/api/characters", {
      id,
    })
    .then((response) => {
      const characterArray = response.data;
      return { characterArray, id };
    })
    .catch((error) => {
      return { error };
    });
};

function* runUpdateCharacters(action: {
  type: string;
  payload: { id: string };
}) {
  const { characterArray, id, error } = yield call(
    updateCharacters,
    action.payload.id
  );

  if (characterArray && id) {
    yield put(
      characterActions.updateCharacters.done({
        params: {},
        result: characterArray,
      })
    );
  } else {
    yield put(
      characterActions.updateCharacters.failed({ params: {}, error: error })
    );
  }
}

export function* watchUpdateCharacters() {
  yield takeLatest(
    characterActions.updateCharacters.started,
    runUpdateCharacters
  );
}
