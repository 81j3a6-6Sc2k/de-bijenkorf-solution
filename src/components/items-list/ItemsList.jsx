import React from 'react';
import Item from '../item/Item';
import './ItemsList.scss';

const ItemsList = ({ items, onItemStatusChange }) => {
    return (
        <div className="items-list-component">
            {items.map(item => 
                <Item 
                    key={item.id}
                    {...item}
                    onItemStatusChange={onItemStatusChange}
                />
            )}
        </div>
    );
}

ItemsList.propTypes = {
    items: React.PropTypes.array,
    onItemStatusChange: React.PropTypes.func
};

export default ItemsList;