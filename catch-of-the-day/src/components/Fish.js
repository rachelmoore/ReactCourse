import React from 'react';

class Fish extends React.Component {
    render() {
        const details = this.props.details;
        return (
        <li className="menu-fish">
            <img src={details.image} alt={details.name} /> 
            <h3>
                {details.name}
                <span className="price">{details.price}</span>
            </h3>
            <p>{details.desc}</p>
        </li>
        )
    }
}

export default Fish;