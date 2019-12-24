import React from 'react';
import ListContainer from './Containers/ListContainer'
import { render } from '@testing-library/react';
import './App.css'

function App() {
  const listContainerTemplate = render(<ListContainer></ListContainer>)
  const newList = () => {
    document.querySelector('.lists-container').append(render(<ListContainer></ListContainer>))
  }
  return (
    <>
      <div className="all-lists-container">
        <div className="lists-container"></div>
      </div>
      <button onClick={newList}>Create List</button>
      
      {/* <ListContainer></ListContainer> */}
    </>
  );
}

export default App;
