import React, { useState } from 'react';
import fakeData from '../../fakeData/index';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './shop.css';
import { addToDatabaseCart } from "../../utilities/databaseManager";

function Shop() {
    const first10= fakeData.slice(0,10);
    const [products, setProducts]= useState(first10);
    const [cart, setCart]= useState([]);
    const handleAddProduct= (product)=> {
        const existing= cart.find((pd)=> pd===product);
        if(existing){
            product.quantity= product.quantity+1;
            setCart([...cart]);
        }else{
            product.quantity=1;
            const newCart= [...cart, product];
            setCart(newCart);
        }
        // const similar= newCart.filter(pd=> pd.key===product.key);
        // const similarCount= similar.length;
        addToDatabaseCart(product.key, product.quantity);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {products.map(product=> <Product showAddToCart= {true} key={product.key} handleAddProduct={handleAddProduct} product={product}></Product> )}
            </div>
            <div className="cart-container">
               <Cart></Cart>
            </div>
            
        </div>
    )
}

export default Shop
