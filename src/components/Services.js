import React, { Component } from 'react'
import ServicesCard from './ServicesCard';
import { offeredServices } from '../ServicesData';
import Button from 'react-bootstrap/Button';


export default class Services extends Component {
    render() {
        const servicesList = offeredServices.map((service) => {
            return <ServicesCard service={service}/>
        })


        return (
            <div className="services-container mb-5 pb-5">
                <div className="home-container-spacer d-none d-lg-block"></div>
                <div className="home-container-spacer-sm d-block d-lg-none"></div>
                <div className="services-div"> 
                    <span className="about-title service-title"> 
                        my services
                    </span>
                </div>
                <div className="mt-5">
                    {servicesList}
                </div>
                <br/>
                <br/>
                <div className="service-button-div mx-auto">
                    <Button
                        target="_blank"
                        href="https://booksy.com/en-us/429169_zack-hutchinson_barber-shop_108476_winston?do=invite&_branch_match_id=783405538344311294"
                        className="book-button book-button-home d-none d-lg-block"
                        variant="outline-*" 
                        size="lg">
                        Book An Appointment
                    </Button>
                    <Button
                        target="_blank"
                        href="https://booksy.com/en-us/429169_zack-hutchinson_barber-shop_108476_winston?do=invite&_branch_match_id=783405538344311294"
                        className="book-button book-button-home d-block d-lg-none"
                        variant="outline-*" 
                        size="lg">
                        Book Now
                    </Button>
                </div>
                
            </div>
        )
    }
}
