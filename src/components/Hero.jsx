import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Hero() {
    return (
        <div className='position-relative'>
            <Carousel fade controls={false} indicators={false}>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 imgSize"
                        src="https://wallpaperaccess.com/full/2159447.jpg"
                        alt="First slide"
                    />
                    {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 imgSize"
                        src="https://wallpaperaccess.com/full/2159447.jpg"
                        alt="Second slide"
                    />
                    {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgSize"
                        src="https://cdn.wallpapersafari.com/39/63/OZqSX1.jpg"
                        alt="Third slide"
                    />
                    {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Hero