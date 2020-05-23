import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { characterActions } from '../actions';

const updateCharacters = (id: string, name: string, age: number) => {
  return axios
    .put('/api/characters', {
      id,
      name,
      age,
    })
    .then((response) => {
      const characterArray = response.data;
      return { characterArray, id, name, age };
    })
    .catch((error) => {
      return { error };
    });
};

function* runUpdateCharacters(action: {
  type: string;
  payload: { id: string; name: string; age: number };
}) {
  const { characterArray, id, name, age, error } = yield call(
    updateCharacters,
    action.payload.id,
    action.payload.name,
    action.payload.age,
  );

  console.log(id, name, age);

  if (characterArray && id && name && age) {
    yield put(
      characterActions.updateCharacters.done({
        params: {},
        result: characterArray,
      }),
    );
  } else {
    yield put(
      characterActions.updateCharacters.failed({ params: {}, error: error }),
    );
  }
}

export const watchUpdateCharacters = [
  takeLatest(characterActions.updateCharacters.started, runUpdateCharacters),
];
