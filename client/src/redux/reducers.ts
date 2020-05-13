import { reducerWithInitialState } from "typescript-fsa-reducers";
import { formActions, characterActions } from "./actions";

export interface State {
  form: {
    name: string;
    age: string;
  };
  characters: {
    isFetching: boolean;
    characterArray: [];
  };
}

const initialState: State = {
  form: {
    name: "",
    age: "",
  },
  characters: {
    isFetching: false,
    characterArray: [],
  },
};

export const formReducer = reducerWithInitialState(initialState.form)
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
    };
  });

export const characterReducer = reducerWithInitialState(initialState.characters)
  .case(characterActions.requestData, (state) => {
    return {
      ...state,
      isFetching: true,
    };
  })
  .case(characterActions.receiveDataSuccess, (state) => {
    return {
      ...state,
      isFetching: false,
      characterArray: state.characterArray,
    };
  })
  .case(characterActions.receiveDataFailed, (state) => {
    return {
      ...state,
      isFetching: false,
    };
  });
