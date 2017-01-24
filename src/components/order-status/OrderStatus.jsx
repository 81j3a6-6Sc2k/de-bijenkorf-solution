import React from 'react';
import strings from '../../resources/order/strings';
import warnings from '../../resources/misc/warnings';
import { formatDate } from '../../utils/date';
import './OrderStatus.scss';

const mapStatusToString = (status) => {
    switch (status) {
        case 'INPROGRESS':
        return strings.statusInProgress;
        default:
        return warnings.unknownValue;
    };
}

const OrderStatus = ({ assignee, assignedAt, status }) => {
    return (
        <div className="order-status-component">
            <div className="order-status-content">
                <div className="order-status-column">
                    <label>
                        {strings.handleStatus}
                    </label>
                    <span>
                        <i className="fa fa-circle"></i>
                        {mapStatusToString(status)}
                    </span>
                </div>
                <div className="order-status-column">
                    <label>
                        {strings.handledBy}
                    </label>
                    <span>
                        {assignee.name}
                    </span>
                </div>
                <div className="order-status-column">
                    <label>
                        {strings.handledDue}
                    </label>
                    <span>
                        {formatDate(assignedAt)}
                    </span>
                </div>
            </div>
        </div>
    );
}

OrderStatus.propTypes = {
    status: React.PropTypes.string.isRequired,
    assignee: React.PropTypes.object.isRequired,
    assignedAt: React.PropTypes.string.isRequired
};

export default OrderStatus;