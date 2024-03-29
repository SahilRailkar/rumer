import React from 'react';
import { createPortal } from 'react-dom';

const modalStyle = {
	position: 'fixed',
	left: 0,
	top: 0,
	bottom: 0,
	right: 0,
	backgroundColor: 'rgba(0, 0, 0, 0.2)',
};

const Modal = ({ children }) => {
	return createPortal(
		<div style={modalStyle}>{children}</div>,
		document.getElementById('modal-root')
	);
};

export default Modal;
