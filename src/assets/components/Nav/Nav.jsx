import React from 'react';
import './Nav.css';
import Logo from "../../images/logo.svg"
import { Link, useLocation } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";

const Nav = () => {

    const location = useLocation();

    return (
        <div>
            <div className="navbar" id='nav'>
                <img src={Logo} className='logo d-block' alt="" />
                <nav>
                    <div className="container h-100">
                        <ul>
                            <li>
                                <Link to="/" className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/destination" className={`navbar-link ${location.pathname === '/destination' ? 'active' : ''}`}>
                                    Destination
                                </Link>
                            </li>
                            <li>
                                <Link to="/crew" className={`navbar-link ${location.pathname === '/crew' ? 'active' : ''}`}>
                                    Crew
                                </Link>
                            </li>
                            <li>
                                <Link to="/technologies" className={`navbar-link ${location.pathname === '/technologies' ? 'active' : ''}`}>
                                    Technologies
                                </Link>
                            </li>
                        </ul>

                    </div>
                </nav>
                <button className='offcanvas-button'
                type="button" 
                data-bs-toggle="offcanvas" 
                data-bs-target="#offcanvasRight" 
                aria-controls="offcanvasRight">
                    <FaBars className='offcanvas-bar'/>
                </button>
                <div className="offcanvas offcanvas-end" 
                tabIndex="-1" id="offcanvasRight" 
                aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul>
                            <li>
                                <Link to="/" className={`navbar-link ${location.pathname === '/' ? 'active-sidebar-link' : ''}`}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/destination" className={`navbar-link ${location.pathname === '/destination' ? 'active-sidebar-link' : ''}`}>
                                    Destination
                                </Link>
                            </li>
                            <li>
                                <Link to="/crew" className={`navbar-link ${location.pathname === '/crew' ? 'active-sidebar-link' : ''}`}>
                                    Crew
                                </Link>
                            </li>
                            <li>
                                <Link to="/technologies" className={`navbar-link ${location.pathname === '/technologies' ? 'active-sidebar-link' : ''}`}>
                                    Technologies
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;