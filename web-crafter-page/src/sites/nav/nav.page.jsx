import React, {Fragment} from 'react';
import './nav.style.css';

const Navigation = () => {
    return(
        <Fragment>
            <header id="site-header" className="header style-2">
            <img className="img-top-page" src="../../images/img-top-slider.png" alt=""/>
            <div id="site-header-inner" className="main-header header-style-2 style-2">
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-auto">
                            <div className="main-header-logo" id="site-logo">
                                <a href="index.html">
                                    <img src="images/logo.png" alt="Hamela" width="121" height="40" data-retina="images/logo@2x.png" data-width="121" data-height="40" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-3">
                            <div className="mobile-button">
                                <span></span>
                            </div>
                            <div className="wrap-inner">
                                <nav id="main-nav" className="main-nav">
                                    <ul id="menu-primary-menu" className="menu">
                                        <li className="menu-item menu-item-has-children">
                                            <a className="menu-main" href="index.html">Home</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item current-item">
                                                    <a href="index.html">Home 1</a>
                                                </li>
                                                <li className="menu-item"><a href="index-v2.html">Home 2</a></li>
                                                <li className="menu-item"><a href="index-v3.html">Home 3</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-has-children">
                                            <a className="menu-main" href="about.html">About</a>
                                        </li>
                                        <li className="menu-item menu-item-has-children">
                                            <a className="menu-main" href="projects.html">Projects</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item current-item">
                                                    <a href="projects.html">Projects</a>
                                                </li>
                                                <li className="menu-item"><a href="projects-details.html">Projects Details</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-has-children">
                                            <a className="menu-main" href="blog.html">Blog</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item current-item">
                                                    <a href="blog.html">Blog Grid</a>
                                                </li>
                                                <li className="menu-item"><a href="blog-archive.html">Blog Archive</a></li>
                                                <li className="menu-item"><a href="blog-single.html">Blog Single</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-has-children"><a className="menu-main" href="contact.html">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                            
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="main-header-contact">
                                <div className="text-phone">
                                    <p>Phone Services</p>
                                    <span>555 666 999 00</span>
                                </div>
                                <a href="#" className="call"><img src="images/icon/phone-call.png" alt=""/></a>
                            </div>
                        </div>
                    </div>
                    <hr className="divider-header"/>
                </div>
            </div>
            </header>
        </Fragment>
    )
} 

export default Navigation;