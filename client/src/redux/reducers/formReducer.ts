import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { formActions } from '../actions';

export interface FormState {
  name: string;
  age: string;
  error: {
    name: string;
    age: string;
  };
}

const initialState: FormState = {
  name: '',
  age: '',
  error: {
    name: '',
    age: '',
  },
};

export const formReducer = reducerWithInitialState(initialState)
  .case(formActions.changeName, (state, name) => {
    return {
      ...state,
      name,
    };
  })
  .case(formActions.changeAge, (state, age) => {
    return {
      ...state,
      age,
    };
  })
  .case(formActions.initializeForm, (state) => {
    return {
      ...state,
      name: '',
      age: '',
    };
  })
  .case(formActions.postForm.started, (state) => {
    return {
      ...state,
    };
  })
  .case(formActions.postForm.done, (state) => {
    return {
      ...state,
    };
  })
  .case(formActions.postForm.failed, (state, error) => {
    return {
      ...state,
      error: {
        name: error.error.name,
        age: error.error.age,
      },
    };
  });
