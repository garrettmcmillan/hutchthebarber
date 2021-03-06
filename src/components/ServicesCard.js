import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

export default class ServicesCard extends Component {
    
    render() {
        const { title, img, price, info } = this.props.service;
        return (
            <div className="service-card-container">
                <Card className="service-card align-items-center ">
                    <Card.Title
                        className="services-title mb-5 d-block d-lg-none">
                            {title}
                    </Card.Title>
                    <div className="about-content-div d-flex flex-lg-row flex-column">
                        <Card.Img
                            src={img}
                            className="service-card-img "
                        />
                        <div className="service-info d-flex flex-column align-items-center about-text ">
                            <Card.Title
                                className="services-title mb-5 d-none d-lg-block">
                                {title}
                            </Card.Title>
                            <Card.Text className="service-text ">
                                {info}
                            </Card.Text>
                            <br/>
                            <h3 className="service-price">
                                ${price}
                            </h3>
                        </div>
                        </div>
                    </Card>
            </div>
        )
    }
}

ServicesCard.propTypes = {
    service: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        info: PropTypes.string
    })
}