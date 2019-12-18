import React from 'react'
import ListItem from './ListItem'
import './List.css'

const List = (props) => {
    return (
        <div className="list-container">
            <h2>List Name</h2>
            <ul>
                <ListItem list1={props.list1}></ListItem>
            </ul>
            <form>
                    <input type="text" value={props.input} onChange={props.handleChange}></input>
                    <input onClick={props.handleSubmit} type="submit"></input>
            </form>
        </div>
    )
}

export default List