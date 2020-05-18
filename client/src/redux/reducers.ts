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
  .case(characterActions.getCharacters.started, (state) => {
    return {
      ...state,
      isFetching: true,
    };
  })
  .case(characterActions.getCharacters.done, (state, payload: any) => {
    return {
      ...state,
      isFetching: false,
      characterArray: payload.result,
    };
  })
  .case(characterActions.getCharacters.failed, (state) => {
    return {
      ...state,
      isFetching: false,
    };
  })
  .case(characterActions.updateCharacters.started, (state) => {
    return {
      ...state,
      isFetching: true,
    };
  })
  .case(characterActions.updateCharacters.done, (state, payload: any) => {
    return {
      ...state,
      isFetching: false,
      characterArray: payload.result,
    };
  })
  .case(characterActions.updateCharacters.failed, (state) => {
    return {
      ...state,
      isFetching: false,
    };
  });
