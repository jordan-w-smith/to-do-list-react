import React from 'react'
import './ListItem.css'

const ListItem = (props) => {
    return(
    props.list1.map(listItem => <li>{listItem.name}{listItem.done === true ? <img src="https://ionicons.com/ionicons/svg/md-checkbox.svg"></img> : <img onClick={props.changeToDone} src="https://ionicons.com/ionicons/svg/md-square.svg"></img>}</li>)
    )
}

export default ListItem 