import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <>
            {/* <div className='social'>

    </div> */}

            <div className="social-container">
                <h2 className='p-2'>Join us!</h2>
                <div className='midSocial'>
                    <a href="https://www.youtube.com"
                        className="youtube social px-3 p-1">
                        <FontAwesomeIcon icon={faYoutube} size="3x" />
                    </a>
                    <a href="https://www.facebook.com"
                        className="facebook social px-3 p-1">
                        <FontAwesomeIcon icon={faFacebook} size="3x" />
                    </a>
                    <a href="https://www.twitter.com" className="twitter social px-3 p-1">
                        <FontAwesomeIcon icon={faTwitter} size="3x" />
                    </a>
                    <a href="https://www.instagram.com"
                        className="instagram social px-3 p-1 ">
                        <FontAwesomeIcon icon={faInstagram} size="3x" />
                    </a>
                </div>
            </div>
            <div className='footer text-center mt-5'>
                {/* <p className='mx-2'>Copyright © 2022 <span>Raahgiri Foundation</span>. All Rights Reserved</p> */}
                <p className='mx-3'>Project by <span>Leaflets</span> (a unit of IAMPIX TECHNOLOGY PVT LTD).</p>
            </div>
        </>
    )
}

export default Footer