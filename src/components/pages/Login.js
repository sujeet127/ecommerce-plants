import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import nursery2 from '../../assets/img/nursery (2).jpeg';
import * as Yup from 'yup';
import '../../styles/Registration.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import carousel1 from '../../assets/img/carousel1.jpeg'
import carousel2 from '../../assets/img/carousel2.jpeg';
import carousel3 from '../../assets/img/carousel3.jpeg';
import carousel4 from '../../assets/img/carousel4.jpeg';
import carousel5 from '../../assets/img/carousel5.jpeg';
import { Link ,useHistory} from 'react-router-dom';
import axios from 'axios';
export function Login(){
    let history=useHistory();
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
                    // alert(JSON.stringify(values));
                    setSubmitting(false);

                    axios.post("/api/users/login",values)
                    .then(res=>{
                        if(res.data.userId)
                        {
                            localStorage.setItem('userId',res.data.userId);
                            localStorage.setItem("token",res.data.token);
                            history.push('/producthome');
                            window.location.reload();
                        }
                        else
                        {
                            alert(res.data.message);
                        }
                        

                    }).catch(e=>{
                        console.log(e)
                        alert(e);
                    })
                }}
            >
                {({ isSubmitting }) => (
                    <div className="row mt-2">
                        <div className="col-md-6">
                            <div className="bootstrap-wrapper col-md-10">
                                <div className="left-container">
                                <div className="container ">
                                    <div className="form-container">
                                        <div className="ms-2">
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
                                                <Link to="/resetpassword"><span className="forget-password-txt text-success">Forget Password?</span></Link>
                                                
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
                                                <p className="login-link">Don't have an account?? <span><Link to="/registration" className="txt">Register here</Link></span></p>
                                            </div>


                                            
                                        </Form>
                                    </div></div>
                                    </div>

                            </div>

                        </div>
                        <div className="col-md-6 my-auto">
                            <div className="right-container">
                            {/* <img className="img-fluid w-100" src={nursery2} alt="" /> */}
                            <Carousel interval={1000}>
                            <div className="img-div">
                                <img src={nursery2} alt=""  />
                                
                            </div>
                            <div>
                                <img src={carousel2} alt=""  />
                                
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
    )
}


