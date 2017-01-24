import React from 'react';
import './UserLabel.scss';

const UserLabel = ({ name, id }) => {
    return (
        <div className="user-label-component">
            <div>
                {name}
            </div>
            <div>
                {id}
            </div>
        </div>
    );
};

UserLabel.propTypes = {
    name: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired
};

export default UserLabel;
