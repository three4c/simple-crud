import React from "react";
import { State } from "../redux/reducers";
import { CharacterListActions } from "../redux/CharacterListContainer";

type CharacterListProps = State["characters"] & CharacterListActions;

const CharacterList: React.FC<CharacterListProps> = (props) => {
  return <div>hoge</div>;
};

export default CharacterList;
