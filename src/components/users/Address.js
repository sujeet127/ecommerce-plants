import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../../styles/Registration.css'
import lotus from '../../assets/images/lotus.jfif';
import { Link, Navlink,useHistory } from 'react-router-dom';

import axios from 'axios';

import * as Yup from 'yup';
function Address(props) {
    const [message, setMessage] = useState([]);
    let history=useHistory();
    const phoneRegExp = /^([+]\d{2})?\d{10}$/
    

    const validate = Yup.object({
        country: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        street:Yup.string()
            .required('Street/Flatno./Building no./Colony is required'),
        city: Yup.string()
            .required('city is required'),
        pincode: Yup.string()
            .min(6, 'pincode must be of 6 charaters')
            .max(6,'pincode must be 6 of characters')
            .required('pincode is required'),
        state: Yup.string()
            .required('State is required'),
        phone: Yup.string()
            .required('Phone Number required')

            .matches(phoneRegExp, 'Phone number is not valid' ) 
            
    })
    const userId=localStorage.getItem("userId");

    return (
        <>

            <Formik
                initialValues={{ country: '', name: '', street: '', city: '', state: '',pincode:'',email:'' ,phone:''}}
                validationSchema={validate}

                onSubmit={(values, { setSubmitting }) => {
                    window.confirm(JSON.stringify(values))
                    {
                        setSubmitting(false);



                       values.userId=userId;   
                        axios.post("/api/address/", values)
                            .then(res => {
                                if (res.data.success) {
                                    alert("Address Added Successfully");
                                     history.push('/viewaddress');
                                }

                            }).catch(e => {
                                alert(e );
                            })
                            ;

                    }
                }}
            >
                {({ isSubmitting }) => (
                    <div className="row m-2">
                        <div className="col-md-6">
                            <div className="bootstrap-wrapper col-md-10">
                                <div className="left-container">
                                    <div className="container ">
                                        <div className="form-container">
                                            <div className="ms-2">
                                                <h2 className=" header-text ms-0 " >Address Details </h2>
                                                <p><small className="header-para ">Please enter your delivery address.</small></p>
                                                
                                            </div>
                                            
                                            <Form >
                                                <div className="form-group col-12">
                                                    
                                                    <Field type="text" className="form-control" name="country" placeholder="Enter Country" />
                                                    <ErrorMessage name="country" component="div" className="error" />
                                                </div>
                                                <div className="form-group col-12 ">
                                                    <Field type="text" name="name" className="form-control" placeholder="Enter Full Name" />
                                                    <ErrorMessage name="name" component="div" className="error" />
                                                </div>
                                                
                                                <div className="form-group col-12">
                                                    <Field type="text" name="street" className="form-control" placeholder="Street/Flatno./Building no." />
                                                    <ErrorMessage name="street" component="div" className="error" />
                                                </div>
                                                <div className="form-group col-12">
                                                    <Field type="text" name="city" className="form-control" placeholder="City" />
                                                    <ErrorMessage name="city" component="div" className="error" />
                                                </div>
                                                <div className="form-group col-12">
                                                    <Field type="text" name="state" className="form-control" placeholder="State" />
                                                    <ErrorMessage name="state" component="div" className="error" />
                                                </div>
                                                <div className="form-group col-12">
                                                    <Field type="text" name="pincode" className="form-control" placeholder="City Pincode" />
                                                    <ErrorMessage name="pincode" component="div" className="error" />
                                                </div>


                                                <div className="form-group col-12">
                                                    <Field type="tel" name="phone" className="form-control" placeholder="phone" />
                                                    <ErrorMessage name="phone" component="div" className="error" />
                                                </div>
                                                <div className="form-group col-12">
                                                    <Field type="email" name="email" className="form-control" placeholder=" Email " />
                                                    <ErrorMessage name="email" component="div" className="error" />
                                                </div>
                                                

                                                <div className="form-group col-12" >
                                                    <button type="submit" className="btn btn-success w-100" disabled={isSubmitting}>Submit</button>
                                                </div>
                                                
                                      
                                            </Form>
                                        </div></div>
                                </div>

                            </div>

                        </div>
                        <div className="col-md-6 ">
                            <div className="right-container mt-5">
                                
                                <img className="registration-img shadow " src={lotus} alt="" />
                            </div>
                        </div>
                    </div>

                )}

            </Formik>

        </>
    )
}



export default Address;