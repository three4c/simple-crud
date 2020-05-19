import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { characterActions } from "../actions";

const deleteCharacters = (id: string) => {
  return axios({
    method: "delete",
    url: "/api/characters",
    data: {
      id,
    },
  })
    .then((response) => {
      const characterArray = response.data;
      return {
        characterArray,
        id,
      };
    })
    .catch((error) => {
      return { error };
    });
};

function* runDeleteCharacters(action: {
  type: string;
  payload: { id: string };
}) {
  const { characterArray, id, error } = yield call(
    deleteCharacters,
    action.payload.id
  );

  if (characterArray && id) {
    yield put(
      characterActions.deleteCharacters.done({
        params: {},
        result: characterArray,
      })
    );
  } else {
    yield put(
      characterActions.deleteCharacters.failed({ params: {}, error: error })
    );
  }
}

export const watchDeleteCharacters = [
  takeLatest(characterActions.deleteCharacters.started, runDeleteCharacters),
];
