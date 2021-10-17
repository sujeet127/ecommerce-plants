import axios from 'axios';
import React, { useState, useEffect, useRef, createContext } from 'react';
import { Link, NavLink } from 'react-router-dom'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import ToolkitProvider, { Search} from 'react-bootstrap-table2-toolkit';

function Cart(props) {
    const [cart, setCart] = useState([]);
    const userid=localStorage.getItem("userId");
    useEffect(() => {

        loadProduct();
      }, []);
      const loadProduct = async () => {
        const result = await axios.get(`/api/cart/${userid}`);
         console.log(result);
        setCart(result.data.data);
    
      }
      const deleteCart = async id => {
    
        await axios.delete(`/api/cart/${id}`);
        window.location.reload();
        
    
    
      }
      const buttons = (cell, row) => {
        if (row.product_id) {
          return (
            
            <div>
              <table className="m-0"><tr>
                <td><Link className="btn btn-sm btn-outline-primary " to={`/products/view/${row.product_id}`}>View</Link></td>
                <td><Link className="btn btn-sm btn-outline-danger " onClick={() => deleteCart(row.cartid)}>Delete</Link></td>
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
  const { SearchBar } = Search;  
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
      if (props.user) {
        return <>
          <div>
            <div className="container">
              <h1 className="text-success mt-5">Shopping Cart:</h1>
              <div className="py-4">

    
                <ToolkitProvider keyField="id" 
                  bootstrap4
                  keyField="id"
                  columns={columns}
                  data={cart}
                  search
    
                  >{
                    props => (
                      <div>
                        
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
                
                
              </div>
            </div>
          </div>
          );
    
        </>
      } else
        return (
          <div className=" ">
    
    
            <h1 className="text-center">You Are not logged in..</h1> <br/>
            <Link className="btn btn-outline-success" to="/login">Login </Link>
            
    
    
          </div>
        );
    }

export default Cart;