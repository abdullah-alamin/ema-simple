import React from 'react'

function Cart(props) {
    const products= props.cart;
    const fixedRounding= (num)=> {
        return Number(num.toFixed(2));
    }
    
    let totalPrice= products.reduce((total,product)=>{
        return total+product.price;
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
        </>
    )
}

export default Cart
