import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { characterActions, formActions } from '../actions';

const postForm = (
  e: React.FormEvent<HTMLFormElement>,
  name: string,
  age: string,
) => {
  e.preventDefault();
  return axios
    .post('/api/characters', {
      name,
      age,
    })
    .then((response) => {
      const characterArray = response.data;
      return { characterArray, e, name, age };
    })
    .catch((error) => {
      return { error };
    });
};

function* runPostForm(action: {
  type: string;
  payload: {
    e: React.FormEvent<HTMLFormElement>;
    name: string;
    age: string;
  };
}) {
  const { characterArray, e, name, age, error } = yield call(
    postForm,
    action.payload.e,
    action.payload.name,
    action.payload.age,
  );

  if (characterArray && e && name && age) {
    yield put(
      formActions.postForm.done({
        params: {},
        result: characterArray,
      }),
    );
    yield put(
      characterActions.getCharacters.done({
        params: {},
        result: characterArray,
      }),
    );
    yield put(formActions.initializeForm());
  } else {
    yield put(
      formActions.postForm.failed({
        params: {},
        error: error,
      }),
    );
  }
}

export const watchPostForm = [
  takeLatest(formActions.postForm.started, runPostForm),
];
