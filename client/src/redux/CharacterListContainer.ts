import { Action } from "typescript-fsa";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { AppState } from "./store";
import { characterActions } from "./actions";
import CharacterList from "../components/CharacterList";

export interface CharacterListActions {
  getCharacters: () => Action<{}>;
  updateCharacters: (id: string) => Action<{}>;
  deleteCharacters: (id: string) => Action<{}>;
}

const mapStateToProps = (appState: AppState) => {
  return {
    ...appState.character,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action<{}>>) => {
  return {
    getCharacters: () =>
      dispatch(characterActions.getCharacters.started({ params: {} })),
    updateCharacters: (id: string) =>
      dispatch(characterActions.updateCharacters.started({ params: {}, id })),
    deleteCharacters: (id: string) =>
      dispatch(characterActions.deleteCharacters.started({ params: {}, id })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
