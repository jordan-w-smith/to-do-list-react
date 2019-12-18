import React from 'react'
import './ListItem.css'

const ListItem = (props) => {
    return(
    props.list1.map(listItem => <li>{listItem.name}{listItem.done}</li>)
    )
}

export default ListItem 