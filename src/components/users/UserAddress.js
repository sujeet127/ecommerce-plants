import axios from 'axios';
import React, { useState, useEffect, useRef, createContext } from 'react';
import { Link, NavLink,useHistory } from 'react-router-dom'
function UserAddress(props) {
    const history=useHistory();
    const [address, setAddress] = useState([]);
    
    
    useEffect(() => {

        loadAddress();
    }, []);
    const loadAddress = async () => {
        const userId=localStorage.getItem("userId");
        const result = await axios.get(`/api/address/${userId}`);
        console.log(result);
        setAddress(result.data.data);

    }
    const deleteAddress = async id => {

        await axios.delete(`/api/address/${id}`);
        //loadProduct(); //not working properly don't know why
        window.location.reload();
        
    
    
      }
      const payment=async id=>{
        await axios.payment(`/api/payment/${id}`);
        history.push("/payment");
      }
    return (
        <div>
            <div className="container">
            <table class="table border shadow table-scrollable mt-5">
              <thead class="table-dark">
                <tr>
                  <td>#</td>
                  <td>Country</td>
                  <td>Full Name</td>
                  <td>street</td>
                  <td>city</td>
                  <td>state</td>
                  <td>pincode</td>
                  <td>email</td>
                  <td>phone</td>
                  <td>Action</td>

                </tr>

              </thead>
              <tbody>
                {address.map((address, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>

                    <td>{address.country}</td>
                    <td>{address.name}</td>
                    <td>{address.street}</td>
                    <td>{address.city}</td>
                    <td>{address.state}</td>
                    <td>{address.pincode}</td>
                    <td>{address.email}</td>
                    <td>{address.phone}</td>
                    
                    <td>
                      <Link className="btn btn-outline-dark m-1" to={`/editaddress/${address.address_id}`}>Edit</Link>
                      <Link className="btn btn-outline-danger " onClick={() => deleteAddress(address.address_id)}>Delete</Link>
                      <Link className="btn btn-outline-danger m-1 " onClick={() => payment(address.address_id)}>Pay</Link>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>

            
            
            </div>
        </div>
    );
}

export default UserAddress;