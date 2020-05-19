import actionCreatorFactory from "typescript-fsa";

export const actionCreator = actionCreatorFactory();

export const formActions = {
  changeName: actionCreator<string>("CHANGE_NAME"),
  changeAge: actionCreator<string>("CHANGE_AGE"),
  initializeForm: actionCreator<void>("INITIALIZE_FORM"),
  postForm: actionCreator.async<{}, {}, {}>("POST_FORM"),
};

export const characterActions = {
  getCharacters: actionCreator.async<any, any>("GET_CHARACTERS"),
  updateCharacters: actionCreator.async<any, any>("UPDATE_CHARACTERS"),
  deleteCharacters: actionCreator.async<any, any>("DELETE_CHARACTERS"),
};
