import React from 'react';

class Order extends React.Component {
    render() {
      const orderIds = Object.keys(this.props.order);
      const total = orderIds.reduce()
        return (
            <h2>Your Order</h2>
        )
    }
}

export default Order;