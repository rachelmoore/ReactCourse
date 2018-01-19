import React from 'react';
import Header from './header';
import Order from './order';
import Inventory from './inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
    constructor() {
        super();
        this.addFish = this.addFish.bind(this);
        this.loadSamples = this.loadSamples.bind(this);
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

    loadSamples() {
        this.setState({
            fishes: sampleFishes
        });
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" /> 
                    <ul className="list-of-fishes">
                        {
                            Object.keys(this.state.fishes)
                            .map(key => <Fish />)
                        }
                    </ul>
                </div>
                <Order /> 
                <Inventory addFish={this.addFish} loadSamples={this.loadSamples} /> 
            </div>
        )
    }
}

export default App;