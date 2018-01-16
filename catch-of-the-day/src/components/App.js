import React from 'react';
import Header from './header';
import Order from './order';
import Inventory from './inventory';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            fishes: {}, 
            order: {}
        };
    }

    addFish(fish) {
        //update our state 
        const fishes = {...this.state.fishes};
        //add in our new fish
        const timestamp = Date.now();
        fishes[`fish-${timestamp}`] = fish;
        //set state
        this.setState({ fishes: fishes})
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" /> 
                </div>
                <Order /> 
                <Inventory /> 
            </div>
        )
    }
}

export default App;