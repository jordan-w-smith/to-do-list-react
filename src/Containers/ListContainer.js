import React from 'react'
import List from '../Components/List'

class ListContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            list1: [
                {
                    name: "vacuum",
                    done: false
                },
                {
                    name: "do washing",
                    done: true
                }
            ],
            input: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('clicked bro')
        this.setState({
            list1: [...this.state.list1, {
                name: this.state.input,
                done: false
            }],
            input: ""
        })
    }

    changeToDone() {
        this.setState({
            list1: {
                
            }
        })
    }

    render() {
        return (
            <>
                <List
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    changeToDone={this.changeToDone}
                    input={this.state.input}
                    list1={this.state.list1}
                >
                </List>
                {/* <form>
                    <input value={this.state.input} onChange={this.handleChange}></input>
                    <input onClick={this.handleSubmit} type="submit"></input>
                </form> */}
            </>
        )
    }
}

export default ListContainer