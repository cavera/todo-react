import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
	const { item: todos, saveItem: saveTodos, syncronizeItem: syncronizeTodos, loading, error } = useLocalStorage("TODOS_V2", []);

	const [searchValue, setSearchValue] = React.useState("");

	const completedTodos = todos.filter((todo) => !!todo.completed).length;
	const totalTodos = todos.length;

	let searchedTodos = [];

	if (!searchValue.length >= 1) {
		searchedTodos = todos;
	} else {
		searchedTodos = todos.filter((todo) => {
			const todoText = todo.text.toLowerCase();
			const searchText = searchValue.toLowerCase();
			return todoText.includes(searchText);
		});
	}

	const completeTodo = (id) => {
		const todoIndex = todos.findIndex((todo) => todo.id === id);
		const newTodos = [...todos];
		newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
		saveTodos(newTodos);
	};

	const editTodo = (id, newText) => {
		const todoIndex = todos.findIndex((todo) => todo.id === id);
		const newTodos = [...todos];
		newTodos[todoIndex].text = newText;
		saveTodos(newTodos);
	};

	const deleteTodo = (id) => {
		const todoIndex = todos.findIndex((todo) => todo.id === id);
		const newTodos = [...todos];
		newTodos.splice(todoIndex, 1);
		saveTodos(newTodos);
	};

	const addTodo = (text) => {
		const id = newTodoId(todos);
		const newTodos = [...todos];
		newTodos.push({
			completed: false,
			text: text,
			id,
		});
		saveTodos(newTodos);
	};

	const getTodo = (id) => {
		const todo = todos.find((todo) => todo.id === id);
		return todo;
	};

	const states = {
		error,
		loading,
		totalTodos,
		completedTodos,
		searchValue,
		searchedTodos,
		getTodo,
	};

	const stateUpdaters = {
		setSearchValue,
		addTodo,
		completeTodo,
		editTodo,
		deleteTodo,
		syncronizeTodos,
	};

	return {
		states,
		stateUpdaters,
	};
}

function newTodoId(todoList) {
	if (!todoList.length) {
		return 1;
	}
	const idList = todoList.map((todo) => todo.id);
	const idMax = Math.max(...idList);
	return idMax + 1;
}

export { useTodos };
