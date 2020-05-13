import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory();

export const formActions = {
  changeName: actionCreator<string>("CHANGE_NAME"),
  changeAge: actionCreator<string>("CHANGE_AGE"),
  initializeForm: actionCreator<void>("INITIALIZE_FORM"),
};

export const characterActions = {
  requestData: actionCreator<void>("REQUEST_DATA"),
  receiveDataSuccess: actionCreator<[]>("RECEIVE_DATA_SUCCESS"),
  receiveDataFailed: actionCreator<void>("RECEIVE_DATA_FAILED"),
};
