import { Component } from "react";
import { Link } from 'react-router-dom';
import './ProductItem.css';



export class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: props.product
        };
    }

    closeModal() {
        const x = document.getElementById('add-item-modal');
        x.classList.remove('display-flex');
    }

    render() {
        return (
            <div>
                <div className="product-item">
                    <img src={this.state.product.imageUrl} width="250px" height="250px" alt=""></img>
                    <strong><p>{this.state.product.productName}</p></strong>
                    <p>${this.state.product.unitPrice}</p>
                    <input type="submit" value="Add to Cart" className="add-btn" onClick={this.props.addCartItem.bind(this, this.props.product)}></input>
                </div>
                <div className="modal" id="add-item-modal">
                    <div className="modal-content">
                        <h2 id="item-name-added"></h2>
                        <span className="check-mark">&#10003;</span>
                        <span><p className="cart-link" onClick={this.closeModal}>Continue Shopping</p><p><Link className="cart-link" to="/cart">View Cart!</Link></p> </span>
                        
                    </div>
                </div> 


            </div>
        );
    }


}