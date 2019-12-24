import React from 'react';
import ListContainer from './Containers/ListContainer'
import { render } from '@testing-library/react';
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      layout: [<ListContainer></ListContainer>]
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      layout: [...this.state.layout, <ListContainer></ListContainer>]
    })
  }

  // const listContainerTemplate = render(<ListContainer></ListContainer>)
  // const listTemplate = <div className="testClass"><ListContainer></ListContainer></div>
  // const createTemplate = document.createElement(React.)
  // const newList = () => {
  //   document.querySelector('.lists-container').appendChild(createTemplate)

  // document.querySelector('.lists-container', '.all-lists-container').element.style.display = 'flex'
  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>Create List</button>
        <div className="all-lists-container">
          {this.state.layout.map(list => {return list})}
        </div>
      </div>
    );
  }
}

export default App;
