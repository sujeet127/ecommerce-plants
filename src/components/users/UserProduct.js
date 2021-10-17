import React, { createContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../layout/Navbar'
export const searchBarTerm=createContext();
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
    const [searchData, setSearchData] = useState('');
  
    const GetSearchData=(item)=>{
      console.warn("item",item);
      setSearchData(item);
      console.log(searchData);
  
    }

    return (
        <div>
            <searchBarTerm.Provider value={{getSearchData:GetSearchData}}>
                <div style={{display:'none'}}>
                <Navbar />
                </div>
            </searchBarTerm.Provider>
            <div className="container"  >
                <div className="row bg-light mb-2 mt-2">
                <input type="text" placeholder="Search..." onChange={e => {
              setSearchTerm(e.target.value)
              
            }} />
                </div>
                <div className="row">
                    <div className="col-3 bg-light">
                    <div className = "filters">
            <h3 className="ms-3 mt-2">FILTERS</h3>
            <div className="filter-cont">
                <div className="brands">
                    <h4>Categories</h4>
                    <div>
                    <input type="radio" value="Indoor"/>
                    <label for="Indoor">Indoor Plants</label>
                    </div>
                    <div>
                    <input type="radio" value="OutDoor"/>
                    <label for="OutDoor">OutDoor Plants</label>
                    </div>
                   
                </div>

                <div className="prices">
                    <h4>PRICES</h4>
                    <div>
                    <input type="Radio" value="-100"/>
                    <label for="-100">Rs.100 to Rs.500</label>
                    </div>
                    <div>
                    <input type="radio" value="-500"/>
                    <label for="-500">Rs. 500 to Rs. 1000</label>
                    </div>
                    <div>
                    <input type="radio" value="-1000"/>
                    <label for="-1000">Rs. 1000 to Rs. 2000</label>
                    </div>
                    <div>
                    <input type="radio" value="2000+"/>
                    <label for="2000+">greater than Rs. 2000</label>

                    </div>
                </div>
            
                <div className="colors">
                    <h4>COLORS</h4>
                    <div>  
                    <input type="checkbox" value="black"/>
                    {/* <span className="black">o</span>   */}
                    <label for="black">Black</label>
                    </div>
                    <div>
                    <input type="checkbox" value="navyblue"/>
                    <label for="navyblue">Navy Blue</label>
                    </div>
                    <div>
                    <input type="checkbox" value="olive"/>
                    <label for="olive">olive</label>
                    </div>
                    <div>
                    <input type="checkbox" value="grey"/>
                    <label for="grey">Grey</label>
                    </div>
                    <div>
                    <input type="checkbox" value="red"/>
                    <label for="red">Red</label>
                    </div>
                    <div>
                    <input type="checkbox" value="blue"/>
                    <label for="blue">Blue</label>
                    </div>
                </div>
            </div>

        </div>

        <div className="sort">
            <select>
                <option>Recommended</option>
                <option>Popularity</option>
                <option>Discount</option>
                <option>High to Low</option>
                <option>Low to High</option>
                <option>Customer rating</option>
            </select>
        </div>




                    </div>
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
                <div className="row bg-warning">Space for footer section</div>

            </div>
        </div>
    );
}

export default UserProduct;