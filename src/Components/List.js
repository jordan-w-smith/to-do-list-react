import React from 'react'
import ListItem from './ListItem'
import './List.css'

const List = (props) => {
    console.log(props.listName)
    return (
        
        <div className="list-container">
            <h2>{props.listName}</h2>

            <p>Left to do: {props.toDoCount()}</p>
            <button onClick={props.markAllDone}>Change all to done</button>
            <ul>
                <ListItem
                    listItems={props.listItems}
                    changeToDone={props.changeToDone}
                    changeToNotDone={props.changeToNotDone}
                >
                </ListItem>
            </ul>
            <form onSubmit={props.handleSubmit}>
                <input type="text" value={props.input} onChange={props.handleChange}></input>
                {/* <input onClick={props.handleSubmit} type="submit"></input> */}
            </form>
        </div>
    )
}

export default List