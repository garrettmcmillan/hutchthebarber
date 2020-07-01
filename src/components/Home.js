import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class Home extends Component {
    render() {
        return (
            <>
            <div className="home-container-image" ></div>
            <div className="home-container">
                <div className="home-text-div">
                    <div className="home-container-spacer d-none d-lg-block"></div>
                    <div className="home-container-spacer-sm d-block d-lg-none"></div>

                    <div className="home-title d-none d-lg-block">
                    zack hutchinson: barber
                    </div>
                    <div className="home-text mx-3">
                    an old style barber at the hair den in winston-salem, nc
                    </div>
                    <Button
                        target="_blank"
                        href="https://booksy.com/en-us/429169_zack-hutchinson_barber-shop_108476_winston?do=invite&_branch_match_id=783405538344311294"
                        className="testing book-button book-button-home d-none d-lg-block"
                        variant="outline-*" 
                        size="lg">
                        Book An Appointment
                    </Button>
                    <Button
                        target="_blank"
                        href="https://booksy.com/en-us/429169_zack-hutchinson_barber-shop_108476_winston?do=invite&_branch_match_id=783405538344311294"
                        className="testing book-button book-button-home d-block d-lg-none"
                        variant="outline-*" 
                        size="lg">
                        Book Now
                    </Button>
                </div>
            </div> 
            </>          
        )
    }
}
