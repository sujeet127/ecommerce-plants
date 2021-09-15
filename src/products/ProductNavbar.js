import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import $ from 'jquery';
import '../../node_modules/bootstrap/js/dist/dropdown'
import { Link, NavLink } from 'react-router-dom'
import AddProduct from './AddProduct';
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'

export const searchBarInput=React.createContext();
function ProductNavbar(props) {
 const [users, setUser] = useState([]);
 const [searchTerm,setSearchTerm]=useState("");
 const id = localStorage.getItem('userId');
 
 

  const el = useRef();
    function deleteAccount() {
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
    function handleToggle() {

        $(el.current).slideToggle();
      }
    return (
        <div>
          


            
        <nav ref={el} className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" to="/producthome">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown ms-5">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    All
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Indoor Plants</a></li>
                    <li><a className="dropdown-item" href="#">Garden Plants</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Seeds</a></li>
                  </ul>
                </li>
                <form id="product-search-bar" className="d-flex ">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{
                    setSearchTerm(e.target.value);
                    
                  }}/>
                  <button className="btn btn-outline-success" onClick={()=>searchTerm(searchTerm)} >Search</button>
                </form>

              </ul>
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
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Return and orders</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Cart</a>
                </li>
              </ul>


            </div>
          </div>
        </nav>
        {/* <button onClick={handleToggle} className="btn btn-primary m-2">Hide/show</button>
         */}

            
        </div>
    );
}

export default ProductNavbar ;

