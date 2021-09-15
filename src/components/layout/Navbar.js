import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom';
class Navbar extends Component {
    

    render() {
        let button;
        if(this.props.user){
            button=(
                <>
                <Link onClick={() => localStorage.clear()} className="btn btn-outline-light" exact to="/">Logout</Link></>
            )
        }
        else{
            button=(
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
}

export default Navbar;
