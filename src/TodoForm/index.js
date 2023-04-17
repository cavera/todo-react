import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
	const [newTodoValue, setNewTodoValue] = React.useState("");
	const { addTodo, setOpenModal } = React.useContext(TodoContext);

	const onCancel = () => {
		setOpenModal(false);
	};

	const onChange = (event) => {
		setNewTodoValue(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		addTodo(newTodoValue);
		setOpenModal(false);
	};

	return (
		<form onSubmit={onSubmit}>
			<label>Escribe un nuevo TODO</label>
			<textarea
				placeholder='qué quieres hacer?'
				value={newTodoValue}
				onChange={onChange}></textarea>
			<div className='TodoForm-buttonContainer'>
				<button
					type='button'
					className='TodoForm-button Todoform-button--cancel'
					onClick={onCancel}>
					Cancelar
				</button>
				<button
					type='submit'
					className='TodoForm-button Todoform-button--add'>
					Añadir
				</button>
			</div>
		</form>
	);
}

export { TodoForm };
