import React from 'react';
import { NavLink } from 'react-router-dom';
import '../header/header.css';
import Addimage from '../../Assets/add.png';
import Viewimage from '../../Assets/view.png'

function header(props) {
    return (
        <header className="header">
           <div className="heading-title">Shop Bridge</div> 
           <div className="navlink">
               <NavLink activeClassName="active" to="/products" title="View Products">
               <img    src={Viewimage} alt="view Product"/>  
                   View</NavLink>
               <NavLink  activeClassName="active" to="/add-product"  title="Add Product">
                  <img    src={Addimage} alt="Add Product"/> 
                   Add</NavLink>
           </div>
        </header>
    );
}

export default header;