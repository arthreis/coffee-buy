import React, { Component } from 'react';

import { buyService } from "./../../services/buyService";

import { OrderCard } from "./../../component/orderCard";

export default class Home extends Component {

    state = {
        orders: [],
    }

    componentDidMount(){
        this.loadOrders();
    }

    loadOrders = async () => {
        const response = await buyService.getAllOrders();
        this.setState({orders: response.data});
    }

    render() {
        return (
            <div>
                {
                    this.state.orders.map((order) => (
                        <OrderCard order={order}/>
                    ))
                }
            </div>
        );
    }
}
