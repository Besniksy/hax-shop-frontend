import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';


const newModal = (props) => {
    return (
        <Modal show={props.show} onHide={props.onHide} size={props.size}>
            <Modal.Header closeButton>
                <Modal.Title>{props.title} </Modal.Title>
            </Modal.Header>
            <Modal.Body> 
                {props.children}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={props.onClick}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
    );
};

export default newModal