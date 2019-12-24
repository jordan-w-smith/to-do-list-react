import React from 'react';
import ListContainer from './Containers/ListContainer'
import { render } from '@testing-library/react';
import './App.css'

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      layout: [],
      listName: ''
    }
    // let listNameVar = this.state.listName
    
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleClick(event) {
    event.preventDefault()
    const setTemplate = <ListContainer listName={this.state.listName}></ListContainer>
    this.setState({
      layout: [...this.state.layout, setTemplate],
    })
  }

  handleChange(event) {
    this.setState({
      listName: event.target.value
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
        <form>
        <input onChange={this.handleChange} type="text" placeholder="Create List"></input>
        <button onClick={this.handleClick}>Create List</button>
        </form>
        <div className="all-lists-container">
          {this.state.layout.map(list => list)}
        </div>
      </div>
    );
  }
}

export default App;
