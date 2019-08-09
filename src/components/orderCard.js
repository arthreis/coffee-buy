import React, { Component } from 'react';
import { Container } from "./styles";

export default class OrderCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            order: props.order,
        }
    }

    render() {
        const { order } = this.state;

        return (
            <Container key={order._id}>
                <span>Number:
                {order.orderNumber}
                </span><br/>
                <span>Status: {order.status}</span><br/>
                <span>Quantidade: {order.items.length}</span><br/>
                <span>Usuário: {order.user.name}</span><br/>
                <span>Total: {order.totalValue}</span><br/>
                <br/>
            </Container>
        );
    }
}
