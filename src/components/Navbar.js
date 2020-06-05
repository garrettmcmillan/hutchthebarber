import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as rb from 'react-bootstrap';
import HamburgerIcon from './HamburgerIcon';

export default class Navbar extends Component {
    render() {
        return (
            <rb.Navbar className="navbar px-md-5" expand="lg">
                <rb.Navbar.Brand className=" navbar-logo nav-text" href="#">
                        Zack <br/>Hutchinson: <br/> Barber
                </rb.Navbar.Brand>
                <rb.Container className="justify-content-end">
                <rb.Navbar.Toggle className="nav-hamburger" aria-controls="basic-navbar-nav">
                    <HamburgerIcon />
                </rb.Navbar.Toggle>
                </rb.Container>
                <rb.Navbar.Collapse className=" nav-text justify-content-end" id="basic-navbar-nav">
                    <rb.Nav className=" mx-3">
                        <rb.Nav.Link as={Link}  to="/"  className=" nav-text nav-link mx-3">home</rb.Nav.Link>
                        <rb.Nav.Link as={Link}  to="/about" className=" nav-text nav-link mx-3">about</rb.Nav.Link>
                        <rb.Nav.Link as={Link}  to="/services" className=" nav-text nav-link mx-3">services</rb.Nav.Link>
                    </rb.Nav>
                </rb.Navbar.Collapse>
                <rb.Button target="_blank" href="https://booksy.com/en-us/429169_zack-hutchinson_barber-shop_108476_winston?do=invite&_branch_match_id=783405538344311294" className="book-button nav-text d-none d-lg-block" variant="outline-*" size="lg">Book Now</rb.Button>
            </rb.Navbar>
        )
    }
}
