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
            input: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.changeToDone = this.changeToDone.bind(this)
        this.changeToNotDone = this.changeToNotDone.bind(this)
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
            //   : item => item.name === listItem.name && listItem.done === true ? {...item, done: false}
              : item
            )
        }))
    //     list1: prevState.list1.map(
    //         item => {
    //             item.name === listItem.name ? {...item, done: 'true'} : item  
    //           }
    //       )
    //   }))
    }

    changeToNotDone(listItem) {
        console.log('firing')
        this.setState(prevState => ({
            list1: prevState.list1.map(
                item => item.name === listItem.name && listItem.done === true ? {...item, done: false}: item
            )
        }))
    }

    render() {
        return (
            <>
                <List
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    changeToDone={this.changeToDone}
                    changeToNotDone={this.changeToNotDone}
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