import React from 'react'
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';

function Cart(props) {
    console.log();
    const pdDb= getDatabaseCart();
    const pdDbKeys= Object.keys(pdDb);
    const products= pdDbKeys.map((key)=> {
       const found= fakeData.find(item=>item.key===key);
       found.quantity=pdDb[key];
       return found;
    })
    
    const fixedRounding= (num)=> {
        return Number(num.toFixed(2));
    }
 
    let totalPrice= products.reduce((total,product)=>{
        return total+product.price*product.quantity;
    }, 0);
    totalPrice= fixedRounding(totalPrice);
    
    let shippingCost= 0;
    if(totalPrice===0){
        shippingCost=0;
    }else if(totalPrice<30){
        shippingCost=10;
    }else if(totalPrice<50){
        shippingCost=5;
    }

    const tax= fixedRounding(totalPrice*.12);

    const grandTotal= fixedRounding(totalPrice+shippingCost+tax);
    
    return (
        <>
          <h3>Order Summary</h3>
          <p>Added to cart: {products.length} </p>
          <p>Total Product Price: ${totalPrice} </p> 
          <p>Shipping Cost: ${shippingCost}</p>
          <p>Tax: ${tax}</p>
          <h5>Grand Total: ${grandTotal}</h5>
          {props.children? props.children:''}
        </>
    )
}

export default Cart
