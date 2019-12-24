import React from 'react'
import List from '../Components/List'
import './ListContainer.css'

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
                },
                {
                    name: "iron",
                    done: false
                }
            ],
            input: "",
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.changeToDone = this.changeToDone.bind(this)
        this.changeToNotDone = this.changeToNotDone.bind(this)
        this.toDoCount = this.toDoCount.bind(this)
        this.markAllDone = this.markAllDone.bind(this)
    }

    handleChange(event) {
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

    changeToDone(listItem) {
        this.setState(prevState => ({
            list1: prevState.list1.map(
              item => item.name === listItem.name && listItem.done === false ? {...item, done: true}
              : item
            )
        }))
    }

    changeToNotDone(listItem) {
        this.setState(prevState => ({
            list1: prevState.list1.map(
                item => item.name === listItem.name && listItem.done === true ? {...item, done: false}: item
            )
        }))
    }

    markAllDone() {
        this.setState(prevState => ({
            list1: prevState.list1.map(
                item => item.done === false ? {...item, done: true}: item
            )
        }))
    }

    toDoCount() {
        let total = 0
        let item
        for (item of this.state.list1) {
            if(item.done === false) { 
                total ++ 
            }
            else { 
                total = total + 0
            }
        }
        return total
    }

    render() {
        return (
                <List
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    changeToDone={this.changeToDone}
                    changeToNotDone={this.changeToNotDone}
                    markAllDone={this.markAllDone}
                    toDoCount={this.toDoCount}
                    input={this.state.input}
                    list1={this.state.list1}
                >
                </List>
        )
    }
}

export default ListContainer