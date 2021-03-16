import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Wrong from './components/404/404';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Shipment from './components/Shipment/Shipment';
import Login from './components/Login/Login';
import React, { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const userContext= React.createContext();
function App() {
  const [loggedUser, setLoggedUser]= useState(); 
   return (
    <userContext.Provider value={[loggedUser, setLoggedUser]}>
      <h1>{loggedUser && loggedUser.email}</h1>
      <Router>
         <Header></Header>
         <Switch>
        <Route exact path='/'>
         <Shop></Shop>
        </Route>
        <Route path='/shop'>
          <Shop></Shop>
        </Route>
        <Route path='/review'>
          <Review></Review>
        </Route>    
        <Route path='/inventory'>
          <Inventory></Inventory>
        </Route> 
        <PrivateRoute path='/shipment'>
          <Shipment></Shipment>
        </PrivateRoute>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/product/:key'>
          <ProductDetail></ProductDetail>
        </Route>
        <Route path='*'>
          <Wrong></Wrong>
        </Route>
        </Switch>  
      </Router>
    </userContext.Provider>
  );
}

export default App;
