import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CardEvent() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div class="card-item rounded border">
                <div class="card-img mt-2  text-center">
                    {/* <a href="#"> */}
                        <img src="https://placehold.co/200x200" alt="Image" className='rounded-circle'/>
                    {/* </a> */}
                </div>
                <div class="card-details p-2">
                    {/* <div class="card-meta">
                        <ul>
                            <li><a href="#">By: Md Dalwar</a></li>
                            <li><a href="#">Date: Jun 13, 2022</a></li>
                        </ul>
                    </div> */}
                    <h4 class="title mt-2">
                        Galaxy Tab S6 Lite 10.4-inch Android Tablet 128GB.
                    </h4>
                    <p class="excerpt">
                        Gravida in fermentum et sollicitudin ac orci phasellus. Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Sed velit dignissim sodales ut eu sem. Nam aliquam sem et tortor consequat id porta. Elit ut aliquam purus sit amet luctus venenatis lectus magna.
                    </p>
                    {/* <Button onClick={handleShow}>Read More</Button> */}
                </div>
            </div>






            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Don not even try to press
                    escape key.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CardEvent