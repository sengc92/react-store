import React from 'react';

class AddInventory extends React.Component{

    state = {
        name:'',
        price:0,
        tags:'',
        image:'',
        status:'available'
    }

    // to catch the input changes, we use e, then e.target.value
    // we use square bracket to cast assigned name, eg. [name]:value
    handleChange = e =>{
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]:value

        })
    }
    render(){
        return(
            <div className="inventory">
                <p className="title has-text-centered">Inventory</p>
                <div className="field">
                    <div className="control">
                        <label htmlFor="" className="label">Name</label>
                        <textarea name="name" className="textarea" value={this.state.name} onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <label htmlFor="" className="label">Price</label>
                        <input type="number" className="input" name="price" value={this.state.price} onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <label htmlFor="" className="label">Tags</label>
                        <input type="text" className="input" name="tags" value={this.state.tags} onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <label htmlFor="" className="label">Image</label>
                        <input type="text" className="input" name="image" value={this.state.image} onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <label htmlFor="" className="label" value={this.state.status} onChange={this.handleChange}>Status</label>
                        <div className="select is-fullwidth">
                            <select name="status" id="">
                                <option value="">available</option>
                                <option value="">unavailable</option>
                            </select>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="field is-grouped is-grouped-centered">
                    <div className="control">
                        <button className="button is-link">Submit</button>
                    </div>
                    <div className="control">
                        <button className="button">Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddInventory;