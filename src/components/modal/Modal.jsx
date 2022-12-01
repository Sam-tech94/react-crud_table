import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";


const Modal = ({ open, children, handleRemoveClick, setIsOpen }) => {
	if (!open) return null

	return ReactDOM.createPortal(
		<>
			<div className="modal-styles">
				<div className="modal-text">
					{children}
				</div>
				<div className="modal-buttons">
					<button className="yes" onClick={handleRemoveClick}>Yes</button>
					<button className="yes no" onClick={() => setIsOpen(!open)}>No</button>
				</div>
			</div>
		</>,
		document.getElementById("portal")
	)
}

export default Modal;