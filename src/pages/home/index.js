import React, { Component } from 'react';

import { buyService } from "./../../services/buyService";

export default class Home extends Component {

    state = {
        orders: [],
    }

    componentDidMount(){
        this.loadOrders();
    }

    loadOrders = async () => {
        const response = await buyService.getAllOrders();
        this.setState({orders: response});
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}
