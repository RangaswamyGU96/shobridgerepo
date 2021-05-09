import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Header from '../header/header';
import Products from '../products/products';
import Creatproduct from '../addproduct/addproduct';
import UpdateProduct from '../updateproduct/upadteproduct';

function layout(props) {
    return (
        <div>
            <Header />
            <Switch>
            <Route path="/" exact >
                <Redirect to="/products" />                                   
                </Route>
                <Route path="/products" >
                    <Products />
                </Route>
                <Route path="/add-product" >
                    <Creatproduct />
                </Route>
                <Route path="/update-product" >
                    <UpdateProduct />
                </Route>
            </Switch>
        </div>
    );
}

export default layout;