import React from "react";
import axios from "axios";
import { State } from "../redux/reducers";
import { CharacterListActions } from "../redux/CharacterListContainer";

type CharacterListProps = State["characters"] & CharacterListActions;

const CharacterList: React.FC<CharacterListProps> = (props) => {
  // const handleFetchData = () => {
  //   props.requestData();
  //   axios
  //     .get("/api/characters")
  //     .then((response) => {
  //       const _characterArray = response.data;
  //       props.receiveDataSuccess(_characterArray);
  //     })
  //     .catch((error) => {
  //       console.error(new Error(error));
  //       props.receiveDataFailed();
  //     });
  // };

  // const handleUpdateCharacter = (id: string) => {
  //   props.requestData();
  //   axios
  //     .put("/api/character", {
  //       id,
  //     })
  //     .then((response) => {
  //       const _characterArray = response.data;
  //       props.receiveDataSuccess(_characterArray);
  //     })
  //     .catch((error) => {
  //       console.error(new Error(error));
  //       props.receiveDataFailed();
  //     });
  // };

  // const handleDeleteCharacter = (id: string) => {
  //   props.requestData();
  //   axios({
  //     method: "delete",
  //     url: "/api/characters",
  //     data: {
  //       id,
  //     },
  //   })
  //     .then((response) => {
  //       const _characterArray = response.data;
  //       props.receiveDataSuccess(_characterArray);
  //     })
  //     .catch((error) => {
  //       console.error(new Error(error));
  //       props.receiveDataFailed();
  //     });
  // };

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
                {/* <button onClick={() => handleDeleteCharacter(character._id)}>
                  delete
                </button> */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CharacterList;
