import React from "react";
import AddForm from "../redux/AddFormContainer";
import CharacterList from "../redux/CharacterListContainer";

const App: React.FC = () => {
  return (
    <div>
      <AddForm />
      <CharacterList />
    </div>
  );
};

export default App;
