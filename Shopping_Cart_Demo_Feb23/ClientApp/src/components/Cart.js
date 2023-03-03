import { Component } from "react";
import { CartList } from "./CartList";
import axios from 'axios';
import './Cart.css';



export class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: [],
            cartsLoading: true,
        };
    }


    componentDidMount() {
        this.populateCart();
    }

    renderCartList(cartItems) {

        return (
            
            <div>
                <CartList
                    cartItems={this.state.cartItems}
                    deleteCartItem={this.deleteCartItem}
                    incrementQuantity={this.incrementQuantity}
                    decrementQuantity={this.decrementQuantity}
                    placeOrder={this.placeOrder}
                    
                />
            </div>
        );
    }



    //DELETE ITEM FROM CART
    deleteCartItem = (id) => {
        axios.delete('/carts/' + id).then(response => {
            this.setState({cartItems: response.data})
        })
    }

    //INCREMENT QUANTITY OF ITEM IN CART BY 1
    incrementQuantity = (id) => {
        const itemToEdit = {
            Id: id,
            increaseQuantity: true
        };
        axios.put('/carts/', itemToEdit).then(response => {
            this.setState({ cartItems: response.data})
        });
        
    }

    //DECREMENT QUANTITY OF ITEM IN CART BY 1 
    decrementQuantity = (id) => {
        const itemToEdit = {
            Id: id,
            increaseQuantity: false
        };
        axios.put('/carts/', itemToEdit).then(response => {
            this.setState({ cartItems: response.data})
        })

    }

    //PLACE ORDER (REMOVE ALL ITEMS FROM CART)
    placeOrder(item) {
        axios.delete('/carts');
    }


    render() {
        let cartListContents = this.state.cartsLoading
            ? <p>Loading...</p>
            : this.renderCartList(this.state.cartItems);

        return (
            <div>
                <div className="cart-title">
                    <h2>Cart Summary</h2>
                    <hr />
                </div>
                {cartListContents}
            </div>
        );
    }


    async populateCart() {
        const response = await fetch('carts');
        const data = await response.json();
        this.setState({ cartItems: data, cartsLoading: false })
    }

}