import React,{Components} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import nursery2 from '../assets/nursery (2).jpg';
import * as Yup from 'yup';
import '../styles/Registration.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import carousel1 from '../assets/carousel1.jpg'
import carousel2 from '../assets/carousel2.jpg';
import carousel3 from '../assets/carousel3.jpg';
import carousel4 from '../assets/carousel4.jpg';
import carousel5 from '../assets/carousel5.jpg';
export function Login(){
    
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
                    <div className="row">
                        <div className="col-md-6">
                            <div className="bootstrap-wrapper col-md-10">
                                <div className="left-container">
                                <div className="container ">
                                    <div className="form-container">
                                        <div className="header">
                                            <h2 className=" header-text .display-4 " >Login into account</h2>
                                            <small className="header-para ">Use your credentials to access your account.</small><br/>
                                        </div>
                                        <Form >
                                            
                                            <div className="form-group col-12">
                                                <Field type="email" name="email" className="form-control" placeholder=" Email " />
                                                <ErrorMessage name="email" component="div" className="error" />
                                            </div>
                                            <div className="form-group col-12">
                                                <Field type="password" name="password" className="form-control" placeholder="Password" />
                                                <ErrorMessage name="password" component="div" className="error" />
                                            </div>
                                            <div className="checkbox">
                                            <label>
                                                <Field type="checkbox" name="checked" value="Three" />
                                                Remember me
                                                </label>
                                                <a href="/resetpassword"><span className="forget-password-txt text-success">Forget Password?</span></a>
                                                
                                            </div>
                                            

                                            <div className="form-group col-12">
                                                <button type="submit" className="registration-btn btn-success" disabled={isSubmitting}>Login</button>
                                            </div>
                                            <div className="text-rg">
                                                <small>or login with</small>
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
                                                <p className="login-link">Don't have an account?? <span><a href="/registration" className="txt">Register here</a></span></p>
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
                            <div className="img-div">
                                <img src={nursery2} />
                                
                            </div>
                            <div>
                                <img src={carousel2} />
                                
                            </div>
                            <div>
                                <img src={carousel3}/>
                                
                            </div>
                            <div>
                                <img src={carousel1}/>
                                
                            </div>
                            <div>
                                <img src={carousel5}/>
                                
                            </div>
                     </Carousel>
                            </div>
                        </div>
                    </div>

                )}

            </Formik>

        </>
    )
}


