import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Link,NavLink} from 'react-router-dom'
import Footer from './Footer';
import '../../styles/Home.css';


import carousel1 from '../../assets/images/carousel (1).jpg';
import carousel2 from '../../assets/images/carousel (2).jpg';
import carousel3 from '../../assets/images/carousel (3).jpg';
import carousel4 from '../../assets/images/carousel (4).jpg';
import carousel5 from '../../assets/images/carousel (2).webp';
import carousel6 from '../../assets/images/carousel5.jpg';
import houseshape1 from '../../assets/images/house-shape (1).jfif';
import houseshape2 from '../../assets/images/house-shape (2).jfif';
function Home(props) {
    return (
        <div>

            <div className="row">
            <Carousel >
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={carousel3}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Work Desk Plants</h3>
                        <p>Work With Nature</p>
                        <NavLink className="btn btn-outline-dark" exact to="/userproduct">Show Now</NavLink>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={carousel1}
                        alt="Second slide"
                    />
                    <Carousel.Caption className="text-dark ">
                        <h3>Plants Gonna Make
                            People Happy</h3>
                        <p>Grow your own garnish</p>
                        <NavLink className="btn btn-outline-dark" exact to="/userproduct">Show Now</NavLink>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel5}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Trending Plants</h3>
                        <p>This Year’s Trendiest Collection</p>
                        <NavLink className="btn btn-outline-dark" exact to="/userproduct">Show Now</NavLink>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel6}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Indoor Plants</h3>
                        <p>Live With Nature</p>
                        <NavLink className="btn btn-outline-dark" exact to="/userproduct">Show Now</NavLink>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel4}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Plant Bundles</h3>
                        <p>Bundles of Joy</p>
                        <NavLink className="btn btn-outline-dark" exact to="/userproduct">Show Now</NavLink>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
            </div>
            <div className="container m-0">
                <div className="row p-2 m-5" id="main-body">
                    <div className="col">
                        <Link><img src={houseshape1} alt="" id="first-img" /></Link>
                    </div>
                    <div className="col">
                        <Link><img src={houseshape2} alt="" /></Link>
                    </div>
                    <div className="col mt-5">
                        <p className="my-2 ps-3">New Collection 2021</p>
                        <h3 className="my-2">House Shape Plant</h3>
                        <p className="my-2 ps-3">Casual Multifunctional Sofabeds Head Elevation Comfortable Sofa At Daytime Transforms Into Changes To A Very Comfortable Bed At Night.</p>
                        <div className="ps-3 my-3"><NavLink className="btn btn-outline-success" exact to="/userproduct">Show Now</NavLink></div>
                    </div>
                </div>

            </div>
            <footer>
                    <Footer/>
                </footer>
            
        </div>
    );
}

export default Home;