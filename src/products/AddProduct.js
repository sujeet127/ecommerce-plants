import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

function AddProduct(props) {
    let history = useHistory();
    const [file, setFile] = useState({
        img: null
    });
    const [image, setImage] = useState({
        image: 'https://media.istockphoto.com/photos/in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female-picture-id1181366400?k=20&m=1181366400&s=612x612&w=0&h=p-iaAHKhxsF6Wqrs7QjbwjOYAFBrJYhxlLLXEX1wsGs='
    });
    const [product, setProduct] = useState({

        product_name: "",
        model_year: "",
        price: "",
        discount: "",
        img: '',
    });

    const { product_name, model_year, price, discount, img } = product;
    const onInputChange = e => {

        const el = e.target;
        console.log(e.target.value);
        setProduct({ ...product, [el.name]: el.type === "file" ? el.files[0].name : el.value });



    }


    const imageHandler = e => {
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setImage({
                    image: reader.result.toString('base64')
                })
                // console.log(reader.result);
            }
        }
        reader.readAsDataURL(e.target.files[0]);


    }
    const fileSelectedHandler = (e) => {
        console.log(e.target.files[0].toString('base64'));

        let file = e.target.files[0];
        setProduct({ img: file });
        console.log("ProductImage:", product.img);
        console.log("myimageFile:", file);

    }
    const onSubmit = async e => {
        e.preventDefault();
        console.log("Product data", product);
        const data = new FormData();
        data.append('img', file);
        data.append('product_name', product.product_name);
        data.append('model_year', product.model_year);
        data.append('price', product.price);
        data.append('discount', product.discount);


        await axios.post("/api/products", data, {
            onUploadProgress: progressEvent => {
                console.log("Upload progress:" + Math.round(progressEvent.loaded / progressEvent.total * 100) + "%")
            }
        })
            .then(res => {
                if (res.data.success) {
                    alert(res.data.message);

                    history.push('/producthome');
                }
                else {
                    alert(res.data.message);
                }
            }).catch(err => {
                console.log(err);
                alert(err);
            })

    }
    return (
        <div>
            <div className="container " >
                <div className="row mt-5">

                    <div className="col-md-6">
                    <Link className="btn btn-dark shadow ms-2 w-25" to="/producthome">Back </Link>
                        <div className="  text-center  " >
                            <h1 className="display-1 text-center mt-5 ">Add Product</h1>

                            <form onSubmit={e => onSubmit(e)}  >

                                <div className="mb-3">
                                    <input type="text" className="form-control" id="product_name" placeholder="Enter Product Name"
                                        name="product_name" value={product_name} onChange={e => onInputChange(e)} required />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="model_year" placeholder="Enter model_year"
                                        name="model_year" value={model_year} onChange={e => onInputChange(e)} required />
                                </div>
                                <div className="mb-3">
                                    <input type="number" className="form-control" id="price" placeholder="Enter price Number"
                                        name="price" value={price} onChange={e => onInputChange(e)} required />
                                </div>
                                <div className="mb-3">
                                    <input type="number" className="form-control" id="discount" placeholder="Enter discount"
                                        name="discount" value={discount} onChange={e => onInputChange(e)} required />
                                </div>
                                <div className="mb-3">
                                    <input type="file" className="form-control" id="img" placeholder="upload image" accept="image/*" required
                                        name="img" onChange={e => {
                                            const file = e.target.files[0];
                                            setFile(file);
                                            imageHandler(e);
                                        }} />

                                </div>

                                <div className="mb-3">
                                    <button type="submit" className="btn btn-warning shadow w-100">Submit</button>
                                    
                                </div>

                            </form>
                        </div>
                    </div>
                    <div className="  col-md-6">
                        <img className="registration-img shadow" src={image.image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;