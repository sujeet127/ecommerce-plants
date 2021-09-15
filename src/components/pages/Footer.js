import React from 'react';
import '../../styles/Home.css';
import carousel1 from '../../assets/images/carousel (1).webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import refund from '../../assets/images/refund.png';
import plantholding from '../../assets/images/plant-holding.png';
import shipping from '../../assets/images/shipping.png';
import expert from '../../assets/images/expert.png';
import footerImage from '../../assets/images/footer-image.jfif'

import instagram from '../../assets/images/instagram.png';
import facebook from '../../assets/images/facebook.png';
import youtube from '../../assets/images/youtube.png';
import twitter from '../../assets/images/twitter.png';
import snapchat from '../../assets/images/snapchat.png';


function Footer(props) {
    return (
        <div>

            <div className="bootstrap-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <img src={carousel1} className="d-block w-100 p-0" alt="" />
                    </div>
                    <div className="box-container-footer">
                        <div className="container">
                            <div className="text-center  ">
                                <h1  className="mt-5">Grown With Love, Delivered With Hope!</h1>
                            </div>
                            <div className="container">
                                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 text-center mt-5 ">
                                    <div className="col">
                                        {/* <FontAwesomeIcon icon="shipping-fast" size="6px"/> */}
                                        <img src={shipping} alt="" />
                                        <h3>Packaging/shipping</h3>
                                        <p>Sturdy and smart for the plant's safe journey</p>

                                    </div>
                                    <div className="col">
                                        {/* <FontAwesomeIcon icon="chalkboard-teacher" size="6px"/> */}
                                        <img src={expert} alt="" />
                                        <h3>Expert guidance</h3>
                                        <p>Hand holding you through the plant world</p>

                                    </div>
                                    <div className="col">
                                        {/* <FontAwesomeIcon icon="hand-holding-water" size="6px"/> */}
                                        <img src={plantholding} alt="" />

                                        <h3>Curated Look</h3>
                                        <p>Curated plants to make every corner insta worthy</p>
                                    </div>
                                    <div className="col">
                                        {/* <FontAwesomeIcon icon="hand-holding-water" size="6px"/> */}
                                        <img src={refund} alt="" />
                                        <h3>Replace &#38; Refund</h3>
                                        <p>Not happy? We have your back.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="container-margin">
                    <div className="box-bottom-container">
                        <div className="container">
                            <h3 className="text-center mt-5" id="footer-header">SIGN UP TO NEWSLETTER</h3>
                            <p className="text-center">Make Sure That You Never Miss Our Interesting News And Exclusive Promotion. No Spam, Ever!</p>
                            <form className="d-flex mx-5">
                                <input id="subscribe" className="form-control me-2 " type="email" placeholder="Enter Your email here" aria-label="Search" />
                                <button className="btn btn-outline-dark" type="submit">SUBSCRIBE</button>
                            </form>

                            <div className="row mt-5 p-2">
                                <div className="col">
                                    <h3>CONTACT US</h3>
                                    <ul type="none" className="p-3" >
                                        <li className="form-group mt-2">
                                            <FontAwesomeIcon icon="home" style={{ color: 'green', width: '20px', height: '20px' }} />
                                            <span className="ms-2 px-2">Hazaribagh, Jharkhand-825301</span>
                                        </li>
                                        <li className="form-group mt-2">
                                            <FontAwesomeIcon icon="phone" style={{ color: 'green', width: '20px', height: '20px' }} />
                                            <span className="ms-2 px-2">+911234567890</span>
                                        </li>
                                        <li className="form-group mt-2">
                                            <FontAwesomeIcon icon="envelope" style={{ color: 'green', width: '20px', height: '20px' }} />
                                            <span className="ms-2 px-2">website@gmail.com</span>
                                        </li>
                                    </ul>



                                </div>
                                <div className="col">
                                    <h3>INFORMATION</h3>
                                    <ul type="none" className="p-3">
                                        <li>About</li>
                                        <li>Delivery Infomations</li>
                                        <li>Privacy Policy</li>
                                        <li>Custom Service</li>
                                        <li>Terms & Condition</li>
                                        <li>Contact Us</li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <h3>CATEGORIES</h3>
                                    <ul type="none" className="p-3">
                                        <li>Flowering Plants</li>
                                        <li>Plant Seed</li>
                                        <li>Luck Plants</li>
                                        <li>Raisin Pot</li>
                                        <li>Live Plant</li>
                                        <li>Outdoor Plants</li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <img id="footer-image" src={footerImage} alt="" />
                                </div>

                            </div><hr />
                            <div>
                                <p className="text-center mt-2">2021 @ All Rights Reserved Powered By Demo.Com</p>
                                <div id="socialmedia"className="row ms-5  text-center">
                                    <div className="col"><a href="https://www.instagram.com/"><img src={instagram} alt="" /></a></div>
                                    <div className="col"><a href="https://www.facebook.com/"><img src={facebook} alt="" /></a></div>
                                    <div className="col"><a href="https://www.youtube.com/"><img src={youtube} alt="" /></a></div>
                                    <div className="col"><a href="https://www.twitter.com/"><img src={twitter} alt="" /></a></div>
                                    <div className="col"><a href="https://www.snapchat.com/"><img src={snapchat} alt="" /></a></div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
}

export default Footer;