import React from 'react'
import ListItem from './ListItem'
import './List.css'

const List = (props) => {
    return (
        <div className="list-container">
            <h2>List Name</h2>

            <p>Left to do: {props.toDoCount()}</p>
            <button onClick={props.markAllDone}>Change all to done</button>
            <ul>
                <ListItem
                    list1={props.list1}
                    changeToDone={props.changeToDone}
                    changeToNotDone={props.changeToNotDone}
                >
                </ListItem>
            </ul>
            <form>
                <input type="text" value={props.input} onChange={props.handleChange}></input>
                <input onClick={props.handleSubmit} type="submit"></input>
            </form>
        </div>
    )
}

export default List