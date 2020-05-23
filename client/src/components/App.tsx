import React from 'react';
import AddForm from '../redux/container/AddFormContainer';
import CharacterList from '../redux/container/CharacterListContainer';

import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <AddForm />
      <CharacterList />
    </div>
  );
};

export default App;
