import React, { useState, useEffect } from 'react';
import { Link, useParams ,withRouter} from 'react-router-dom';
import axios from 'axios';
function ViewProduct(props) {
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
    const back=()=>{
        window.history.back();
    }
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className=" text-center">
                            <h1 className="display-1 text-center">Product id:{product.product_id}</h1>
                            <hr />
                            <div>
                                <ul className="list-group ">
                                    <li className="list-group-item">Product Name:     {product.product_name}</li>
                                    <li className="list-group-item">Model year: {product.model_year}</li>
                                    <li className="list-group-item">Price:    {product.price}</li>
                                    <li className="list-group-item">Discount:    {product.discount}</li>
                                    <li className="list-group-item">Img:    {product.img}</li>

                                </ul>
                            </div>

                            <button className="btn btn-dark w-100 mt-5" onClick={back}>Back </button>
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

export default  withRouter(ViewProduct);


