import React, { useState } from 'react';
import fakeData from '../../fakeData/index';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './shop.css'

function Shop() {
    const first10= fakeData.slice(0,10);
    const [products, setProducts]= useState(first10);
    const [cart, setCart]= useState([]);
    const handleAddProduct= (product)=> {
        console.log(product);
        const newCart= [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {products.map(product=> <Product key={product.key} handleAddProduct={handleAddProduct} product={product}></Product> )}
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
            
        </div>
    )
}

export default Shop
