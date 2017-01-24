import React from 'react';
import strings from '../../resources/order/strings';
import { formatDate } from '../../utils/date';
import './OrderDetails.scss';

const OrderDetails = ({ date, email, phone }) => {
    return (
        <div className="order-details-component">
            <div className="order-details-row">
                <span>
                    {strings.placedAt}
                </span>
                <span>
                    {formatDate(date)}
                </span>
            </div>
            <div className="order-details-row">
                <span>
                    {strings.email}
                </span>
                <span>
                    {email}
                </span>
            </div>
            <div className="order-details-row">
                <span>
                    {strings.phone}
                </span>
                <span>
                    {phone}
                </span>
            </div>
        </div>
    );
}

OrderDetails.propTypes = {
    date: React.PropTypes.string,
    email: React.PropTypes.string,
    phone: React.PropTypes.string
};

export default OrderDetails;