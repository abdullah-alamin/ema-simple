import React from 'react'
import { useState } from 'react/cjs/react.development';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import image from '../../images/giphy.gif';
import { useHistory } from 'react-router';

function Review() {
    const history= useHistory();
    const [toggle, setToggle]= useState(true);
    const [ordered, setOrdered]= useState(false);
    const pdDb= getDatabaseCart();
    const pdDbKeys= Object.keys(pdDb);
    const products= pdDbKeys.map((key)=> {
       const found= fakeData.find(item=>item.key===key);
       found.quantity=pdDb[key];
       return found;
    })
   function removeProduct(key){
    removeFromDatabaseCart(key);
    setToggle(!toggle);
   }
   const proceedCheckout= ()=> {
    history.push('/shipment');
   }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {products.map(product=> {
                    const {name, price}= product;
                    return(
                        <div key={product.key} className="product-detail">
                            <h4>{name}</h4>
                            <h5>Quantity: {product.quantity}</h5>
                            <p>${price}</p>
                            <button onClick={()=>removeProduct(product.key)}  className="main-btn">
                     Remove       </button>
                        </div>
                    )
                } )}
                {ordered && <img src={image} alt=""/> }
            </div>
            <div className="cart-container">
               <Cart>
               <button onClick={proceedCheckout} className="main-btn">
                     Proceed Checkout       </button>
               </Cart>
            </div>
            
        </div>
    )
}

export default Review
