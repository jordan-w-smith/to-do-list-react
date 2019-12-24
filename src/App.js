import React from 'react';
import ListContainer from './Containers/ListContainer'
import { render } from '@testing-library/react';
import './App.css'

function App() {
  const listContainerTemplate = render(<ListContainer></ListContainer>)
  const newList = () => {
    document.querySelector('.lists-container').hasChildNodes(render(<div><ListContainer></ListContainer></div>))
  }
  return (
    <div className="App">
      <div className="all-lists-container">
        <div className="lists-container"></div>
      </div>
      <button onClick={newList}>Create List</button>
      
      {/* <ListContainer></ListContainer> */}
    </div>
  );
}

export default App;
