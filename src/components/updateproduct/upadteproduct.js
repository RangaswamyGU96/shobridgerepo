import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../updateproduct/updateproduct.css';
import ErrorHandler from '../Error/errorhandler'

class upadteproduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Upadtedata: [],
            isallupfieldsfilled:false,
            iserror:false


        }
    }


    componentWillMount() {
        this.getddata();
    }


    getddata = () => {
        const windowUrl = window.location.search;
        console.log(windowUrl);
        const params = new URLSearchParams(windowUrl);
        const id = params.get('id');
        console.log("params ----" + params.get('id'));
        console.log(" tyrpeof params ----" + typeof (params));

        let url = "http://localhost:3000/products/" + id;

        axios.get(url)
            .then((res) => {
                console.log(res);
                this.setState({ Upadtedata: res.data });          

            }).catch((err) => {
               // alert(err);
            });
    }

    updateproductHandler = (event) => {
        if(this.state.Upadtedata.name =="" && this.state.Upadtedata.description=="" && this.state.Upadtedata.price== ""){
                this.setState({isallupfieldsfilled:true});
                alert("all fields are mandotory")
        }
        else{
             
            console.log(this.state.Upadtedata);
            const postdata = this.state.Upadtedata;
            console.log(postdata);
            let url = "http://localhost:3000/products/" + this.state.Upadtedata.id;
            axios.put(url, postdata)
                .then((res) => {
                    console.log(res);
                    alert("success");
                    window.location.href = '/';
    
                }).catch((err) => {                 
                    this.setState({
                        iserror:true,
                    })
                });
        }
        
      
    }

    namechangehandler = (event) => {

        let newarray = { ...this.state.Upadtedata };
        console.log(newarray);

        newarray.name = event.target.value;


        console.log(newarray.name);
        this.setState({
            Upadtedata: newarray,
        });

    }

    render() {
        return (
            <div className="update-products">
                <h2 className="text-center">Upadte Product</h2>
                <form>
                    <div className="form-group m-2">
                                                <label htmlFor="Productname">Product name :</label>
                        <input className="form-control" id="Productname" name="Productname" type="text" value={this.state.Upadtedata.name} onChange={(event) => this.namechangehandler(event)} />

                    </div>

                    <div className="form-group m-2">
                        <label htmlFor="ProdDesc">Description :</label>
                        <textarea className="form-control" id="ProdDesc"  name ="ProdDesc"   value={this.state.Upadtedata.description} onChange={(event) => {
                            let newarray = { ...this.state.Upadtedata };
                            newarray.description = event.target.value;

                            console.log(newarray.name);
                            this.setState({
                                Upadtedata: newarray,
                            });
                        }} > </textarea>
                    </div>
                    <div className="form-group m-2">
                        <label htmlFor="ProdOthInfo">Price:</label>
                        <input className="form-control" id="ProdOthInfo" name="ProdOthInfo" type="text" value={this.state.Upadtedata.price} onChange={(event) => {
                            let newarray = { ...this.state.Upadtedata };
                            newarray.price = event.target.value;
                            console.log(newarray.name);
                            this.setState({
                                Upadtedata: newarray,
                            });
                        }} />

                    </div>
                    <div className="form-group m-2">
                        {this.state.isallupfieldsfilled &&  <p className="mandotory">All fields are mandotory</p> }
                           

                    </div>

                    <div className="form-group m-2">
                        <button  className="btn btn-primary mt-2" onClick={() => this.updateproductHandler()}>Update</button>
                    </div>
                </form>
                {this.state.iserror && <ErrorHandler />}
            </div>
        );
    }
}



export default upadteproduct;