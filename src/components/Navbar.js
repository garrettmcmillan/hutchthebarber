import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as rb from 'react-bootstrap';
import logo from './logo.png';
import HamburgerIcon from './HamburgerIcon';

export default class Navbar extends Component {
    render() {
        return (
            

            <rb.Navbar 
                className="navbar px-md-5"
                fixed="top"
                expand="lg"
            >
                <rb.Navbar.Brand 
                    className="navbar-logo nav-text d-none d-lg-block"
                    href="/">
                        <img
                            fluid="true"
                            src={logo}
                            width="300"
                            height="250"
                            className="d-inline-block align-top"
                            alt=""
                        />
                </rb.Navbar.Brand>
                <rb.Navbar.Brand
                    className="navbar-logo nav-text d-block d-lg-none"
                    href="/">
                    <span>
                        Zack
                        <br/>
                        Hutchinson:
                        <br/>
                        Barber 
                    </span>
                </rb.Navbar.Brand>
                <rb.Container className="justify-content-end">
                <rb.Navbar.Toggle 
                    className="nav-hamburger"
                    aria-controls="basic-navbar-nav"
                    onClick={this.setNavExpanded}
                >
                    <HamburgerIcon />
                </rb.Navbar.Toggle>
                </rb.Container>
                <rb.Navbar.Collapse 
                    className=" nav-text justify-content-end"
                    id="basic-navbar-nav"
                >
                    <rb.Nav className="mx-3">
                        <rb.Nav.Link 
                            as={Link}
                            to="/"
                            href="/"
                            className="nav-text nav-link mx-3 ">
                                home
                        </rb.Nav.Link>
                        <rb.Nav.Link 
                            as={Link}
                            to="/about" 
                            className="nav-text nav-link mx-3">
                                about
                            </rb.Nav.Link>
                        <rb.Nav.Link 
                            as={Link}  
                            to="/services" 
                            className="nav-text nav-link mx-3">
                                services
                        </rb.Nav.Link>
                    </rb.Nav>
                </rb.Navbar.Collapse>
                <rb.Button
                    target="_blank"
                    href="https://booksy.com/en-us/429169_zack-hutchinson_barber-shop_108476_winston?do=invite&_branch_match_id=783405538344311294"
                    className="book-button nav-text d-none d-lg-block" variant="outline-*" 
                    size="lg">
                        Book Now
                </rb.Button>
            </rb.Navbar>
        )
    }
}
