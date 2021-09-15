import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import PageNotFound from './components/pages/PageNotFound';

import './FontAwesomeIcons/index';
import { Login } from './components/pages/Login';
import { Registration } from './components/pages/Registration';
import ResetPassword from './components/pages/ResetPassword';
import ProductHome from './products/ProductHome';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import ViewUser from './components/users/ViewUser';
import EditUser from './components/users/EditUser';
import EditProduct from './products/EditProduct';
import ViewProduct from './products/ViewProduct';
import AddProduct from './products/AddProduct';
import UserProduct from './components/users/UserProduct';
import Address from './components/users/Address';
import UserProductView from './components/users/UserProductView';
function App() {
  const [user,setUser]=useState(null);
  useEffect(() => {
      const userId=localStorage.getItem('userId');
     
      axios.get(`http://localhost:3001/api/users/${userId}`)
          .then(res => {
              // console.log(res.data.data)
              setUser(res.data.data);
              
          }).catch(e => {
              console.log(e);
          });
  },[])

  return (

    <Router>
      <div className="App">
        <Navbar user={user}/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/registration" component={Registration}/>
        <Route exact path="/resetpassword" component={ResetPassword}/>
        <Route exact path="/producthome" component={()=><ProductHome user={user}/>}/>
        <Route exact path="/viewuser" component={()=><ViewUser user={user}/>}/>
        <Route exact path="/edituser" component={()=><EditUser user={user}/>}/>
        <Route exact path="/products/edit/:id" component={EditProduct}/>
        <Route exact path="/products/view/:id" component={ViewProduct}/>
        <Route exact path="/addproduct" component={AddProduct}/>
        <Route exact path="/userproduct" component={UserProduct}/>
        <Route exact path="/address" component={Address}/>
        <Route exact path="/userproductview/:id" component={UserProductView}/>
        <Route  component={PageNotFound}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
