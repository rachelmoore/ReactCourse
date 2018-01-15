import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    goToStore(event) {
        event.preventDefault(); //stop default from happening (refresh the page)
        // first grab text from box

        // second, transition to / to /store/:storeId
        console.log("you changed the url");
    }

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore} >
                <h2>Please enter a store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input}}/> 
                <button type="submit"> Visit Store</button>
            </form>
        ) 
    }
}

export default StorePicker;