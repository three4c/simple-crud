import React from "react";
import AddForm from "../redux/container/AddFormContainer";
import CharacterList from "../redux/container/CharacterListContainer";

const App: React.FC = () => {
  return (
    <div>
      <AddForm />
      <CharacterList />
    </div>
  );
};

export default App;
