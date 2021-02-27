import React from 'react'
import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function Product(props) {
    const {name, img,price, seller, stock}= props.product;
    return (
        <div className='single-product'>
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div className="product-detail">
                <h4>{name}</h4>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>$ {price}</p>
                <p><small>Only {stock} left. Order soon.</small></p>
                <button onClick={()=>props.handleAddProduct(props.product)} className="main-btn"><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
        </div>
    )
}

export default Product
