import { Action } from "typescript-fsa";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { AppState } from "./store";
import { formActions } from "./actions";
import AddForm from "../components/AddForm";

export interface AddFormActions {
  changeName: (inputValue: string) => Action<string>;
  changeAge: (inputValue: string) => Action<string>;
  initializeForm: () => Action<void>;
}

const mapStateToProps = (appState: AppState) => {
  return {
    ...appState.form,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action<string | void>>) => {
  return {
    changeName: (inputValue: string) =>
      dispatch(formActions.changeName(inputValue)),
    changeAge: (inputValue: string) =>
      dispatch(formActions.changeAge(inputValue)),
    initializeForm: () => dispatch(formActions.initializeForm()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
