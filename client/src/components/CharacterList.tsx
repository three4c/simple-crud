import React, { useEffect, useState } from "react";
import { CharactersState } from "../redux/reducers/charactersReducer";
import { CharacterListActions } from "../redux/container/CharacterListContainer";

import "./CharacterList.scss";

type CharacterListProps = CharactersState & CharacterListActions;

const CharacterList: React.FC<CharacterListProps> = (props) => {
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    props.getCharacters();
  }, []);

  return (
    <div className="CharacterList">
      {props.isFetching ? (
        <h2>Now Loading...</h2>
      ) : (
        <div>
          <h2 className="CharacterList__title">リスト</h2>
          <ul className="CharacterList__list">
            {props.characterArray.map((character) => (
              <li key={character._id} className="CharacterList__listItem">
                {edit ? (
                  <React.Fragment>
                    <input
                      defaultValue={character.name}
                      onChange={(e) => props.editName(e.target.value)}
                    />
                    <input
                      defaultValue={character.age}
                      onChange={(e) => props.editAge(e.target.value)}
                    />
                  </React.Fragment>
                ) : (
                  `${character.name} (${character.age})`
                )}
                <div className="CharacterList__listArea">
                  <button
                    className="CharacterList__listButton"
                    onClick={() => {
                      props.updateCharacters(
                        character._id,
                        props.name,
                        props.age
                      );
                      setEdit(!edit);
                    }}
                  >
                    <i className="gg-edit-markup"></i>
                  </button>
                  <button
                    className="CharacterList__listButton"
                    onClick={() => props.deleteCharacters(character._id)}
                  >
                    <i className="gg-trash"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CharacterList;
