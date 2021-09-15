import React, { useState } from 'react';
import ModalDialog from 'react-bootstrap/ModalDialog'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table'
import {Link} from 'react-router-dom'

function ViewUser(props) {
    

    
    return (
        <div>
            <div className="container mt-5">
                <Link className="btn btn-primary ms-3" to="producthome">Back to Home</Link>
                <Table striped bordered hover variant="dark" responsive className="mt-5 col-8">
                    <thead><tr><th>UserId</th><th>{props.user.id}</th></tr></thead>
                    <tbody>
                    <tr>
                        <td>First Name </td> <td>{props.user.fname}</td>
                    </tr>
                    <tr>
                        <td>Last Name </td><td>{props.user.lname}</td>
                    </tr>
                    <tr>
                        <td>Email </td><td>{props.user.email}</td>
                    </tr>
                    <tr><td>Phone Number</td><td>{props.user.phone}</td>
                    </tr>
                    <tr><td>Password</td><td>{props.user.password}</td></tr>
                    </tbody>

                </Table>
            </div>

        </div>
    );
}

export default ViewUser;