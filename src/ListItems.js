import React from 'react';
import './ListItems.css';

function ListItems(props){
    const items=props.items;
    const listItems=items.map(i =>
        {
            return <div className="list" key="item.key">
                <p>{i.text}
                <span>
                    <li className="trash" onClick={() => props.deleteItem(i.key)}/>
                </span>
                </p>
            </div>
        })

    return(
        <div>{listItems}</div>
    )
}

export default ListItems;
