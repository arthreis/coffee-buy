import React, { Component } from 'react';

import { buyService } from '../../services/buyService';

import OrderCard from '../../components/orderCard';

export default class Home extends Component {
    state = {
        orders: [],
    }

    componentDidMount() {
        this.loadOrders();
    }

    loadOrders = async () => {
        const response = await buyService.getAllOrders();
        this.setState({ orders: response.data });
    }

    render() {
        const { orders } = this.state;
        return (
            <div>
                {
                    orders.map(order => (
                        <OrderCard order={order} />
                    ))
                }
            </div>
        );
    }
}
