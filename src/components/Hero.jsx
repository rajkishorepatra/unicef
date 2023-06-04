import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Hero() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    return (
        <>
            <div className='position-relative'>
                <Carousel fade controls={false} indicators={false}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 imgSize"
                            src="https://ik.imagekit.io/dqe4fvjcky/imagecompressor/IMG-20230323-WA0045-min_XQngR_Vtb.jpg?updatedAt=1685851087341"
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 imgSize"
                            src="https://ik.imagekit.io/dqe4fvjcky/imagecompressor/IMG-20230323-WA0046-min_Wgq6_-Kjd.jpg?updatedAt=1685851090029"
                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 imgSize"
                            src="https://ik.imagekit.io/dqe4fvjcky/imagecompressor/IMG-20230217-WA0006-min_6aEiPFrM6.jpg?updatedAt=1685851090124"
                            alt="Third slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100 imgSize"
                            src="https://ik.imagekit.io/dqe4fvjcky/imagecompressor/WhatsApp_Image_2023-05-14_at_5.40.37_PM__1_-min_Uh6K58laI.jpeg?updatedAt=1685851090990"
                            alt="Third slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100 imgSize"
                            src="https://ik.imagekit.io/dqe4fvjcky/imagecompressor/IMG-20221129-WA0002-min_3FF6BlkzV.jpg?updatedAt=1685851093473"
                            alt="Third slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100 imgSize"
                            src="https://ik.imagekit.io/dqe4fvjcky/imagecompressor/IMG-20221225-WA0025-min_sKxwSevJy.jpg?updatedAt=1685851094713"
                            alt="Third slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100 imgSize"
                            src="https://ik.imagekit.io/dqe4fvjcky/imagecompressor/IMG_20230509_092832197-min_8U-Brn20gB.jpg?updatedAt=1685851113291"
                            alt="Third slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100 imgSize"
                            src="https://ik.imagekit.io/dqe4fvjcky/imagecompressor/IMG_20230122_125151-min-min_u18l0ivciz.jpg?updatedAt=1685851135348"
                            alt="Third slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100 imgSize"
                            src="https://ik.imagekit.io/dqe4fvjcky/imagecompressor/IMG_20221019_175545627-min-min_Ia_tf1Izx.jpg?updatedAt=1685851155046"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <button
                id="button"
                className={showButton ? 'show' : ''}
                onClick={scrollToTop}
            >
            </button>
        </>
    )
}

export default Hero