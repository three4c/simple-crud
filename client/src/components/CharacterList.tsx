import React from "react";
import { CharactersState } from "../redux/reducers/charactersReducer";
import { CharacterListActions } from "../redux/container/CharacterListContainer";

type CharacterListProps = CharactersState & CharacterListActions;

const CharacterList: React.FC<CharacterListProps> = (props) => {
  return (
    <div>
      {props.isFetching ? (
        <h2>Now Loading...</h2>
      ) : (
        <div>
          <button onClick={() => props.getCharacters()}>fetch data</button>
          <ul>
            {props.characterArray.map((character) => (
              <li key={character._id}>
                {`${character.name} (${character.age})`}
                <button onClick={() => props.updateCharacters(character._id)}>
                  +1
                </button>
                <button onClick={() => props.deleteCharacters(character._id)}>
                  delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CharacterList;
