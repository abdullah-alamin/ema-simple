import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import logo from '../../images/logo.png';
import './header.css'

function Header() {
    const [loggedUser, setLoggedUser]= useContext(userContext);
    
    return (
        <div className='header'>
            <img src={logo} alt=""/>
            <nav>
                
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <button onClick={()=> setLoggedUser({})}>Sign Out</button>
            </nav>
        </div>
    )
}

export default Header
