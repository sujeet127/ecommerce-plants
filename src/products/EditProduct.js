import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
function EditProduct(props) {
    let history = useHistory();
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
        console.log("edit product data:", product);
    }
    const { product_id, product_name, model_year, price, discount, img } = product;
    const onInputChange = e => {
        //console.log(e.target.value);
        setProduct({ ...product, [e.target.name]: e.target.value });
    }
    useEffect(() => {
        loadProduct();
    }, [])

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`/api/products/`, product)
            .then(res => {
                if (res.data.success) {
                    alert(res.data.message);
                    history.push("/producthome");
                }
                else {
                    alert(res.data.message);
                }
            }).catch(err => {
                alert(err);
                console.log(err);
            });

    }


    return (
        <div>
            <div className="container " >
                <div className="row mt-5">
                    
                    <div className="col-md-6">

                        <img className="registration-img shadow" src={`http://localhost:3001/img/${img}`} alt="" />
                    </div>
                    <div className="col-md-5">
                    <div className=" text-center ">
                            <h1 className="display-1 text-center" style={{color:'green'}}>Edit Product</h1><hr />
                            <form onSubmit={e => onSubmit(e)}>

                                <div className="mb-3">
                                    <input type="text" className="form-control" id="product_name" placeholder="Enter Product Name"
                                        name="product_name" value={product_name} onChange={e => onInputChange(e)} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="model_year" placeholder="Enter model year"
                                        name="model_year" value={model_year} onChange={e => onInputChange(e)} />
                                </div>
                                <div className="mb-3">
                                    <input type="number" className="form-control" id="price" placeholder="Enter price Number"
                                        name="price" value={price} onChange={e => onInputChange(e)} />
                                </div>
                                <div className="mb-3">
                                    <input type="number" className="form-control" id="discount" placeholder="Enter discount"
                                        name="discount" value={discount} onChange={e => onInputChange(e)} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" accept="image/*" id="img" placeholder="Upload image"
                                        name="img" value={img} onChange={e => onInputChange(e)} />
                                </div>


                                <button type="submit" className="btn btn-warning">Update Product</button>
                                <Link className="btn btn-primary ms-2" to="/producthome">Back </Link>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}


export default EditProduct;