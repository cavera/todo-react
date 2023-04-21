import React from "react";
import { withStorageListener } from "./withStorageListener";
import "./ChangeAlert.css";

function ChangeAlert({ show, toggleShow }) {
	if (show) {
		return (
			<div className='ChangeAlert-bg'>
				<div className='ChangeAlert-container'>
					<p>¡Tus tareas han cambiado! </p>
					<p>¿Quieres actualizar? 📝🔄</p>
					<button
						className='TodoForm-button TodoForm-button--add'
						onClick={() => toggleShow(false)}>
						Si, claro!
					</button>
				</div>
			</div>
		);
	} else {
		return null;
	}
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
