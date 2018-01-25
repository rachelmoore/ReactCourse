import React from 'react';

class Order extends React.Component {
    render() {
      const orderIds = Object.keys(this.props.order);
      const total = orderIds.reduce((prevTotal, key) => {
        const fish = this.props.fish[key];
        const count = this.props.order[key];
        const isAvailable = fish && fish.status === 'available';
      })
        return (
            <h2>Your Order</h2>
        )
    }
}

export default Order;