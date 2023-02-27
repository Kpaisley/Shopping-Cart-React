import { Component } from "react";
import { CartItem } from "./CartItem";
import { Link } from 'react-router-dom';
import './CartList.css';



export class CartList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: props.cartItems
        };
    }


    getTotalQty() {
        var x = 0;
        for (let i = 0; i < this.state.cartItems.length; i++) {
            x += this.state.cartItems[i].quantity;
        }
        return x;
    }

    

    getTotalPrice() {
        let x = 0;
        for (let i = 0; i < this.state.cartItems.length; i++) {
            x += (this.state.cartItems[i].unitPrice * this.state.cartItems[i].quantity)
        }

        x += (x * .05);

        return (x).toFixed(2);
    }


    placeOrder() {
        var x = document.getElementById('cart-warning');

        if (this.state.cartItems.length <= 0) {
            x.innerHTML = "Please add some items to your cart first.";
            return;
        }
        else {
            x.innerHTML = "";
            this.props.placeOrder();
            var z = document.getElementById('cart-modal')
            z.classList.add('display-flex');
        }

        
        
    }


    

    render() {
        return (
            <div>
                <div className="cart-list">
                    {this.state.cartItems.map( cartItem =>
                        <CartItem 
                            key={cartItem.productId}
                            cartItem={cartItem}
                            deleteCartItem={this.props.deleteCartItem}
                            editItemQuantity={this.props.editItemQuantity}
                        />
                    )}
                    <div className="product-summary">
                        <h4>Order Summary</h4>
                        <ul>
                            <li>Total items: {this.getTotalQty()}</li>
                            <li>Subtotal: ${this.getTotalPrice()}<br /><em>(5% tax included in subtotal)</em></li>
                    </ul>
                    <input className="order-button" type="button" value="Place Order!" onClick={this.placeOrder.bind(this)} ></input>
                    <p id="cart-warning"></p>
                    <Link className="shopping-link" to="/">Continue Shopping!</Link>
                    </div>  
                </div>
                <div className="modal" id="cart-modal">
                    <div className="cart-modal-content">
                        <h1>Thank You!</h1>
                        <h2>Your order for ${this.getTotalPrice()} has been placed.</h2>
                        <span className="check-mark">&#10003;</span>
                        <h3>Have a wonderful day</h3>
                        <Link to="/">Continue</Link>
                    </div>
                </div>
            </div>
        );
    }
    
}