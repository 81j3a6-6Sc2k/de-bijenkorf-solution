import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../components/button/Button';
import UserLabel from '../../components/user-label/UserLabel';
import './Topbar.scss';

class Topbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { customer } = this.props;

        return (
            <div className="topbar-container">
                <div className="topbar-content">
                    <Button icon="back" />
                    <UserLabel
                        name={customer.name}
                        id={customer.id}
                    />
                    <Button 
                        icon="print"
                        theme="dark"
                    />
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        customer: state.data.customer
    };
};

export default connect(mapStateToProps)(Topbar);