import React from 'react'
 function navmenu(props) {
    return (
        <ul className="list">
             {props.x.map(el=>
             <li className="title">{el.title}
             <ul className="drop-list"> {!el.drop ?  null : el.drop.map(el=> <li>{el}</li>)} 
             </ul>
             </li>
                )}
        </ul>
    )
}
export default navmenu