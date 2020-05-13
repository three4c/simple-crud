import { Action } from "typescript-fsa";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { AppState } from "./store";
import { characterActions } from "./actions";
import CharacterList from "../components/CharacterList";

export interface CharacterListActions {
  requestData: () => Action<void>;
  receiveDataSuccess: (inputValue: []) => Action<[]>;
  receiveDataFailed: () => Action<void>;
}

const mapStateToProps = (appState: AppState) => {
  return {
    ...appState.character,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action<[] | void>>) => {
  return {
    requestData: () => dispatch(characterActions.requestData()),
    receiveDataSuccess: (inputValue: []) =>
      dispatch(characterActions.receiveDataSuccess(inputValue)),
    receiveDataFailed: () => dispatch(characterActions.receiveDataFailed()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
