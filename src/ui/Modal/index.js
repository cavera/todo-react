import "./Modal.css";

import { createPortal } from "react-dom";

function Modal({ children }) {
	return createPortal(<div className='ModalBackground'>{children}</div>, document.getElementById("modal"));
}

export { Modal };
