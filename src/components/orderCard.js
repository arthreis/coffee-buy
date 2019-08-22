import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default class OrderCard extends Component {
    static propTypes = {
        order: PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props);


        this.state = {
            order: props.order,
        };
    }

    render() {
        const { order } = this.state;

        return (
            <Container key={order._id}>
                <p>
                    {order.user.name}
                </p>
                <p>
                    {order.totalValue}
                </p>
            </Container>
        );
    }
}
