import React from 'react';

class AddFishForm extends React.Component {
    constructor() {
        super();
        this.createFish = this.createFish.bind(this);
    }

    createFish(event) {
        event.preventDefault();
        console.log("make fish!");
        const fish = {
            name
            price
            status
            desc
            image
        }
    }

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input ref={(input) => this.name = input} type="text" placeholder="Fish Name" /> 
                <input ref={(input) => this.price = input} type="text" placeholder="Fish Price" /> 
                <select ref={(input) => this.status = input}>
                    <option value="available">Fresh!</option>
                    <option value="imavailable">Sold Out!</option>
                </select>
                <textarea ref={(input) => this.desc = input} placeholder="Fish Desc"></textarea>
                <input ref={(input) => this.image = input} type="text" placeholder="Fish Image" />
                <button type="submit">+ Add Item</button> 
            </form>
        )
    }
}

export default AddFishForm;