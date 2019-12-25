import React from 'react'
import './ListItem.css'

const ListItem = (props) => {
    return (
        props.listItems.map(listItem =>
            <li>
                <div className="text">{listItem.name}</div>
            {listItem.done === false ?
                <div className="image"><img onClick={() => props.changeToDone(listItem)} src="https://ionicons.com/ionicons/svg/md-square.svg" alt="unchecked"></img></div>
                : <div className="image"><img onClick={() => props.changeToNotDone(listItem)} src="https://ionicons.com/ionicons/svg/md-checkbox.svg" alt="checked"></img></div>
            }</li>)
    )
}

export default ListItem 