import { Component } from "react";
import { ProductItem } from "./ProductItem";
import './ProductsList.css';


export class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: props.products
        };
    }





    render() {
        return (
            <div className="products-list">
                {this.state.products.map(product =>
                    <ProductItem
                        product={product}
                        key={product.productId}
                        addCartItem={this.props.addCartItem}
                    />
                )}
            </div>
        );
    }

}