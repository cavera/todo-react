import React from "react";
import { useNavigate } from "react-router-dom";
import "./TodoForm.css";

function TodoForm(props) {
	const navigate = useNavigate();
	const [newTodoValue, setNewTodoValue] = React.useState(props.defaultTodoText || "");

	const onCancel = () => navigate("/");

	const onChange = (event) => {
		setNewTodoValue(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		props.submitEvent(newTodoValue);
		navigate("/");
	};

	return (
		<div className='ModalBackground'>
			<form onSubmit={onSubmit}>
				<label>{props.label}</label>
				<textarea
					placeholder='qué quieres hacer?'
					value={newTodoValue}
					onChange={onChange}></textarea>
				<div className='TodoForm-buttonContainer'>
					<button
						type='button'
						className='TodoForm-button TodoForm-button--cancel'
						onClick={onCancel}>
						Cancelar
					</button>
					<button
						type='submit'
						className='TodoForm-button TodoForm-button--add'>
						{props.submitText}
					</button>
				</div>
			</form>
		</div>
	);
}

export { TodoForm };
