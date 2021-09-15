import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../../styles/Registration.css'
import nursery3 from '../../assets/img/nursery3.jpeg';
import { Link, Navlink,useHistory } from 'react-router-dom';

import axios from 'axios';

import * as Yup from 'yup';


export function Registration() {
    const [message, setMessage] = useState([]);
    let history=useHistory();
    const phoneRegExp = /^([+]\d{2})?\d{10}$/
    

    const validate = Yup.object({
        fname: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        lname: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 charaters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password must match')
            .required('Confirm password is required'),
        phone: Yup.string()
            .required('Phone Number required')

            .matches(phoneRegExp, 'Phone number is not valid' ) 
            
    })

    return (
        <>

            <Formik
                initialValues={{ fname: '', lname: '', email: '', password: '', phone: '' }}
                validationSchema={validate}

                onSubmit={(values, { setSubmitting }) => {
                    window.confirm(JSON.stringify(values))
                    {
                        setSubmitting(false);

                        axios.post("/api/users/", values)
                            .then(res => {
                                if (res.data.success) {
                                    alert("User Registration Completed Successfully");
                                    history.push('/login');
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
                                                <h2 className=" header-text " >Create an account</h2>
                                                <small className="header-para ">Setup a new account in a minute.</small><br />
                                            </div>
                                            <Form >
                                                <div className="form-group col-12">
                                                    {/* <span><FontAwesomeIcon icon="user"/></span> */}
                                                    <Field type="text" className="form-control" name="fname" placeholder="Enter First Name" />
                                                    <ErrorMessage name="fname" component="div" className="error" />
                                                </div>
                                                <div className="form-group col-12 ">
                                                    <Field type="text" name="lname" className="form-control" placeholder="Enter Last name" />
                                                    <ErrorMessage name="lname" component="div" className="error" />
                                                </div>
                                                <div className="form-group col-12">
                                                    <Field type="email" name="email" className="form-control" placeholder=" Email " />
                                                    <ErrorMessage name="email" component="div" className="error" />
                                                </div>
                                                <div className="form-group col-12">
                                                    <Field type="password" name="password" className="form-control" placeholder="Password" />
                                                    <ErrorMessage name="password" component="div" className="error" />
                                                </div>
                                                <div className="form-group col-12">
                                                    <Field type="password" name="confirmPassword" className="form-control" placeholder="Confirm Password" />
                                                    <ErrorMessage name="confirmPassword" component="div" className="error" />
                                                </div>

                                                <div className="form-group col-12">
                                                    <Field type="tel" name="phone" className="form-control" placeholder="phone" />
                                                    <ErrorMessage name="phone" component="div" className="error" />
                                                </div>

                                                <div className="form-group col-12">
                                                    <button type="submit" className="registration-btn btn-success" disabled={isSubmitting}>Register</button>
                                                </div>
                                                <div className="text-rg">
                                                    <small>or register with</small>
                                                </div>
                                                <div className="form-group col-12">
                                                    <table className="table table-hover">
                                                        <thead>
                                                            <tr className="footer-link">
                                                                <td>Facebook</td>
                                                                <td>Google</td>
                                                                <td>Twitter</td>
                                                            </tr>
                                                        </thead>
                                                    </table>
                                                </div>
                                                <div className="form-group col-12">
                                                    <p className="login-link">Already have an account? <span><Link to="/login" className="txt">Login here</Link></span></p>
                                                </div>



                                            </Form>
                                        </div></div>
                                </div>

                            </div>

                        </div>
                        <div className="col-md-6 ">
                            <div className="right-container">
                                <h2 className="text-center pt-2">Welcome to florist</h2>
                                <img className="registration-img " src={nursery3} alt="" />
                            </div>
                        </div>
                    </div>

                )}

            </Formik>

        </>
    )
}


