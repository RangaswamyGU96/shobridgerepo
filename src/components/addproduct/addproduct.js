import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink, Redirect } from 'react-router-dom';
import axios from 'axios';
import '../addproduct/addproduct.css'



class addproduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            price: "",
            isallfieldsfilled: false,
            isaddsuccess: false
        }

    }

    createproductHandler = (event) => {
        event.preventDefault();

        if (this.state.name == "" || this.state.description == "" || this.state.price == "") {
            this.setState({ isallfieldsfilled: true })
        }
        else {
            this.setState({ isallfieldsfilled: false })
            const postdata = {

                id: Math.floor(Math.random() * 100),
                name: this.state.name,
                description: this.state.description,
                price: this.state.price

            }
            console.log(postdata);
            axios.post("http://localhost:3000/products", postdata)
                .then((res) => {
                   
                     
                    window.location.href = '/products';
                   
                    this.setState({
                        isaddsuccess: true
                    })

                }).catch((err) => {
                    alert(err);
                });
        } 
    }

    changename = (event) => {

        this.setState({
            name: event.target.value
        });

    }

    render() {


        return (
            <div className="add-product">
                <form>
                    <h2 className="text-center">Add Product</h2>

                    <div className="form-group m-2">
                        <label htmlFor="Productname">Product name :</label>
                        <input className="form-control" placeholder="Ex: Wifi Router" id="Productname" type="text" value={this.state.name} required onChange={(event) => this.changename(event)} />
                    </div>

                    <div className="form-group m-2">
                        <label htmlFor="">Description :</label>
                        <textarea className="form-control" placeholder="Ex: About Wifi Router" id="ProdDesc" type="text" maxLength="200" value={this.state.description} onChange={(event) => {
                            this.setState({
                                description: event.target.value
                            });
                        }}    ></textarea></div>

                    <div className="form-group m-2">
                        <label htmlFor="ProdOthInfo">Price:</label>
                        <input className="form-control" placeholder="1000" id="ProdOthInfo" type="number" required value={this.state.price} required onChange={(event) => {
                            this.setState({
                                price: event.target.value
                            });
                        }} />
                    </div>
                    <div className="form-group m-2">
                        {this.state.isallfieldsfilled && <p className="mandotory">All fields are mandotory</p>}


                    </div>



                    <button className="btn btn-primary m-2 " onClick={this.createproductHandler}>Add Product</button>



                </form>
                { this.state.isaddsuccess && <Redirect to="/" />}
            </div>
        );
    }
}

addproduct.propTypes = {

};

export default addproduct;