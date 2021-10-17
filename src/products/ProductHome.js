import axios from 'axios';
import React, { useState, useEffect, useRef, createContext } from 'react';
import $ from 'jquery';
import '../../node_modules/bootstrap/js/dist/dropdown'
import { Link, NavLink, withRouter } from 'react-router-dom'

import ProductNavbar from './ProductNavbar';
import { Login } from '../components/pages/Login';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import UserProduct from '../components/users/UserProduct';

export const searchBarTerm=createContext();
 function ProductHome(props) {
  const [products, setProduct] = useState([]);
  
  
  const [searchData, setSearchData] = useState('');
  
  const GetSearchData=(item)=>{
    console.warn("item",item);
    setSearchData(item);
    console.log(searchData);

  }
  



  useEffect(() => {

    loadProduct();
  }, []);
  const loadProduct = async () => {
    const result = await axios.get("/api/products/");
    // console.log(result);
    setProduct(result.data.data);

  }
  const deleteProduct = async id => {

    await axios.delete(`/api/products/${id}`);
    //loadProduct(); //not working properly don't know why
    window.location.reload();
    //setDummy({data:Math.random()})


  }
  const buttons = (cell, row) => {
    if (row.product_id) {
      return (
        
        <div>
          <table className="m-0"><tr>
            <td><Link className="btn btn-sm btn-outline-primary " to={`/products/view/${row.product_id}`}>View</Link></td>
            <td><Link className="btn btn-sm btn-outline-dark" to={`/products/edit/${row.product_id}`}>Edit</Link></td>
            <td><Link className="btn btn-sm btn-outline-danger " onClick={() => deleteProduct(row.product_id)}>Delete</Link></td>
            </tr></table>
        </div>
      )

    }
  }
  const images=(cell,row)=>{
    if (row.product_id) 
    return (
      <div>
        <img src={`http://localhost:3001/img/${row.img}`} alt="" />
      </div>
    )
  }
  const columns =
    [
      { dataField: "product_id", text: "id" },
      { dataField: "product_name", text: "Product Name", sort: true, filter: textFilter() },
      { dataField: "model_year", text: "Model year", sort: true },
      { dataField: "price", text: "price", sort: true },
      { dataField: "discount", text: "discount", sort: true },
      {  text: "img" ,formatter:images },
      { text: "Action",formatter:buttons }
    ];
  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 10,
    lastPageText: "Last",
    firstPageText: "First",
    nextPageText: '>',
    prePageText: '<',
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) { console.log("page", page); console.log("sizePerPage", sizePerPage); },
    onSizePerPageChange: function (page, sizePerPage) { console.log("page", page); console.log("sizePerPage", sizePerPage); },
  });
  
  const { ExportCSVButton } = CSVExport;
  const MyExportCSV = (props) => {
    const handleClick = () => {
      props.onExport();
    }
    return <>
      <div className="mb-2">
      <Link  className=" btn btn-outline-success me-2" to="/addproduct">
              Add Product
            </Link>
      <button className="btn btn-success" onClick={handleClick}>Export to CSV</button>
      </div>

    </>
  }
  const { SearchBar } = Search;
  



  if (props.user) {
    return <>
      <div >
        <searchBarTerm.Provider value={{getSearchData:GetSearchData}}>
        <ProductNavbar user={props.user} />
        </searchBarTerm.Provider>
        









      </div>

      <div>
        <div className="container">
          <div className="py-4">

            <ToolkitProvider keyField="id" 
              bootstrap4
              keyField="id"
              columns={columns}
              data={products}
              search={ { defaultSearch: searchData } }

              exportCSV>{
                props => (
                  <div>
                    <MyExportCSV {...props.csvProps} />
                    <SearchBar { ...props.searchProps } />
                    
                    <hr />
                    <BootstrapTable hover 
                      pagination={pagination}
                      filter={filterFactory()}
                      wrapperClasses="table-responsive" 
                      {...props.baseProps}
                    />
                    
                  </div>
                )

              }

            </ToolkitProvider>
            
            {/* <Link onClick={handleShow} className=" btn btn-outline-success ms-4" to="/addproduct">
              Add Product
            </Link>


            <input type="text" placeholder="Search..." onChange={e => {
              setSearchTerm(e.target.value)
              console.log(searchTerm);
            }} />

            <table class="table border shadow table-scrollable">
              <thead class="table-dark">
                <tr>
                  <td>#</td>
                  <td>Product_Name</td>
                  <td>Model_year</td>
                  <td>Price</td>
                  <td>discount</td>
                  <td>Img</td>
                  <td>Action</td>

                </tr>

              </thead>
              <tbody>
                {products.filter((product) => {
                  if (searchTerm == "") {
                    return product;
                  } else if (product.product_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return product;
                  }

                }).map((product, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>

                    <td>{product.product_name}</td>
                    <td>{product.model_year}</td>
                    <td>{product.price}</td>
                    <td>{product.discount}</td>
                    <td><img src={`http://localhost:3001/img/${product.img}`} alt="" /></td>
                    <td>
                      <Link className="btn btn-outline-primary " to={`/products/view/${product.product_id}`}>View</Link>
                      <Link className="btn btn-outline-dark m-2" to={`/products/edit/${product.product_id}`}>Edit</Link>
                      <Link className="btn btn-outline-danger " onClick={() => deleteProduct(product.product_id)}>Delete</Link>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table> */}
          </div>
        </div>
      </div>
      );

    </>
  } else
    return (
      <div className="">


        {/* <h1>You Are not logged in..</h1> */}
        {/* <Link className="btn btn-outline-success" to="/login">Login</Link> */}
        
        <UserProduct/>


      </div>
    );
}

export default withRouter(ProductHome);