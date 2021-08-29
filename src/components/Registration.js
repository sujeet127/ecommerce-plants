import React, { Components } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../styles/Registration.css';
import nursery3 from '../assets/nursery3.jpg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import FontAwesome from 'react-fontawesome'

import * as Yup from 'yup';


export function Registration() {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const validate = Yup.object({
        firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        lastName: Yup.string()
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
        phoneNumber: Yup.string()
            .required('Phone Number required')

            .matches(phoneRegExp, 'Phone number is not valid'),
    })

    return (
        <>

            <Formik
                initialValues={{ fname: '', lname: '', email: '', password: '', phoneNumber: '' }}
                validationSchema={validate}
                //     validate={values=>{
                //         const errors={};
                //         if(!values.firstName)
                //         {
                //             errors.firstName="First Name Required";
                //         }
                //         if(!values.lastName)
                //         {
                //             errors.lastName="Last Name Required";
                //         }
                //         if(!values.email)
                //         {
                //             errors.email="Email is Required";
                //         }else if (
                //             !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                //           ) {
                //             errors.email = 'Invalid email address';
                //           }
                //         if(!values.password)
                //         {
                //             errors.password="Password is Required";
                //         }
                //         if(!values.password)
                //         {
                //             errors.password="Password is Required";
                //         }
                //         if(!values.phoneNumber)
                //         {
                //             errors.phoneNumber="phoneNumber is Required";
                //         }

                //         return errors;
                //     }
                // }
                onSubmit={(values, { setSubmitting }) => {
                    alert(JSON.stringify(values));
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <div className="row">
                        <div className="col-md-6">
                            <div className="bootstrap-wrapper col-md-10">
                                <div className="left-container">
                                <div className="container ">
                                    <div className="form-container">
                                        <div className="header">
                                            <h2 className=" header-text .display-4 " >Create an account</h2>
                                            <small className="header-para">Setup a new account in a minute.</small><br/>
                                        </div>
                                        <Form >
                                            <div className="form-group col-12">
                                               
                                                <Field type="text" className="form-control" name="firstName" placeholder="Enter First Name" />
                                                <ErrorMessage name="firstName" component="div" className="error" />
                                            </div>
                                            <div className="form-group col-12 ">
                                                <Field type="text" name="lastName" className="form-control" placeholder="Enter Last name" />
                                                <ErrorMessage name="lastName" component="div" className="error" />
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
                                                <Field type="tel" name="phoneNumber" className="form-control" placeholder="PhoneNumber" />
                                                <ErrorMessage name="phoneNumber" component="div" className="error" />
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
                                                <p className="login-link">Already have an account? <span><a href="/login" className="txt">Login here</a></span></p>
                                            </div>


                                            
                                        </Form>
                                    </div></div>
                                    </div>

                            </div>

                        </div>
                        <div className="col-md-6 my-auto">
                            <div className="right-container">
                                <h2 className="text-center">Welcome to florist</h2>
                            <img className="img-fluid w-100" src={nursery3} alt="" />
                            </div>
                        </div>
                    </div>

                )}

            </Formik>

        </>
    )
}


