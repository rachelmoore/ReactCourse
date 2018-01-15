import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    constructor() {
        super();
        this.goToStore = this.goToStore.bind(this);
    }

    goToStore(event) {
        event.preventDefault(); //stop default from happening (refresh the page)
        // first grab text from box
        console.log(this.storeInput);
        // second, transition to / to /store/:storeId
        console.log("you changed the url");
    }

    render() {
        return (
            <form className="store-selector" onSubmit={(e) => this.goToStore(e)} >
                <h2>Please enter a store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input}}/> 
                <button type="submit"> Visit Store</button>
            </form>
        ) 
    }
}

export default StorePicker;