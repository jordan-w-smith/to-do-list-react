import React from 'react';
import ListContainer from './ListContainer'
import './AppContainer.css'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      layout: [],
      listName: ''
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleClick(event) {
    if (this.state.listName != '') {
      event.preventDefault()
      const setTemplate = <ListContainer listName={this.state.listName}></ListContainer>
      this.setState({
        layout: [...this.state.layout, setTemplate],
        listName: ''
      })
    }
    else {
      event.preventDefault()
    }

  }

  handleChange(event) {
    this.setState({
      listName: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <form>
          <input className="createListInput" value={this.state.listName} onChange={this.handleChange} type="text" placeholder="Create List"></input>
          <button className="createListSubmit" onClick={this.handleClick}>Create List</button>
        </form>
        <div className="all-lists-container">
          {this.state.layout.map(list => list)}
        </div>
      </div>
    );
  }
}

export default App;
