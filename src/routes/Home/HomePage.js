// import "./App.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTodos } from "../useTodos";
import { TodoHeader } from "../../ui/TodoHeader";
import { TodoCounter } from "../../ui/TodoCounter";
import { TodoSearch } from "../../ui/TodoSearch";
import { TodoList } from "../../ui/TodoList";
import { TodoItem } from "../../ui/TodoItem";
import { TodosError } from "../../ui/TodosError";
import { TodosLoading } from "../../ui/TodosLoading";
import { EmptyTodos } from "../../ui/EmptyTodos";
import { EmptySearchResults } from "../../ui/EmptySearchResults";
import { Modal } from "../../ui/Modal";
import { TodoForm } from "../../ui/TodoForm";
import { CreateTodoButton } from "../../ui/CreateTodoButton";
import { ChangeAlert } from "../../ui/ChangeAlert";

function HomePage() {
	const navigate = useNavigate();
	const { states, stateUpdaters } = useTodos();

	const {
		error,
		loading,
		totalTodos,
		completedTodos,
		searchValue,
		searchedTodos,
		//  openModal
	} = states;

	const {
		setSearchValue,
		// addTodo,
		completeTodo,
		deleteTodo,
		// setOpenModal,
		syncronizeTodos,
	} = stateUpdaters;

	return (
		<>
			<TodoHeader loading={loading}>
				<TodoCounter
					totalTodos={totalTodos}
					completedTodos={completedTodos}
				/>
				<TodoSearch
					searchValue={searchValue}
					setSearchValue={setSearchValue}
				/>
			</TodoHeader>

			<TodoList
				error={error}
				loading={loading}
				searchedTodos={searchedTodos}
				totalTodos={totalTodos}
				searchValue={searchValue}
				onError={(error) => <TodosError error={error} />}
				onLoading={() => <TodosLoading />}
				onEmptyTodos={() => <EmptyTodos />}
				onEmptySearchResults={(searchValue) => <EmptySearchResults searchValue={searchValue} />}
				// Render prop
				render={(todo) => (
					<TodoItem
						key={todo.id}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.id)}
						onDelete={() => deleteTodo(todo.id)}
						onEdit={() => navigate(`/edit/${todo.id}`)}
					/>
				)}>
				{/* Render function */}
				{(todo) => (
					<TodoItem
						key={todo.id}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.id)}
						onDelete={() => deleteTodo(todo.id)}
						onEdit={() =>
							navigate(`/edit/${todo.id}`, {
								state: { todo },
							})
						}
					/>
				)}
			</TodoList>

			{/* {!!openModal && (
				<Modal>
					<TodoForm
						addTodo={addTodo}
						setOpenModal={setOpenModal}
					/>
				</Modal>
			)} */}

			<CreateTodoButton
				onClick={() => {
					navigate("/new");
				}}
				//setOpenModal={setOpenModal}
			/>

			<ChangeAlert syncronize={syncronizeTodos} />
		</>
	);
}

export { HomePage };
