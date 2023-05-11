import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";
import { useLocation, useParams } from "react-router-dom";

function EditTodoPage() {
	const location = useLocation();
	const params = useParams();
	const { states, stateUpdaters } = useTodos();
	const { loading, getTodo } = states;
	const { editTodo } = stateUpdaters;
	const id = Number(params.id);

	console.log("location", location);

	let todoText = null;

	if (location.state?.todo) {
		todoText = location.state.todo.text;
	} else if (loading) {
		return <p>Cargando texto...</p>;
	} else {
		const thisTodo = getTodo(id);
		todoText = thisTodo.text;
	}

	return (
		<TodoForm
			submitEvent={(newTodoValue) => {
				editTodo(id, newTodoValue);
			}}
			label='Edita tu TODO'
			submitText='Confirmar'
			defaultTodoText={todoText}
		/>
	);
}

export { EditTodoPage };
