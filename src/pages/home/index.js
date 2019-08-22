import React, { Component } from 'react';

import { buyService } from '../../services/buyService';

import OrderCard from '../../components/orderCard';

import { Container0, Container, Container2 } from './styles';

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
            <Container0>
                <Container>
                    {
                        orders.map(order => (
                            <OrderCard key={order._id} order={order} />
                        ))
                    }
                </Container>

                <Container2>
                    2
                </Container2>
            </Container0>
        );
    }
}
