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
            totalQty: 0
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
                    editItemQuantity={this.editItemQuantity}
                    placeOrder={this.placeOrder}
                />
            </div>
        );
    }



    //DELETE ITEM FROM CART
    deleteCartItem = (id) => {
        axios.delete('/carts/' + id);
        window.location.reload();
    }

    //CHANGE QUANTITY OF ITEM IN CART
    
    editItemQuantity = (item, event) => {  
        const itemToEdit = {
            productId: item.productId,
            productName: item.productName,
            unitPrice: item.unitPrice,
            imageUrl: item.imageUrl,
            quantity: event.target.quantity.value
        };
        axios.put('/carts/', itemToEdit);
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