import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalAdd(props) {
    const [show, setShow] = useState(false);
    const [isAdd, setIsAdd] = useState(true)
    const handleClose = () => setShow(false);
    const handleShow = () => {
        if (props.state) {
            console.log("huy", props.state);
            setIsAdd(true)
            setShow(true);
        } else {
            setIsAdd(false)
            setShow(true);

        }
    }

    const editmodal = () => {
        // handleClose()
        setIsAdd(true)

        // const AddFun = () => {
        //     setIsAdd(false)

        // } 
    }
    return (
        <>
            <Button variant="success" onClick={''}>
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    {
                        isAdd ? "add modal" : "edit modal"
                    }
                    <Modal.Title>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>

                <div
                    onClick={editmodal}
                    // className="tac borderGrey bg-Grey p1 mt2"
                    className="success-button primary-btn tac  bg-Grey p1 mt2  button fntWhite"
                >
                    {isAdd ? (
                        <span className="fntWhite">ADD Details</span>
                    ) : (
                        <span className="fntWhite">Edit Details</span>
                    )}
                </div>


            </Modal>

        </>
    );
}
export default ModalAdd;
