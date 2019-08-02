import React, { Component } from 'react';

class OrderCard extends Component {

    constructor(props){
        super(props);

        this.state = {
            order: props.order,
        }
    }

    render() {

        const {order} = this.state;

        return (
            <div key={order}>

            </div>
        );
    }
}

export default OrderCard;
