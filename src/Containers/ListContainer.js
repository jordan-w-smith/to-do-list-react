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

    changeToDone(listItem) {
        console.log('changetodone clicked')
        console.log(listItem.name)
        this.setState(prevState => ({
            list1: prevState.list1.map(
              item => item.name === listItem.name && listItem.done === false ? {...item, done: true}
              : item
            )
        }))
    }

    changeToNotDone(listItem) {
        console.log('firing')
        this.setState(prevState => ({
            list1: prevState.list1.map(
                item => item.name === listItem.name && listItem.done === true ? {...item, done: false}: item
            )
        }))
    }

    toDoCount() {
        console.log("hey")
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
            <>
                <List
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    changeToDone={this.changeToDone}
                    changeToNotDone={this.changeToNotDone}
                    toDoCount={this.toDoCount}
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