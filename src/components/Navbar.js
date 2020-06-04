import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as rb from 'react-bootstrap';


export default class Navbar extends Component {
    render() {
        return (
            <rb.Navbar className="testing navbar mx-md-5" expand="lg">
                <rb.Navbar.Brand className="testing navbar-logo nav-text" href="#">
                        Zack <br/>Hutchinson: <br/> Barber
                </rb.Navbar.Brand>
                <rb.Navbar.Toggle className="nav-hamburger" aria-controls="basic-navbar-nav">
                <svg 
                className="bi bi-chevron-double-down"
                width="2em"
                height="2em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
                </rb.Navbar.Toggle>
                <rb.Navbar.Collapse className="testing nav-text justify-content-end" id="basic-navbar-nav">
                    <rb.Nav className="testing mx-3">
                        <rb.Nav.Link as={Link}  to="/"  className="testing nav-text nav-link mx-3">home</rb.Nav.Link>
                        <rb.Nav.Link as={Link}  to="/about" className="testing nav-text nav-link mx-3">about</rb.Nav.Link>
                        <rb.Nav.Link as={Link}  to="/services" className="testing nav-text nav-link mx-3">services</rb.Nav.Link>
                    </rb.Nav>
                    
                </rb.Navbar.Collapse>
                <rb.Button target="_blank" href="https://booksy.com/en-us/429169_zack-hutchinson_barber-shop_108476_winston?do=invite&_branch_match_id=783405538344311294" className="book-button nav-text d-none d-lg-block" variant="outline-*" size="lg">Book Now</rb.Button>
            </rb.Navbar>
        )
    }
}
