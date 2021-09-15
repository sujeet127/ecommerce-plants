import React, { useState, useEffect } from 'react';
import { Link, useParams ,withRouter} from 'react-router-dom';
import axios from 'axios';
function UserProductView(props) {
    const { id } = useParams();
    console.log("params:", id);

    const [product, setProduct] = useState({
        product_id: "",
        product_name: "",
        model_year: "",
        price: "",
        discount: "",
        img: "",

    });
    useEffect(() => {
        loadProduct();
    }, [])
    const loadProduct = async e => {
        const result = await axios.get(`/api/products/${id}`);

        setProduct(result.data.data);
    }
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                
                    <div className="col-md-6">
                    <Link className="btn btn-dark  mt-5" to="/userproduct">Back </Link>
                        <div className=" text-center">
                            <h1 className="display-1 text-center">Product id:{product.product_id}</h1>
                            <hr />
                            <div>
                                <ul className="list-group ">
                                    <li className="list-group-item">Product Name:     {product.product_name}</li>
                                    <li className="list-group-item">Model year: {product.model_year}</li>
                                    <li className="list-group-item">Price:    {product.price}</li>
                                    <li className="list-group-item">Discount:    {product.discount}</li>
                                    

                                </ul>
                            </div>

                            
                            <Link className="btn btn-warning w-100 mt-5" to="/userproduct">Add to Cart </Link>
                            <Link className="btn btn-dark w-100 " to="/address"> Buy Now</Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                            
                        <img className="registration-img shadow" src={`http://localhost:3001/img/${product.img}`} alt="" />
                    </div>
                
                </div>

            </div>
        </div>
    );

}

export default UserProductView;