import React, { useState ,useEffect} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../../styles/Registration.css'
import update from '../../assets/images/update-image.jfif';
import {Link, useHistory } from 'react-router-dom';

import axios from 'axios';



export default function EditUser(props) {
    const [user, setUser] = useState({});
    
    const onInputChange = e => {
        //console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    
    useEffect(() => {
        const userId=localStorage.getItem('userId');
       
        axios.get(`/api/users/${userId}`)
            .then(res => {
                console.log(res.data.data)
                setUser(res.data.data);
                
            }).catch(e => {
                console.log(e);
            });
    },[])
    let history=useHistory();
    
    


    
    const onSubmit=async e=>{
        e.preventDefault();
            await  axios.put(`/api/users/`, user)
                .then(res => {
                    if (res.data.success) {
                        alert(res.data.message);
                        history.push('/producthome')
                    }

                }).catch(e => {
                    alert(e );
                })
                ;

        
    }

    return (
        <>

            <Formik >
                

                
            
               
                    <div className="row m-2">
                        <div className="col-md-6">
                            <div className="bootstrap-wrapper col-md-10">
                                <div className="left-container">
                                    <div className="container ">
                                        <div className="form-container">
                                            <div className="header">
                                                <h2 className=" header-text .display-4 " >Update Profile</h2>
                                                <small className="header-para">Edit you account details.</small><br />
                                            </div>
                                            <Form onSubmit={e=>onSubmit(e)}>
                                                
                                                <div className="form-group col-12">
                                                    {/* <span><FontAwesomeIcon icon="user"/></span> */}
                                                    <Field type="text" className="form-control" name="fname"  value={user.fname} placeholder="Enter First Name" onChange={e => onInputChange(e)} />
                                                    <ErrorMessage name="fname" component="div" className="error" />
                                                </div>
                                                <div className="form-group col-12 ">
                                                    <Field type="text" name="lname" className="form-control" value={user.lname} placeholder="Enter Last name" onChange={e => onInputChange(e)} />
                                                    <ErrorMessage name="lname" component="div" className="error" />
                                                </div>
                                                <div className="form-group col-12">
                                                    <Field type="email" name="email" className="form-control"  value={user.email} placeholder=" Email " onChange={e => onInputChange(e)}/>
                                                    <ErrorMessage name="email" component="div" className="error" />
                                                </div>
                                                <div className="form-group col-12">
                                                    <Field type="password" name="password" className="form-control"  value={user.password} placeholder="Password" onChange={e => onInputChange(e)}/>
                                                    <ErrorMessage name="password" component="div" className="error" />
                                                </div>
                                                

                                                <div className="form-group col-12">
                                                    <Field type="tel" name="phone" className="form-control" value={user.phone}  placeholder="phone" onChange={e => onInputChange(e)} />
                                                    <ErrorMessage name="phone" component="div" className="error" />
                                                </div>

                                                <div className="form-group col-12 ">
                                                    <button type="submit" className="btn btn-outline-success w-75 " >Update User</button>
                                                    <Link className="btn btn-outline-success  w-25" to="/producthome">Back </Link>
                                                </div>
                                                
                                                



                                            </Form>
                                        </div></div>
                                </div>

                            </div>

                        </div>
                        <div className="col-md-6 ">
                            <div className="right-container">
                                
                                <img className="registration-img " src={update} alt="" />
                            </div>
                        </div>
                    </div>

                

            </Formik>

        </>
    )
}


