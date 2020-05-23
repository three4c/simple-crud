import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { characterActions } from '../actions';
import CharacterList from '../../components/CharacterList';

export interface CharacterListActions {
  editName: (name: string) => Action<string>;
  editAge: (age: string) => Action<string>;
  getCharacters: () => Action<{}>;
  updateCharacters: (id: string, name: string, age: string) => Action<{}>;
  deleteCharacters: (id: string) => Action<{}>;
}

const mapStateToProps = (appState: AppState) => {
  return {
    ...appState.character,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action<{}>>) => {
  return {
    editName: (name: string) => dispatch(characterActions.editName(name)),
    editAge: (age: string) => dispatch(characterActions.editAge(age)),
    getCharacters: () =>
      dispatch(characterActions.getCharacters.started({ params: {} })),
    updateCharacters: (id: string, name: string, age: string) =>
      dispatch(
        characterActions.updateCharacters.started({
          params: {},
          id,
          name,
          age,
        }),
      ),
    deleteCharacters: (id: string) =>
      dispatch(characterActions.deleteCharacters.started({ params: {}, id })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
