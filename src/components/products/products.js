import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ErrorHadler from '../Error/errorhandler';
import Noproducts from '../Noproducts/noproducts';
import Product from './product/product';
import { Link, Prompt } from 'react-router-dom';

class products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Productdata: [],
            Error: false,
            isproductempty: false
        }

    }

    componentWillMount() {
        this.getproductdetails();
    }
    getproductdetails = () => {
        axios.get("http://localhost:3000/products")
            .then(response => {

                if (response.data.length == 0) {
                    this.setState({ isproductempty: true })
                }
                this.setState({ Productdata: response.data });

            }).catch(err => {

                this.setState({ Error: true })
            })

    }
    deleteproductHandler = (id) => {
        var result = window.confirm("Want to delete?");
        if (result) {
            axios.delete(`http://localhost:3000/products/${id}`)
                .then(res => {

                    this.getproductdetails();

                }).catch(err => {
                    alert(err);
                })
        }
    }


    render() {

        const prod = this.state.Productdata.map(data => {
            return <Product
                key={data.id}
                name={data.name}
                desc={data.description}
                price={data.price}
                id={data.id}
                delete={() => this.deleteproductHandler(data.id)} />
        })
        return (
            <div>
                <h2 className="text-center">Product List</h2>
                <div className="row">
                    {prod}
                </div>
                {this.state.Error && <ErrorHadler />}
                {this.state.isproductempty && <Noproducts />}
            </div>
        );
    }
}

products.propTypes = {

};

export default products;