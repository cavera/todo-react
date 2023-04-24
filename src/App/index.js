// import "./App.css";
import React from "react";
import { useTodos } from "./useTodos";
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { EmptySearchResults } from "../EmptySearchResults";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { ChangeAlert } from "../ChangeAlert";

function App() {
	const { states, stateUpdaters } = useTodos();

	const { error, loading, totalTodos, completedTodos, searchValue, searchedTodos, openModal } = states;

	const { setSearchValue, addTodo, completeTodo, deleteTodo, setOpenModal, syncronizeTodos } = stateUpdaters;

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
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				)}>
				{/* Render function */}
				{(todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				)}
			</TodoList>

			{!!openModal && (
				<Modal>
					<TodoForm
						addTodo={addTodo}
						setOpenModal={setOpenModal}
					/>
				</Modal>
			)}

			<CreateTodoButton setOpenModal={setOpenModal} />

			<ChangeAlert syncronize={syncronizeTodos} />
		</>
	);
}

export default App;
