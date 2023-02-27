import { Component } from "react";
import './CartItem.css';



export class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItem: props.cartItem
        };
    }


    getPrice() {
        let x = 0;
        x = (this.state.cartItem.unitPrice * this.state.cartItem.quantity).toFixed(2);
        return x;
    }

    render() {
        return (
            <div className="cart">
                <span className="product-name"><strong>{this.state.cartItem.productName}</strong></span>
                <span className="product-total">${this.getPrice()}</span>
                <span className="product-image"><img src={this.state.cartItem.imageUrl} width="80px" height="75px"></img></span>
                <form className="quantity-form" onSubmit={this.props.editItemQuantity.bind(this, this.props.cartItem)}>
                    <span className="product-quantity">Quantity: <input className="quantity-input" name="quantity" type="number" placeholder={this.state.cartItem.quantity} min="1"></input></span>
                    <span className="quantity-buttons"><input type="submit" value="&#x2713;"></input><input type="button" value="X" onClick={this.props.deleteCartItem.bind(this, this.props.cartItem.productId)}></input></span>
                </form>
                
                
            </div>
        );
    }

}