import { Component } from "react";
import './CartItem.css';



export class CartItem extends Component {
    constructor(props) {
        super(props);
        
    }


    getPrice() {
        let x = 0;
        x = (this.props.cartItem.unitPrice * this.props.cartItem.quantity).toFixed(2);
        return x;
    }

    incrementQty() {
        console.log('works!');
    }

    render() {
        return (
            <div className="cart">
                <span className="product-name"><strong>{this.props.cartItem.productName}</strong></span>
                <span className="product-total">${this.getPrice()}</span>
                <span className="product-image"><img src={this.props.cartItem.imageUrl} width="80px" height="75px"></img></span>
                <form className="quantity-form">
                    <span className="product-quantity">Quantity: { this.props.cartItem.quantity }</span>
                    <span className="quantity-buttons">
                        <input type="button" value="-" onClick={this.props.decrementQuantity.bind(this, this.props.cartItem.productId)}></input>
                        <input type="button" value="+" onClick={this.props.incrementQuantity.bind(this, this.props.cartItem.productId)}></input>
                        <img src="../trash.png" width="30px" className="delete-button" onClick={this.props.deleteCartItem.bind(this, this.props.cartItem.productId)} />
                    </span>
                </form>
                
                
            </div>
        );
    }

}