import React, { useState } from 'react';
import '../product/product.css';
import Upadteform from '../../updateproduct/upadteproduct'
import { Link, useHistory } from 'react-router-dom';
import deleteicon from '../../../Assets/delete.png';
import Editicon from '../../../Assets/edit.png'

function Product(props) {
    const history = useHistory();

    const navigatetoedit = (id) => {

        history.push('/update-product?id=' + id)
    }


    return (




        <div className="col-sm-12 col-md-4  col-lg-4" >
            <div className="card product-card ">
                <div className="product-detail  ">
                    <span className="product-title">Product Name </span>
                    <p className="product-item"> {props.name}</p>
                </div>
                <div className="product-detail">
                    <span className="product-title">Description </span>
                    <p className="product-item">{props.desc}</p>
                </div>
                <div className="product-detail">
                    <span className="product-title">Price </span>
                    <p className="product-item">{props.price} Rs</p>
                </div>
                {/* <div className="product-detail">
                    <span className="product-title">Other info </span>
                    <p className="product-item"> </p>
                </div> */}
                <div className="update-buttons">
                    <img alt="Delete" onClick={props.delete} src={deleteicon} title="Delete Product" />
                    <img alt="Edit" onClick={() => navigatetoedit(props.id)} src={Editicon} title="Edit Product" />
                </div>
                {/* <div>
                    <button onClick={ setupadteform(true)}>update this product</button>
                </div> */}
            </div>
        </div>




        //   {!updateform && <Upadteform  name={props.name} desc={props.desc}  id={props.id} price={props.price}/>  }


    );
}

export default Product;