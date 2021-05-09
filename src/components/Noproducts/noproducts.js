import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class noproducts extends Component {
    render() {
        return (
            <div className="text-center mt-4">
         
                 <h2 >No Products found!! <Link to="/add-product">Click here to Add</Link> </h2>
            </div>
        );
    }
}

export default noproducts;