import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import indoor from '../../assets/img/indoorplant1.jpg'
import axios from 'axios';
function EditAddress(props) {
    let history = useHistory();
    const { id } = useParams();
    console.log("params:", id);

    const [address, setAddress] = useState({
        country: "",
        name: "",
        street: "",
        city :"",
        state: "",
        pincode: "",
        email:"",
        phone:"",
        userid:""


    });
    useEffect(() => {
        loadAddress();
    }, [])
    const loadAddress = async e => {
        const result = await axios.get(`api/address/s/${id}`);

        setAddress(result.data.data);
        console.log("edit Address data:", address);
    }
    const { country, name, street, city, state, pincode,email,phone } = address;
    const onInputChange = e => {
        //console.log(e.target.value);
        setAddress({ ...address, [e.target.name]: e.target.value });
    }
    

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`/api/address/`,address)
            .then(res => {
                if (res.data.success) {
                    alert(res.data.message);
                    history.push('/viewaddress');
                }
                else {
                    alert(res.data.message);
                }
            }).catch(err => {
                alert(err);
                console.log(err);
            });

    }


    return (
        <div>
            <div className="container " >
                <div className="row mt-5">
                    
                     <div className="col-md-6">

                        <img className="registration-img shadow" src={indoor} alt="" />
                    </div> 
                    <div className="col-md-5">
                    <div className=" text-center ">
                            <h1 className="display-1 text-center" style={{color:'green'}}>Edit Address</h1><hr />
                            <form onSubmit={e => onSubmit(e)}>

                                <div className="mb-3">
                                    <input type="text" className="form-control" id="country" placeholder="Enter Country Name"
                                        name="country" value={country} onChange={e => onInputChange(e)} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="name" placeholder="Enter Full Name"
                                        name="name" value={name} onChange={e => onInputChange(e)} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="street" placeholder="Enter street "
                                        name="street" value={street} onChange={e => onInputChange(e)} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="city" placeholder="Enter city"
                                        name="city" value={city} onChange={e => onInputChange(e)} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control"  id="state" placeholder="Enter State"
                                        name="state" value={state} onChange={e => onInputChange(e)} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control"  id="pincode" placeholder="Enter Pincode"
                                        name="pincode" value={pincode} onChange={e => onInputChange(e)} />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control"  id="email" placeholder="Enter State"
                                        name="email" value={email} onChange={e => onInputChange(e)} />
                                </div>
                                <div className="mb-3">
                                    <input type="number" className="form-control"  id="phone" placeholder="Enter phone number"
                                        name="phone" value={phone} onChange={e => onInputChange(e)} />
                                </div>


                                <button type="submit" className="btn btn-warning">Update Address</button>
                                <Link className="btn btn-primary ms-2" to="/viewaddress">Back </Link>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default EditAddress;