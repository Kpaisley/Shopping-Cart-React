import { Component } from "react";
import { ProductsList } from "./ProductsList";
import "./Product.css";
import axios from "axios";


export class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            productsLoading: true
        };
    }

    componentDidMount() {
        this.populateProducts();
    }

    renderProductList(products) {
        return (
            <ProductsList
                products={this.state.products}
                addCartItem={this.addCartItem}
            />
        );
    }

    //ADD ITEM TO CART
    addCartItem = (item) => {
        const newCartItem = {
            productId: item.productId,
            productName: item.productName,
            unitPrice: item.unitPrice,
            unitsInStock: item.unitsInStock,
            imageUrl: item.imageUrl,
            quantity: 1
        };

        const x = document.getElementById('add-item-modal');
        x.classList.add('display-flex');
        document.getElementById('item-name-added').innerHTML = (item.productName + " Added to Cart!");
        axios.post('/carts', newCartItem);
    }



    render() {
        let productListContents = this.state.productsLoading
            ? <p>Loading...</p>
            : this.renderProductList(this.state.products);


        return (
            <div>
                <div className="product-title">
                    <h2>Browse Our Products Below!</h2>
                    <hr />
                </div>
                {productListContents}
            </div>
            )
    }


    async populateProducts() {
        const response = await fetch('products');
        const data = await response.json();
        this.setState({ products: data, productsLoading: false })
    }

}
