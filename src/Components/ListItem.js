import React from 'react'
import './ListItem.css'

const ListItem = (props) => {
    return(
        props.list1.map(listItem => <li>{listItem}</li>)
    )
}

export default ListItem 