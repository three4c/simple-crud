import { reducerWithInitialState } from "typescript-fsa-reducers";
import { characterActions } from "../actions";

export interface CharactersState {
  isFetching: boolean;
  characterArray: {
    _id: string;
    name: string;
    age: number;
    _v: number;
  }[];
}

const initialState: CharactersState = {
  isFetching: false,
  characterArray: [],
};

export const characterReducer = reducerWithInitialState(initialState)
  .case(characterActions.getCharacters.started, (state) => {
    return {
      ...state,
      isFetching: true,
    };
  })
  .case(characterActions.getCharacters.done, (state, payload) => {
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
    };
  })
  .case(characterActions.updateCharacters.done, (state, payload) => {
    return {
      ...state,
      characterArray: payload.result,
    };
  })
  .case(characterActions.updateCharacters.failed, (state) => {
    return {
      ...state,
    };
  })
  .case(characterActions.deleteCharacters.started, (state) => {
    return {
      ...state,
    };
  })
  .case(characterActions.deleteCharacters.done, (state, payload) => {
    return {
      ...state,
      characterArray: payload.result,
    };
  })
  .case(characterActions.deleteCharacters.failed, (state) => {
    return {
      ...state,
    };
  });
