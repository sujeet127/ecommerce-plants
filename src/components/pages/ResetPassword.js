import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';
import '../../styles/Registration.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import carousel1 from '../../assets/img/carousel1.jpeg'
import carousel2 from '../../assets/img/carousel2.jpeg';
import carousel3 from '../../assets/img/carousel3.jpeg';
import carousel5 from '../../assets/img/carousel5.jpeg';

function ResetPassword() {

    const validate = Yup.object({
        
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 charaters')
            .required('Password is required'),
        
    })

    
        return (
            <>

            <Formik
                initialValues={{  email: '', password: ''}}
                validationSchema={validate}
                
                onSubmit={(values, { setSubmitting }) => {
                    alert(JSON.stringify(values));
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <div className="row mt-2">
                        <div className="col-md-6">
                            <div className="bootstrap-wrapper col-md-10">
                                <div className="left-container">
                                <div className="container ">
                                    <div className="form-container">
                                        <div className="ms-2 mt-5">
                                            <h2 className=" header-text .display-4 " >Reset Your password</h2>
                                            <small className="header-para ">Please enter your email address and we will <br/>send you a password password link.</small><br/>
                                        </div>
                                        <Form >
                                            
                                            <div className="form-group col-12">
                                                <Field type="email" name="email" className="form-control" placeholder=" Email " />
                                                <ErrorMessage name="email" component="div" className="error" />
                                            </div>
                                            
                                            
                                            <div className="form-group col-12">
                                                <button type="submit" className="registration-btn btn-success" disabled={isSubmitting}>Send Reset Link</button>
                                            </div>
                                            
                                            
                                            


                                            
                                        </Form>
                                    </div></div>
                                    </div>

                            </div>

                        </div>
                        <div className="col-md-6 my-auto">
                            <div className="right-container">
                            {/* <img className="img-fluid w-100" src={nursery2} alt="" /> */}
                            <Carousel >
                            {/* <div className="img-div">
                                <img src={carousel4} />
                                
                            </div> */}
                            <div>
                                <img src={carousel2} alt="" />
                                
                            </div>
                            <div>
                                <img src={carousel3} alt="" />
                                
                            </div>
                            <div>
                                <img src={carousel1} alt="" />
                                
                            </div>
                            <div>
                                <img src={carousel5} alt="" />
                                
                            </div>
                     </Carousel>
                            </div>
                        </div>
                    </div>

                )}

            </Formik>

        </>
        );
    }


export default ResetPassword;