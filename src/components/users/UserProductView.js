import React, { useState, useEffect, createContext } from 'react';
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
        userId:""
        

    });
    useEffect(() => {
        loadProduct();
    }, [])
    const loadProduct = async e => {
        const result = await axios.get(`/api/products/${id}`);

        setProduct(result.data.data);
        
    }
    const addToCart=async e=>{
        e.preventDefault();
        if(localStorage.getItem("userId"))
        {
            const userId=localStorage.getItem("userId");

        
        let data = {
            'product_id':product.product_id,
            'product_name':product.product_name,
            'model_year': product.model_year,
            'price': product.price,
            'discount': product.discount,
            'img': product.img,
            'userid':userId,
        }
        console.log(data);

        axios.post("/api/cart/",data )
                            .then(res => {
                                if (res.data.success) {
                                    alert("Product Added to cart Successfully");
                                    
                                }

                            }).catch(e => {
                                alert(e );
                            });
        }
        else {
            
            alert(`
             You are not logged-in yet \n
             You need to logged-in first to add in cart.
            `);

            
            
     
        }
                            
        
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

                            
                            <button className="btn btn-warning w-100 mt-5" onClick={addToCart}>Add to Cart </button>
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