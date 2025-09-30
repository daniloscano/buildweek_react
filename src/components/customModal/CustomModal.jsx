import "./customModal.css";
import { Modal } from "react-bootstrap";

const CustomModal = ({ children, text, show, setShow }) => {
    return (
        <Modal
            show={show}
            className="custom-modal"
            dialogClassName="modal-90w"
            onHide={() => setShow(false)}
            aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header className="custom-modal-header" closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    {text}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="custom-modal-body">{children}</Modal.Body>
        </Modal>
    );
};

export default CustomModal;
