import React from "react";
import axios from "axios";
import { State } from "../redux/reducers";
import { CharacterListActions } from "../redux/CharacterListContainer";

type CharacterListProps = State["characters"] & CharacterListActions;

const CharacterList: React.FC<CharacterListProps> = (props) => {
  const handleFetchData = () => {
    props.requestData();
    axios
      .get("/api/characters")
      .then((response) => {
        const _characterArray = response.data;
        props.receiveDataSuccess(_characterArray);
      })
      .catch((error) => {
        console.error(new Error(error));
        props.receiveDataFailed();
      });
  };

  console.log(props.characterArray);

  return (
    <div>
      {props.isFetching ? (
        <h2>Now Loading...</h2>
      ) : (
        <div>
          <button onClick={() => handleFetchData()}>fetch data</button>
          <ul>
            {props.characterArray.map((character) => (
              <li key={character._id}>
                {`${character.name} (${character.age})`}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CharacterList;
