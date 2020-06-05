import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'

export default class Home extends Component {
    render() {
        return (
            <div className="mx-auto">
                <Image className="home-image" src="https://picsum.photos/1000/600" fluid />
            </div>
        )
    }
}
