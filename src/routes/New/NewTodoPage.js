import React from "react";

import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";

function NewTodoPage() {
	const { stateUpdaters } = useTodos();
	const { addTodo } = stateUpdaters;
	return (
		<TodoForm
			submitEvent={(newText) => addTodo(newText)}
			label='Escribe un nuevo TODO'
			submitText='Añadir'
		/>
	);
}

export { NewTodoPage };
