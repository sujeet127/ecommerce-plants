import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {searchBarTerm}  from '../users/UserProduct';
import axios from 'axios';
function Navbar(props) {
    const [searchTerm, setSearchTerm] = useState("");
    const id = localStorage.getItem('userId');
    // const {getSearchData}= useContext(searchBarTerm);
    
    





    const deleteAccount = () => {
        axios.delete(`/api/users/${id}`)
            .then(res => {
                if (res.data.success) {
                    alert(res.data.message);
                    localStorage.clear();
                }
                else {
                    alert(res.data.message);
                }



            }).catch(e => {
                console.log(e);
            });

    }




    let button;
    if (props.user) {
        button = (
            <>
                <div id="product-search-bar" className="d-flex me-5">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{
                    setSearchTerm(e.target.value);
                    
                  }}/>
                  <button className="btn btn-outline-success" 
                  
                  onClick={()=>{
                      //getSearchData(searchTerm);
                  }
                } 
                  
                  >Search</button>
                </div>
                <ul className="navbar-nav d-flex  me-5">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Hello! {props.user.fname}
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li> <Link className="dropdown-item" to="/viewuser">View Profile</Link></li>
                            <li> <Link className="dropdown-item" to="/edituser">Update Profile</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li> <Link className="dropdown-item" to="/" onClick={deleteAccount}>Delete Account</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li> <Link className="dropdown-item" to="/viewaddress">User Address</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link onClick={() => localStorage.clear()} className="dropdown-item" exact to="/">Logout</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Return and orders</a>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/cart">Cart</NavLink>
                    </li>
                </ul>


            </>
        )
    }
    else {
        button = (
            <>
                <NavLink className="btn btn-outline-light" exact to="/login">Login</NavLink>
                <NavLink className="btn btn-outline-light ms-2" exact to="/registration">Sign up</NavLink>
            </>
        )
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" exact to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/contact">Contact us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/producthome">Products</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                    <NavLink className="nav-link" exact to="/userproduct">Shopping items</NavLink>
                                </li> */}




                        </ul>
                        {button}


                    </div>
                </div>
            </nav>
        </div>
    );
}


export default Navbar;
