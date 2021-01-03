import React from 'react';
import axios from '../commons/axios'
import { CSSTransition, TransitionGroup} from 'react-transition-group'

import ToolBox from "./ToolBox";
import Product from "./Product";
import Panel from "./Panel";
import AddInventory from "./AddInventory";

class Products extends React.Component{

    state = {
        products:[],
        sourceProducts:[]
    }

    search = text =>{
        console.log(text);
        // 1. new array
        let _products = [...this.state.sourceProducts]
        // 2. filter
        _products = _products.filter(p=>{
            const matchArray = p.name.match(new RegExp(text,'gi'))
            return !!matchArray
        })
        // 3. set state
        this.setState({
            products: _products
        })
    }

    componentDidMount() {
        // fetch('http://localhost:3003/products')
        //     .then(response => response.json())
        //     .then(data=>{
        //         console.log(data)
        //         this.setState({products:data})
        //     })
        axios.get('/products').then(response=>{
            this.setState({
                products: response.data,
                sourceProducts: response.data
            });
        });
    }

    toAdd = () =>{
        Panel.open({
            component:AddInventory, //we pass the inventory page data to the panel instance thru product.js by passing to the panel open function
            callback: data => {
                console.log('products data', data)
            }
        })
    }

    render(){
        return (
            <div>
                <ToolBox search={this.search}/>
                <div className="products">
                        <div className="columns is-multiline is-desktop">
                            <TransitionGroup component={null}>
                            {
                                this.state.products.map(p=>(
                                    <CSSTransition classNames="product-fade" timeout={300} key={p.id}>
                                        <div className="column is-3" key={p.id}>
                                            <Product product={p}/>
                                        </div>
                                    </CSSTransition>
                                ))
                            }
                            </TransitionGroup>
                        </div>
                    <button className="button is-primary add-btn" onClick={this.toAdd}>Add</button>
                </div>
            </div>

        );
    }
}

export default Products;