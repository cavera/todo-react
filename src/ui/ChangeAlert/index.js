import React from "react";
import { useStorageListener } from "./useStorageListener";
import "./ChangeAlert.css";

function ChangeAlert({ syncronize }) {
	const { show, toggleShow } = useStorageListener(syncronize);
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

export { ChangeAlert };
