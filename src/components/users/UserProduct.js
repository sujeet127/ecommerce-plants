import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function UserProduct(props) {
    const [products, setProduct] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {

        loadProduct();
    }, []);
    const loadProduct = async () => {
        const result = await axios.get("/api/products/");
        console.log(result);
        setProduct(result.data.data);

    }
    return (
        <div>
            <div className="container">
                <div className="row bg-light mb-2 mt-2">
                <input type="text" placeholder="Search..." onChange={e => {
              setSearchTerm(e.target.value)
              
            }} />
                </div>
                <div className="row">
                    <div className="col-3 bg-success">Hello</div>
                    <div className="col-9 m ">
                        <div className="products">

                            {products.filter((product) => {
                  if (searchTerm == "") {
                    return product;
                  } else if (product.product_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return product;
                  }

                }).map((e) =>
                                    <div>
                                        
                                        <Link to={`/userproductview/${e.product_id}`}><img src={`http://localhost:3001/img/${e.img}`} className="shadow"/></Link>
                                        <p>{e.product_name}</p>
                                        <b><span className="text-danger ms-2">&#8377; {e.price - e.discount}</span></b>
                                        <s><small className="mute" >&#8377; {e.price}</small></s>
                                        <p className="productname">Save:{e.discount} ({Math.round(e.discount * 100 / e.price)}%)</p>


                                    </div>)
                            }
                        </div>

                    </div>
                </div>
                <div className="row bg-warning">Footer</div>

            </div>
        </div>
    );
}

export default UserProduct;