import React from 'react'
import './ListItem.css'

const ListItem = (props) => {
    return (
        props.list1.map(listItem =>
            <li>{listItem.name}
            {listItem.done === false ?
                <img onClick={() => props.changeToDone(listItem)} src="https://ionicons.com/ionicons/svg/md-square.svg" alt="unchecked"></img>
                : <img src="https://ionicons.com/ionicons/svg/md-checkbox.svg" alt="checked"></img>
            }</li>)
    )
}

export default ListItem 