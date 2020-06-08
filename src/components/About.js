import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';


export default class About extends Component {
    render() {
        return (
            <div className="about-container">
                <div className="home-content-div">
                    <div className="home-container-spacer d-none d-lg-block"></div>
                    <div className="home-container-spacer-sm d-block d-lg-none"></div>
                    <Card className="about-div d-flex justify-content-center align-items-center">
                        <span className="about-title"> 
                            about hutch
                        </span>
                        <div className="about-content-div mt-5 d-flex flex-lg-row flex-column">
                            <Card.Img
                                src="https://images.unsplash.com/photo-1586632501637-20fed04db298?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                                className="card-img"
                            />
                            <Card.Text className="about-text">
                                I'm baby succulents celiac tattooed flexitarian, snackwave austin edison bulb cloud bread beard yr hammock ugh. Cold-pressed raw denim tote bag, mixtape health goth mlkshk everyday carry affogato. +1 migas asymmetrical, kitsch squid humblebrag franzen snackwave. Hell of put a bird on it thundercats vape affogato pop-up disrupt. Cloud bread tote bag sustainable ennui single-origin coffee normcore chillwave mustache. Microdosing succulents mustache, shoreditch marfa helvetica wolf 8-bit fam bespoke. Shabby chic brunch tofu occupy mumblecore iPhone gluten-free cronut drinking vinegar blue bottle palo santo art party.
                            <div className="social-div d-flex justify-content-center align-items-center flex-column">
                                <p className="social-title">
                                    connect with me
                                </p>
                                <Nav className="social-link-list">
                                <Nav.Item as='li'>
                                    <Button 
                                        target="_blank"
                                        variant="outline-*"
                                        className="social-icon
                                            fas fa-phone-square-alt"
                                        href="tel:3364798314">
                                    </Button>
                                </Nav.Item>
                                <Nav.Item as='li'>
                                    <Button 
                                        target="_blank"
                                        variant="outline-*"
                                        className="social-icon 
                                            fab fa-facebook-square"
                                        href="https://www.facebook.com/hutchthebarber/">
                                    </Button>
                                </Nav.Item>
                                <Nav.Item as='li'>
                                    <Button
                                        target="_blank"
                                        variant="outline-*"
                                        className="social-icon
                                            fab fa-instagram-square"
                                            href="https://www.instagram.com/hutchthebarberwsnc/">
                                    </Button>
                                </Nav.Item>
                            </Nav>
                            </div>
                            
                            </Card.Text>
                            
                        </div>
                    </Card>
                    <Card className="about-div shop-about-div d-flex justify-content-center align-items-center">
                        <span className="about-title">
                            the hair den
                        </span>
                        <div className="about-content-div mt-5 d-flex flex-md-row flex-column">
                        <Card.Img
                                src="https://images.unsplash.com/photo-1525708117204-bbe93e711abb?ixlib=rb-1.2.1&auto=format&fit=crop&w=3034&q=80"
                                className="card-img"
                            />
                        <Card.Text className="about-text">
                            I'm baby bicycle rights hot chicken marfa, semiotics cloud bread viral post-ironic freegan austin man bun activated charcoal craft beer lo-fi VHS williamsburg. Pickled squid ethical humblebrag marfa deep v. Cardigan biodiesel dreamcatcher salvia artisan thundercats vape portland authentic. Kinfolk 90's mixtape brunch. Direct trade freegan semiotics PBR&B hot chicken umami, vinyl vape slow-carb.
                        <div className="social-div d-flex justify-content-center align-items-center flex-column">
                            <p className="social-title ">
                                found at
                            </p>
                            <p className="address-text text-center">
                            855 W. Fourth in DTWS
                            </p>
                            <Button
                                target="_blank"
                                variant="outline-*"
                                className="social-icon
                                    fas fa-map"
                                href="https://www.google.com/maps/place/855+W+4th+St,+Winston-Salem,+NC+27101/@36.0972626,-80.2583562,17z/data=!3m1!4b1!4m5!3m4!1s0x8853ae38ea2056dd:0x350e3dab3b01b31d!8m2!3d36.0972626!4d-80.2561675">
                            </Button>
                        </div>
                        </Card.Text>
                        </div>
                    </Card>

                    {/* <Button
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
                    </Button> */}
                </div>
            </div>
        )
    }
}
