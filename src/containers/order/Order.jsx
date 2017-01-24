import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrderDetails from '../../components/order-details/OrderDetails';
import OrderStatus from '../../components/order-status/OrderStatus';
import ItemsList from '../../components/items-list/ItemsList';

class Order extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            placedAt,
            customer,
            assignee,
            assignedAt,
            status,
            items,
            onItemStatusChange
        } = this.props;

        return (
            <div>
                <OrderDetails 
                    date={placedAt}
                    email={customer.email}
                    phone={customer.phoneNumber}
                />
                <OrderStatus 
                    status={status}
                    assignee={assignee}
                    assignedAt={assignedAt}
                />
                <ItemsList 
                    items={items}
                    onItemStatusChange={onItemStatusChange}
                />
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        status: state.data.status,
        assignee: state.data.assignee,
        assignedAt: state.data.assignedAt,
        customer: state.data.customer,
        placedAt: state.data.placedAt,
        items: state.data.items
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onItemStatusChange: id => {
            dispatch({
                type: 'ITEM_CHANGE_STATUS',
                payload: {
                    id
                }
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);