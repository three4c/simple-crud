import { reducerWithInitialState } from "typescript-fsa-reducers";
import { formActions, characterActions } from "./actions";

export interface State {
  form: {
    name: string;
    age: string;
  };
  characters: {
    isFetching: boolean;
    characterArray: {
      _id: string;
      name: string;
      age: number;
      _v: number;
    }[];
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
      name: "",
      age: "",
    };
  });

export const characterReducer = reducerWithInitialState(initialState.characters)
  .case(characterActions.requestData, (state) => {
    return {
      ...state,
      isFetching: true,
    };
  })
  .case(characterActions.receiveDataSuccess, (state, characterArray) => {
    console.log(characterArray);
    return {
      ...state,
      isFetching: false,
      characterArray,
    };
  })
  .case(characterActions.receiveDataFailed, (state) => {
    return {
      ...state,
      isFetching: false,
    };
  });
