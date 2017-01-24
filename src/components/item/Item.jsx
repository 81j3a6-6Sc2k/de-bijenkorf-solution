import React from 'react';
import classnames from 'classnames';
import './Item.scss';

const maxDescriptionLength = 48;
const descriptionEllipsis = '...';
const trimDescription = (text) => {
    if (text.length < maxDescriptionLength) {
        return text;
    } else {
        return text.substr(0, maxDescriptionLength) + descriptionEllipsis;
    }
}

const Item = ({ id, status, product, onItemStatusChange }) => {
    const {
        name,
        description,
        imageUrl
    } = product;

    return (
        <div className="item-component">
            <div 
                className={classnames({
                'item-status': true,
                'item-reserved': status === 'RESERVED' 
                })}
                onClick={() => onItemStatusChange(id)}
            >
                {status === 'RESERVED' ? <i className="fa fa-check fa-lg"></i> : null}
            </div>
            <div className="item-icon">
                <img src={'https://' + imageUrl} />
            </div>
            <div className="item-info">
                <div>
                    {name}
                </div>
                <div>
                    {trimDescription(description)}
                </div>
            </div>
            <div className="item-more">
            </div>
        </div>
    );
}

Item.propTypes = {
    id: React.PropTypes.number.isRequired,
    status: React.PropTypes.string.isRequired,
    product: React.PropTypes.object.isRequired,
    onItemStatusChange: React.PropTypes.func
};

export default Item;